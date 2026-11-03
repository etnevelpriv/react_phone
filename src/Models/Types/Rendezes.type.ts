import type { Lista_type } from "./Lista.type"

export type Rendezes_props = {
    changeOrder:(order:Lista_type["novekvo"])=>void;
    novekvo:Lista_type["novekvo"];
    rendezes:boolean;
    changeRendezes: (rendezesBool:boolean)=>void
}