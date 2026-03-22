# 🎹 Euclidean IDM Sequencer - Roadmap & Tareas Pendientes

Este documento sirve para llevar el seguimiento de las mejoras y correcciones del proyecto.

## ✅ Completado
- [x] **Sincronización Atómica de Pasos:** El patrón se recalcula instantáneamente al mover el slider de `Steps`.
- [x] **Ajuste Automático de Pulsos:** Al reducir pasos, los pulsos se ajustan para no superar el límite.
- [x] **Sincronización de UI en Tiempo Real:** El contador de `Pulses` refleja los cambios manuales hechos clicando en el secuenciador.
- [x] **Edición de Probabilidad por Teclado:** Doble clic para input numérico, manteniendo arrastre.
- [x] **Sistema de Presets "Euclidean Machine (Nivel 1)":**
    - [x] Definir esquema de datos para Presets (Track vs Scene).
    - [x] Crear librería `src/constants/presets.ts` con la Guía Maestra (Flamenco & IDM).
    - [x] **Ghost Preview:** Iluminación ámbar tenue al hacer hover en presets.
    - [x] **Macro Interpolation:** Rampas de 50ms para cambios de Jitter/Swing.
    - [x] **LCM Indicator:** Visualizador de "Zona de Evolución Infinita" (LCM > 1000).
    - [x] Implementar Panel de Presets en la UI.
- [x] **Estabilidad y Rendimiento (Fase 2):**
    - [x] **Protección de Triggers:** Bloques try/catch en el bucle de audio para evitar crashes fatales.
    - [x] **Optimización de Animaciones:** Detención de `requestAnimationFrame` en el SpectrumAnalyzer cuando no hay audio.
    - [x] **Memoización de Pistas:** Implementación de `React.memo` con comparación personalizada en `EuclideanTrack`.
    - [x] **Estabilización de useMemo:** Uso de `stepsKey` estable para el cálculo del MCM.
- [x] **Mezclador Integrado (Fase 2):**
    - [x] **Fader de Volumen Vertical:** Transformación de la barra de acento en un control de volumen interactivo.
    - [x] **Mapeo Logarítmico:** Conversión de ganancia lineal a dB con rampas suaves de 50ms.
    - [x] **Feedback Visual de Energía:** Llenado dinámico de la barra según el nivel de volumen.

## 🛠️ En Progreso
- [ ] **Refinamiento de la Interfaz de Usuario:** Pulir las transiciones entre perspectivas (Macro/Meso/Micro) y mejorar la legibilidad en pantallas pequeñas.
- [ ] **Visualizador Circular Avanzado:** Mejorar la representación 3D de los anillos de ritmo (PhaseRadar).
- [ ] **Efectos de Audio:** Añadir Delay/Reverb global controlable en el Master Bus.

## 🚀 Próximas Mejoras (Roadmap)
- [ ] **Exportación MIDI:** Capacidad de descargar el patrón como archivo MIDI multicanal.
- [ ] **Monitor de Rendimiento Avanzado:**
    - [ ] **Perfil de Hardware:** Detectar memoria y núcleos del dispositivo.
    - [ ] **Latencia de Audio:** Medir latencia real del AudioContext.
    - [ ] **Dashboard Forense:** Panel flotante con gráficas de rendimiento.
- [ ] **Motor DSP Avanzado (EPL Integration):**
    - [ ] Extracción de RMS y ZCR en tiempo real.
    - [ ] Exportación de datos de análisis a JSON/Parquet.
