export interface IHome {
    front_default: string;    
}

export interface IOther {
    home: IHome;
}

export interface ISprites {
    other: IOther;
}

export class PokemonDetailModel {

    id: number | any;
    name: string | any;
    sprites: ISprites | any;

    public PokemonDetailModel() {}

}
