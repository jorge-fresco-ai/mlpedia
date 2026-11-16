# ADR-001: experiencia híbrida de MLpedia 2.0

Estado: aceptada (implementación inicial en `develop`).

MLpedia 2.0 combina fichas de referencia de nivel intermedio-avanzado con demostraciones breves y laboratorios independientes. La demostración y la vista completa comparten implementación. Los parámetros se transfieren mediante la URL; el indicador `embed=1` activa el diseño compacto.

**Primera prueba:** `labs/gridworld.html` y `labs/gridworld.js`: Q-Learning y SARSA tabulares, actualización de Bellman y SARSA real, semillas reproducibles, retorno, porcentaje de éxito y política. No se afirma entrenar DQN o PPO.

`main` permanece como versión estable. Solo después de pruebas y revisión se fusionarán cambios.

Siguiente trabajo: pruebas automatizadas del motor y accesibilidad; refactorización del catálogo en datos estructurados; fichas DL/RL con fuentes y seis laboratorios graduales.

Fuente: Jorge Fresco (2026), *MLpedia: Guía de Modelos de Machine Learning*. Consultar README y LICENSE.
