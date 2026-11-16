#!/usr/bin/env python3
"""MLpedia static content regression checks; no third-party dependencies."""
from __future__ import annotations
import ast
import json
import pathlib
import re
import sys
ROOT = pathlib.Path(__file__).resolve().parents[1]
def fail(msg: str):
    raise AssertionError(msg)
def load(path: str):
    return json.loads((ROOT / path).read_text(encoding="utf-8"))
classic = load("content/models-classic.json")
advanced = load("content/models-v2.json")
concepts = load("content/concepts-v2.json")
assert len(classic) == 65, f"Expected 65 original entries, got {len(classic)}"
assert len(advanced) == 41, f"Expected 41 new entries, got {len(advanced)}"
assert len(concepts) == 40, f"Expected 40 concepts, got {len(concepts)}"
assert len({x["id"] for x in classic}) == 65
assert len({x["id"] for x in advanced}) == 41
assert len({x["id"] for x in concepts}) == 15
assert sum(x["area"] == "Deep Learning" for x in advanced) == 26
assert sum(x["area"] == "Reinforcement Learning" for x in advanced) == 15
assert all(x["reference"].strip() for x in advanced), "Missing references"
assert all(x["codeKind"] in ("fragmento", "ejemplo") for x in advanced)
assert all(x["codeValidation"] in ("pendiente_ejecucion", "validado_ejecucion") for x in advanced)
for m in classic:
    code = m["sections"].get("Ejemplo de código", "")
    assert code, f"Missing classic Python: {m['name']}"
    ast.parse(code, filename=f"classic-{m['id']}")
for m in advanced:
    code = m.get("code", "")
    assert code, f"Missing advanced Python: {m['name']}"
    ast.parse(code, filename=f"advanced-{m['id']}")
for page in ("index.html", "explorar.html", "conceptos.html", "rutas.html", "comparar.html"):
    html = (ROOT / page).read_text(encoding="utf-8")
    assert "</html>" in html, f"Truncated HTML: {page}"
    assert 'href="comparar.html"' in html or page == "comparar.html", f"Comparator link missing: {page}"
assert "<iframe" not in (ROOT / "index.html").read_text(encoding="utf-8"), "Lab must not be on homepage"
assert not (ROOT / "laboratorios.html").exists(), "Lab page must be removed"
assert not (ROOT / "labs/gridworld.html").exists(), "GridWorld demo must be removed"
assert not (ROOT / "src/laboratorios.js").exists(), "Lab engine must be removed"
assert "content/models-classic.json" in (ROOT / "comparar.html").read_text(encoding="utf-8")
assert "content/models-v2.json" in (ROOT / "comparar.html").read_text(encoding="utf-8")
print(f"OK: {len(classic)+len(advanced)} Python snippets parse, {len(concepts)} concepts, 5 pages")
print("NOTICE: AST check is syntax only; it does not execute Python examples.")
