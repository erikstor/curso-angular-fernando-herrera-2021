import {Producto, calculaIVA} from "./06-desestructuracion-funcion";


const carritoCompras: Producto[] = [
    {
        desc: 'tel 1',
        precio: 100
    },
    {
        desc: 'tel 2',
        precio: 200
    }
]


const [total, ivs] = calculaIVA(carritoCompras)

console.log(total)

console.log(ivs)