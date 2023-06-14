import {Category} from "./category";

export class Event{
  ep_id!: number;
  titulo!: string;
  descripcion!: string;
  id_imagen!: string;
  lugar!: string;
  link!: string;
  interesesDTOS: any[] = [];
  publico!:string;
}
