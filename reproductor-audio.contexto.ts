import { EstadoReproductorAudio } from './reproductor-audio.estado';
import { EstadoListo } from './estado-listo';

export class ReproductorAudio {
    private estado: EstadoReproductorAudio;
    private pistaActual: number = 1;
    private totalPistas: number = 3;

    constructor() {
        // Estado inicial por defecto
        this.estado = new EstadoListo(this);
    }

    public cambiarEstado(nuevoEstado: EstadoReproductorAudio): void {
        this.estado = nuevoEstado;
    }

    /** =========================================================
     * MÉTODOS DE DELEGACIÓN (Botonera externa - Cerrado a Modificación)
     * 
     * ========================================================= */
    public presionarReproducir(): void { this.estado.clickReproducir(); }
    public presionarBloquear(): void   { this.estado.clickBloquear(); }
    public presionarSiguiente(): void  { this.estado.clickSiguiente(); }

    /** =========================================================
     * MÉTODOS DE HARDWARE / OPERATIVOS (Abiertos a Extensión)
     * ========================================================= */
    public iniciarReproduccion(): void {
        console.log(`>> [HARDWARE] Reproduciendo pista #${this.pistaActual}...`);
    }

    public detenerReproduccion(): void {
        console.log(`>> [HARDWARE] Audio pausado en pista #${this.pistaActual}.`);
    }

    public siguientePista(): void {
        this.pistaActual = this.pistaActual >= this.totalPistas ? 1 : this.pistaActual + 1;
        console.log(`>> [HARDWARE] Pista actual movida a: #${this.pistaActual}`);
    }

    public anteriorPista(): void {
        this.pistaActual = this.pistaActual <= 1 ? this.totalPistas : this.pistaActual - 1;
        console.log(`>> [HARDWARE] Pista actual movida a: #${this.pistaActual}`);
    }
}