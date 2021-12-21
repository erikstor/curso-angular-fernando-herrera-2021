interface Reproductor {
    volumen: number,
    segundo: number,
    cancion: string,
    detalles: Detalles
}

interface Detalles {
    autor: string,
    anio: number
}


const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: "Mes",
    detalles: {
        anio: 2019,
        autor: "Ed Sheeran"
    }
}

// console.log('El volumen actual de: ', reproductor.volumen)
// console.log('El Segundo actual de: ', reproductor.segundo)
// console.log('El cancion actual de: ', reproductor.cancion)
// console.log('El anio actual de: ', reproductor.detalles.anio)
// console.log('El autor actual de: ', reproductor.detalles.autor)


const {volumen, segundo, cancion, detalles: {anio, autor}} = reproductor
// const {autor, anio} = detalles

// console.log('El volumen actual de: ', volumen)
// console.log('El Segundo actual de: ', segundo)
// console.log('El cancion actual de: ', cancion)
// console.log('El anio actual de: ', anio)
// console.log('El autor actual de: ', autor)


const dbz: string[] = ['Goku', 'Vegeta', 'Trunks']

const [, , trungs] = dbz
// const [goku, vegeta, trungs] = dbz

// console.log('Personaje 1: ', goku)
// console.log('Personaje 2: ', vegeta)
console.log('Personaje 3: ', trungs)