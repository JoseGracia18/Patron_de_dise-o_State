# 🎵 Reproductor de Audio - Patrón de Diseño State

Este proyecto implementa la simulación de un **Reproductor de Audio** utilizando el patrón de diseño **State (Estado)** en TypeScript. El objetivo principal es demostrar cómo gestionar comportamientos dinámicos basados en el estado interno del objeto, eliminando por completo el uso de estructuras condicionales complejas (`if`/`switch`) en la clase principal.

---

## 📐 Arquitectura del Patrón State

El proyecto se divide siguiendo estrictamente la estructura del patrón GoF (Gang of Four):

1. **Contexto (`ReproductorAudio`):** Mantiene la instancia del estado actual, almacena los datos de la aplicación (pista actual) y delega las acciones de la botonera externa al estado activo.
2. **Estado Base (`EstadoReproductorAudio`):** Clase abstracta que define el contrato obligatorio (métodos/botones) para todos los estados posibles y mantiene la referencia al contexto.
3. **Estados Concretos:** * `EstadoListo`: Comportamiento del dispositivo cuando está encendido pero en pausa.
   * `EstadoReproduciendo`: Comportamiento activa mientras suena la música.
   * `EstadoBloqueado`: Mecanismo de seguridad que aísla el hardware de pulsaciones accidentales.

---

## 🛠️ Principios SOLID Aplicados

* **Principio de Responsabilidad Única (SRP):** Cada estado concreto encapsula única y exclusivamente la lógica de negocio que le corresponde a su situación. El bloqueo de pantalla no se mezcla con la reproducción.
* **Principio de Abierto/Cerrado (OCP):** El sistema está **cerrado a la modificación** en su núcleo (`ReproductorAudio`), el cual no cambia si se agregan nuevas funciones. Sin embargo, está **abierto a la extensión**, permitiendo añadir nuevos botones (como `clickAnterior()`) extendiendo la lógica dentro de los estados individuales.

---

## 📁 Estructura de Archivos

```text
reproductor-state/
│
├── reproductor-audio.estado.ts    # Clase abstracta base (Contrato)
├── reproductor-audio.contexto.ts  # Clase cerebro y hardware (Contexto)
├── estado-listo.ts                # Estado en pausa
├── estado-reproduciendo.ts         # Estado en reproducción activa
├── estado-bloqueado.ts            # Estado de seguridad
└── index.ts                       # Entorno de pruebas y simulación (Cliente)
