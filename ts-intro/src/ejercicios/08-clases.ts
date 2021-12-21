class PersonaNormal {
    constructor(
        public nombre: string,
        public direccion: string
    ) {
    }
}


class Heroe extends PersonaNormal{

    // alterEgo: string
    // edad: number
    // nombreReal: string
    //

    // constructor(alterEgo: string ) {
    //     this.alterEgo = alterEgo
    // }

    constructor(
        public alterEgo: string,
        public edad: number,
        public nombreReal: string
    ) {
        super(nombreReal, 'New York, USA')
    }

}

const ironMan = new Heroe('Iron Man', 30, 'Tony')

console.log(ironMan)