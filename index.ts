import { ReproductorAudio } from './reproductor-audio.contexto';

console.log("=== SIMULACIÓN DEL REPRODUCTOR EN ESPAÑOL ===\n");
const miEquipo = new ReproductorAudio();

// 1. Probamos play (Iniciar)
miEquipo.presionarReproducir();

// 2. Probamos pausar
miEquipo.presionarReproducir();

// 3. Bloqueamos
miEquipo.presionarBloquear();
