# MLpedia — Biblioteca interactiva de Machine Learning

**Web:** https://jorge-fresco-ai.github.io/mlpedia/ (disponible al activar GitHub Pages).

Biblioteca interactiva en español basada en la obra original **_MLpedia: Guía de Modelos de Machine Learning_**, de **Jorge Fresco** (2026), material docente del Máster en Inteligencia Artificial.

## Funciones

- 65 fichas de modelos y técnicas.
- Filtros por aprendizaje supervisado o no supervisado, tarea (regresión, clasificación, clustering, reducción dimensional, anomalías y reglas de asociación) y familia.
- Búsqueda, comparación de hasta tres modelos y favoritos locales.
- Fichas con descripción, supuestos, preprocesamiento, hiperparámetros, métricas, pros/contras y ejemplos de Python.
- Notas editoriales de corrección técnica.

## Uso

Abre `index.html` en el navegador o utiliza el enlace de GitHub Pages. La web es HTML, CSS y JavaScript, sin backend. Los favoritos quedan guardados en el navegador; los ejemplos Python no se ejecutan en la web.

## Publicación con GitHub Pages

En **Settings → Pages → Build and deployment**: selecciona **Deploy from a branch**, `main`, `/ (root)` y pulsa **Save**. La página se servirá desde `index.html`.

## Estructura

```text
index.html  # Aplicación
README.md   # Documentación
LICENSE     # MIT para código / CC BY 4.0 para contenido
.nojekyll   # Ignora Jekyll
```

## Fuente original y licencia

**Obra original:** Fresco, J. (2026). *MLpedia: Guía de Modelos de Machine Learning*. Material docente del Máster en Inteligencia Artificial. Documento original aportado por su autor para esta adaptación interactiva.

**Cambios realizados:** conversión a una interfaz web, reorganización navegable, filtros, búsqueda, comparador, favoritos y anotaciones técnicas.

**Textos y contenidos educativos originales:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/deed.es). Se permite compartir, adaptar y reutilizar, incluso comercialmente, con atribución a Jorge Fresco, enlace a la licencia e indicación de modificaciones, sin sugerir que el autor avala la reutilización.

**Código original de la aplicación:** [Licencia MIT](./LICENSE). Permite usar, modificar y redistribuir el código conservando el aviso de copyright y licencia.

Los materiales de terceros, si los hubiera, mantienen sus derechos y licencias correspondientes.

**Cita sugerida:** Fresco, J. (2026). *MLpedia: Guía de Modelos de Machine Learning*. Adaptación web interactiva: MLpedia. https://github.com/jorge-fresco-ai/mlpedia

**Autor:** Jorge Fresco · https://github.com/jorge-fresco-ai
