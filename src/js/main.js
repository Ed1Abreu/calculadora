function inserir(num) {
    var numero = document.getElementById('resultado').innerHTML
    document.getElementById('resultado').innerHTML = numero + num
}

function limpar(){
    document.getElementById('resultado').innerHTML = ''
}

function deletar(){
    var resultado = document.getElementById('resultado').innerHTML
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length - 1)
}

function calcular(){
    var resultado = document.getElementById('resultado').innerHTML
    if (resultado){
        document.getElementById('resultado').innerHTML = eval(resultado)
    }else{
        alert('Não há nada para calcular')
    }
}

function raiz(){
    var resultado = document.getElementById('resultado').innerHTML
    if(resultado){
        document.getElementById('resultado').innerHTML = Math.sqrt(resultado).toFixed(3)
    }else{
        alert('Não há nada para calcular')
    }
}

function fatorial(){
    var resultado = document.getElementById('resultado').innerHTML
    if(resultado){
            if (resultado === 0 || resultado === 1)
              return 1;
            for (var i = resultado - 1; i >= 1; i--) {
                document.getElementById('resultado').innerHTML *= i.toFixed(3);
            }
            return resultado;
    }else{
        alert('Não há nada para calcular')
    }
}

function log_dois(){
    var resultado = document.getElementById('resultado').innerHTML
    if(resultado){
        document.getElementById('resultado').innerHTML = Math.log2(resultado).toFixed(3)
    }else{
        alert('Não há nada para calcular')
    }
}

function log_dez(){
    var resultado = document.getElementById('resultado').innerHTML
    if(resultado){
        document.getElementById('resultado').innerHTML = Math.log10(resultado).toFixed(3)
    }else{
        alert('Não há nada para calcular')
    }
}
