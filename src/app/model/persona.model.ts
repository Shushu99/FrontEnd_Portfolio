export class persona{
    id?: number;
    nombre: string;
    apellido: string;
    titulo: string;
    descripcion: string;
    imagen: string;

    constructor(nombre: string, apellido: string, titulo: string, descripcion: string, img: string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.imagen = img;
    }
}