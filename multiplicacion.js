
function multiplicar(nro, veces){
    let resultado = nro ;

for (let i = 1;i < veces;i++){
    resultado += nro ;
}
    return resultado ;
}

const resultado = multiplicar(2,2)
console.log(resultado)
