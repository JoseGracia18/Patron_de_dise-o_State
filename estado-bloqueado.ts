import { EstadoReproductorAudio } from './reproductor-audio.estado';
import { EstadoListo } from './estado-listo';

export class EstadoBloqueado extends EstadoReproductorAudio {
    public clickReproducir(): void { console.log("[BLOQUEADO] -> Acción denegada."); }
    public clickSiguiente(): void  { console.log("[BLOQUEADO] -> Acción denegada."); }

    public clickBloquear(): void {
        console.log("[BLOQUEADO] -> Desbloqueando pantalla del reproductor...");
        this.reproductor.cambiarEstado(new EstadoListo(this.reproductor));
    }
}