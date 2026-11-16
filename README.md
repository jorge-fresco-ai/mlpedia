# MLpedia — Enciclopedia técnica interactiva de Machine Learning

**Web pública:** https://jorge-fresco-ai.github.io/mlpedia/

MLpedia recopila **106 fichas de modelos y arquitecturas** (65 de ML clásico procedentes de la guía inicial, 26 de Deep Learning y 15 de Reinforcement Learning), **40 conceptos técnicos**, **5 rutas de aprendizaje** y un **comparador transversal** de hasta tres modelos. Está orientada a docencia y consulta técnica en español.

## Secciones

| Sección | Archivo | Funcionalidad |
| --- | --- | --- |
| ML clásico | [index.html](index.html) | 65 fichas, filtros, favoritos y consulta de código |
| Deep Learning y RL | [explorar.html](explorar.html) | 41 fichas con descripción, matemáticas, entrenamiento, métricas, limitaciones, referencias y código |
| ★ Comparador | [comparar.html](comparar.html) | Contrastar de dos a tres modelos de cualquier área por paradigma, supuestos, métrica, método y limitaciones |
| Conceptos | [conceptos.html](conceptos.html) | 40 conceptos sobre optimización, redes, atención, grafos, generación y RL |
| Rutas | [rutas.html](rutas.html) | 5 itinerarios con objetivos, módulos, enlaces específicos y progreso local |

Los laboratorios y simuladores se retiraron deliberadamente para priorizar la experiencia de referencia y aprendizaje guiado.

## Nuevos grupos de Deep Learning

La ampliación incluye arquitectura de grafos (GCN, GAT, GraphSAGE), aprendizaje métrico y contrastivo (Siamese, SimCLR), multimodalidad (CLIP), secuencias convolucionales (TCN), conjuntos (Deep Sets), ecuaciones diferenciales neuronales (Neural ODE) y modelos probabilísticos invertibles (Normalizing Flows).

Se distinguen arquitectura, familia, tarea y paradigma; una arquitectura como Transformer o GCN no pertenece por definición a un único paradigma.

## Validación y límites

Las fichas de DL/RL se encuentran en `content/models-v2.json`, las 65 originales se exportan a `content/models-classic.json` para permitir la comparación transversal y los conceptos están en `content/concepts-v2.json`.

El workflow de GitHub Actions comprueba integridad de datos y sintaxis Python y JavaScript; **estas comprobaciones no equivalen a ejecutar el entrenamiento de los modelos ni validan las dependencias**. Los fragmentos de Python incluyen su tipo y un estado de validación. Las rutas y favoritos usan almacenamiento del navegador.

Ejecutar localmente:

```bash
git clone https://github.com/jorge-fresco-ai/mlpedia.git
cd mlpedia
python3 -m http.server 8000
```

Abrir http://localhost:8000/ (algunas páginas cargan datos mediante `fetch` y requieren HTTP).

## Autoría y procedencia

**Obra de referencia de los 65 modelos originales:** Fresco, J. (2026). *MLpedia: Guía de Modelos de Machine Learning*. Material docente de referencia.

Las 41 fichas añadidas, las rutas, los conceptos y la interfaz son una ampliación y **no constituyen texto extraído literalmente del PDF inicial**. Las fichas nuevas citan artículos y bibliografía de referencia; esos trabajos conservan sus derechos.

## Licencias

- Código original de la aplicación: [MIT](LICENSE).
- Contenido educativo original: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/deed.es). Se permite reutilizar y adaptar atribuyendo a Jorge Fresco, indicando cambios y enlazando la licencia.
- Los materiales pertenecientes a terceros conservan sus licencias y derechos.

Autor: Jorge Fresco · [GitHub](https://github.com/jorge-fresco-ai).
