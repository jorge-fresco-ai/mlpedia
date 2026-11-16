# MLpedia — Catálogo técnico y laboratorios interactivos

**Web:** https://jorge-fresco-ai.github.io/mlpedia/

MLpedia reúne las **65 fichas originales de Machine Learning clásico** con **31 nuevas fichas** de Deep Learning (16) y Reinforcement Learning (15), **15 conceptos** y **6 laboratorios**. Está orientada a consulta técnica y docencia en español.

## Navegación

| Sección | Ruta | Funcionalidad |
| --- | --- | --- |
| ML clásico | [index.html](./index.html) | 65 fichas del documento fuente, búsqueda, filtros, favoritos, comparador y ejemplos Python |
| DL y RL | [explorar.html](./explorar.html) | 31 fichas nuevas con fórmulas, entrenamiento, métricas, limitaciones, código y demostraciones |
| Comparador transversal | [comparar.html](./comparar.html) | Comparar hasta tres modelos entre los 65 de ML clásico y los 31 de DL/RL |
| Laboratorios | [laboratorios.html](./laboratorios.html) | MLP, convoluciones, atención, bandits, GridWorld y objetivos DQN/PPO |
| Conceptos | [conceptos.html](./conceptos.html) | 15 conceptos transversales |
| Rutas | [rutas.html](./rutas.html) | 3 recorridos progresivos con progreso local |

### Qué se ejecuta realmente

- **MLP:** aprendizaje SGD con backpropagation sobre XOR; gráficos y predicciones calculados, sin validación externa en ese ejemplo pequeño.
- **Convoluciones:** correlación cruzada 2D y salida calculada a partir de kernel y stride.
- **Atención:** producto escalado QKᵀ, softmax y combinación ponderada de V sobre vectores ilustrativos.
- **Bandits:** interacción con recompensas Bernoulli, estrategias ε-greedy y UCB1, pseudo-regret.
- **GridWorld:** Q-Learning y SARSA tabulares en JavaScript con retorno, éxito y política.
- **DQN/PPO:** visualización de fórmulas y objetivos; **no entrena redes de Deep RL**.

Una demostración compacta está disponible dentro de las fichas asociadas. La vista compacta y el laboratorio completo **comparten la lógica de cálculo**, y GridWorld conserva sus parámetros en el enlace hacia la vista completa.

## Desarrollo y publicación

La web pública está en `main`. Se publica mediante **GitHub Pages**, sin backend.

Las fichas de DL/RL se almacenan en `content/models-v2.json` y los conceptos en `content/concepts-v2.json`. Los laboratorios comparten motor en `src/laboratorios.js` y `labs/gridworld.js`.

Para desarrollo local:

```bash
git clone https://github.com/jorge-fresco-ai/mlpedia.git
cd mlpedia
python3 -m http.server 8000
```

Abre http://localhost:8000/. Es necesario usar HTTP local, ya que las fichas nuevas se cargan con `fetch` desde archivos JSON.

**Validación de código:** las 96 muestras de Python se analizan sintácticamente mediante AST en CI. Los 31 ejemplos nuevos se etiquetan como fragmentos o ejemplos autónomos y se marcan como pendientes de verificación de ejecución. Esta validación sintáctica NO demuestra que se hayan ejecutado correctamente ni que las dependencias funcionen. El JavaScript se somete también a comprobaciones de sintaxis.

**Limitaciones:** Los códigos Python son ejemplos o fragmentos de referencia; no todos son programas de entrenamiento completos ni han sido ejecutados en CI. Las demostraciones no sustituyen benchmarks con múltiples semillas, separación de datos y validación estadística. La persistencia de favoritos y rutas se limita al navegador.

## Obra original y atribución

**Documento fuente de las 65 fichas originales:** Fresco, J. (2026). *MLpedia: Guía de Modelos de Machine Learning*. Material docente del Máster en Inteligencia Artificial, proporcionado por su autor para esta adaptación.

**Aportaciones de esta web:** reorganización del material en catálogo con filtros; anotaciones editoriales; nuevas fichas técnicas de DL y RL sintetizadas a partir de bibliografía especializada citada en cada ficha; conceptos, rutas y laboratorios. **Las 31 nuevas fichas no proceden literalmente del PDF original.**

## Licencias

- **Código original de la aplicación:** [MIT](./LICENSE).
- **Textos educativos originales:** [Creative Commons BY 4.0](https://creativecommons.org/licenses/by/4.0/deed.es). Se permite usar y adaptar, incluso comercialmente, **atribuyendo a Jorge Fresco, indicando los cambios y enlazando la licencia**.
- Cualquier material de terceros mantiene sus derechos y condiciones propias.

Autor: **Jorge Fresco** · [GitHub](https://github.com/jorge-fresco-ai).
