import { EstadoReproductorAudio } from './reproductor-audio.estado';
import { EstadoReproduciendo } from './estado-reproduciendo';
import { EstadoBloqueado } from './estado-bloqueado';

export class EstadoListo extends EstadoReproductorAudio {
    public clickReproducir(): void {
        console.log("[LISTO] -> Iniciando la música...");
        this.reproductor.iniciarReproduccion();
        this.reproductor.cambiarEstado(new EstadoReproduciendo(this.reproductor));
    }

    public clickBloquear(): void {
        console.log("[LISTO] -> Bloqueando dispositivo.");
        this.reproductor.cambiarEstado(new EstadoBloqueado(this.reproductor));
    }

    public clickSiguiente(): void {
        console.log("[LISTO] -> Avanzando canción (en pausa)...");
        this.reproductor.siguientePista();
    }
}