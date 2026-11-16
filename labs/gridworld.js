"use strict";
(function(){
const $=id=>document.getElementById(id);
const N=5, START=0, GOAL=24, WALL=new Set([7,12,17]), TRAPS=new Set([14,19]);
const moves=[[-1,0],[0,1],[1,0],[0,-1]], symbols=["↑","→","↓","←"];
let q=[],rng,history=[],wins=[],episodes=0,current=START,runId=0;
const query=new URLSearchParams(location.search);
if(query.get("embed")==="1")document.body.classList.add("embed");
for(const id of ["algo","alpha","gamma","epsilon","seed","batch"])if(query.has(id))$(id).value=query.get(id);
function random(seed){let x=(seed>>>0)||1;return function(){x^=x<<13;x^=x>>>17;x^=x<<5;return(x>>>0)/4294967296;};}
function cfg(){return {algo:$("algo").value,alpha:Number($("alpha").value),gamma:Number($("gamma").value),epsilon:Number($("epsilon").value),seed:Number($("seed").value)||0};}
function maxAction(s){const m=Math.max.apply(null,q[s]);const ties=[0,1,2,3].filter(a=>q[s][a]===m);return ties[Math.floor(rng()*ties.length)];}
function action(s,eps){return rng()<eps?Math.floor(rng()*4):maxAction(s);}
function move(s,a){const r=Math.floor(s/N)+moves[a][0],c=s%N+moves[a][1];let next=(r<0||r>=N||c<0||c>=N||WALL.has(r*N+c))?s:r*N+c;return {s:next,r:next===GOAL?10:TRAPS.has(next)?-10:-0.1,done:next===GOAL||TRAPS.has(next),won:next===GOAL};}
function trainEpisode(){const p=cfg();let s=START,a=action(s,p.epsilon),total=0,won=false;for(let t=0;t<100;t++){const z=move(s,a),nextA=z.done?0:action(z.s,p.epsilon);const future=z.done?0:(p.algo==="q"?Math.max.apply(null,q[z.s]):q[z.s][nextA]);q[s][a]+=p.alpha*(z.r+p.gamma*future-q[s][a]);total+=z.r;if(z.done){won=z.won;break;}s=z.s;a=p.algo==="sarsa"?nextA:action(s,p.epsilon);}episodes++;history.push(total);wins.push(won?1:0);}
function train(k){runId++;for(let i=0;i<k;i++)trainEpisode();current=START;render();$("message").textContent="Entrenados "+k+" episodios; total "+episodes+".";}
function bestSymbol(s){if(WALL.has(s))return "■";if(TRAPS.has(s))return "⚠";if(s===GOAL)return "★";if(q[s].every(v=>v===0))return "·";return symbols[q[s].indexOf(Math.max.apply(null,q[s]))];}
function render(){let html="";for(let s=0;s<25;s++){let cls="cell"+(WALL.has(s)?" wall":"")+(TRAPS.has(s)?" trap":"")+(s===GOAL?" goal":"")+(s===current?" agent":"");html+='<div class="'+cls+'" aria-label="Estado '+s+'">'+(s===current?"◆":bestSymbol(s))+"</div>";}$("board").innerHTML=html;$("episodes").textContent=episodes;const r=history.slice(-100),w=wins.slice(-100);$("success").textContent=w.length?Math.round(w.reduce((a,b)=>a+b,0)*100/w.length)+"%":"—";$("return").textContent=r.length?(r.reduce((a,b)=>a+b,0)/r.length).toFixed(1):"—";draw();}
function draw(){const el=$("curve");if(!el)return;if(!history.length){el.innerHTML='<text x="300" y="96" fill="#adb0bd" text-anchor="middle">Entrena para visualizar el retorno</text>';return;}const avg=history.map((_,i)=>{const slice=history.slice(Math.max(0,i-19),i+1);return slice.reduce((a,b)=>a+b,0)/slice.length;});const mn=Math.min(-12,...avg),mx=Math.max(10,...avg),dy=mx-mn||1;const pts=avg.map((v,i)=>(20+i*560/Math.max(1,avg.length-1)).toFixed(1)+","+(155-(v-mn)*125/dy).toFixed(1)).join(" ");el.innerHTML='<line x1="20" y1="155" x2="580" y2="155" stroke="#555"/><polyline points="'+pts+'" fill="none" stroke="#23b4aa" stroke-width="2.5"/>';}
function setLink(){const p=new URLSearchParams();for(const id of ["algo","alpha","gamma","epsilon","seed","batch"])p.set(id,$(id).value);$("full").href="gridworld.html?"+p.toString();}
function reset(){runId++;const p=cfg();rng=random(p.seed);q=Array.from({length:25},()=>[0,0,0,0]);history=[];wins=[];episodes=0;current=START;for(const id of ["alpha","gamma","epsilon"])$(id+"Value").textContent=$(id).value;setLink();render();$("message").textContent="Listo para entrenar.";}
function watch(){const token=++runId;current=START;let count=0;function tick(){if(token!==runId)return;render();if(current===GOAL||TRAPS.has(current)||count>=35){$("message").textContent=current===GOAL?"Meta alcanzada":TRAPS.has(current)?"El agente cayó en una trampa":"Límite de pasos";return;}current=move(current,maxAction(current)).s;count++;setTimeout(tick,160);}tick();}
$("train").onclick=()=>train(Number($("batch").value));$("step").onclick=()=>train(1);$("reset").onclick=reset;$("watch").onclick=watch;
for(const id of ["algo","alpha","gamma","epsilon","seed","batch"])$(id).addEventListener("change",reset);
for(const id of ["alpha","gamma","epsilon"])$(id).addEventListener("input",()=>$(id+"Value").textContent=$(id).value);
reset();
})();