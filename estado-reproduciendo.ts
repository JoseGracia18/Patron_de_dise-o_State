import { EstadoReproductorAudio } from './reproductor-audio.estado';
import { EstadoListo } from './estado-listo';
import { EstadoBloqueado } from './estado-bloqueado'; // <- AGREGA ESTA LÍNEA

export class EstadoReproduciendo extends EstadoReproductorAudio {
    public clickReproducir(): void {
        console.log("[REPRODUCIENDO] -> Pausando la música...");
        this.reproductor.detenerReproduccion();
        this.reproductor.cambiarEstado(new EstadoListo(this.reproductor));
    }

    public clickBloquear(): void {
        console.log("[REPRODUCIENDO] -> Bloqueando mientras suena música.");
        // ASÍ QUEDA CORREGIDA LA LÍNEA 14:
        this.reproductor.cambiarEstado(new EstadoBloqueado(this.reproductor));
    }

    public clickSiguiente(): void {
        console.log("[REPRODUCIENDO] -> Saltando a la siguiente pista inmediatamente...");
        this.reproductor.siguientePista();
    }
}