import { ReproductorAudio } from './reproductor-audio.contexto';

export abstract class EstadoReproductorAudio {
    protected reproductor: ReproductorAudio;

    constructor(reproductor: ReproductorAudio) {
        this.reproductor = reproductor;
    }

    abstract clickReproducir(): void;
    abstract clickBloquear(): void;
    abstract clickSiguiente(): void;
}