export class Produto {
    constructor(
        public codProd:number, 
        public desc:string,
        public regAnvisa:string,
        public controlado:boolean,
        public codGrupo: number) {}
}