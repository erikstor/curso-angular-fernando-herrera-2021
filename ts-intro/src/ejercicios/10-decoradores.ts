function classDecorator<T extends { new(...arg: any[]): {} }>(
    constructor: T
) {
    return class extends constructor {
        newProperty = "New property"
        hello = 'overrifr'
    }
}

@classDecorator
class MiSuperClase {

    public miPropiedad: string = 'ABC123'

    imprimir() {
        console.log('wenas')
    }

}

console.log(MiSuperClase)

const miClase = new MiSuperClase()

console.log(miClase.miPropiedad)