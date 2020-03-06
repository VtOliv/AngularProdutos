export class Produto {
    constructor(
        public _codProd?:number, 
        public _desc?:string,
        public _regAnvisa?:string,
        public _controlado?:boolean,
        public _codGrupo?: number) {}

        public get cod(): number {
            return this._codProd;
        }
    
        public get desc(): string {
            return this._desc;
        }
    
        public set desc(value: string) {
            this._desc = value;
        }
    
        public get reg_anvisa(): string {
            return this._regAnvisa;
        }
    
        public set reg_anvisa(value: string) {
            this.reg_anvisa = value;
        }
    
        public get controlado(): boolean {
            return this._controlado;
        }
    
        public set controlado(value: boolean){
            this._controlado = value;
        }
    
        public get cod_grupo(): number {
            return this._codGrupo;
        }
    
        public set cod_grupo(value: number){
            this._codGrupo = value;
        }

    }