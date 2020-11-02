// Definindo os conjuntos A e B
let a = [-2, -1, 0, 1];
let b = [-5, -2, 1, 4, 5, 6];

//Função para achar pares
function acharPares(valb){
    //Percorrer todos os elementos de A
    a.forEach(vala => {
        //Verificar quais elementos de A se relacionam com B através da condição
        if(3 * vala + 1 == valb){
            console.log(`(${vala},${valb})`);
        };
    });
}

//Percorrer todos os elementos de B, e usar como parâmetros da função acharPares
b.forEach(valb => {
    acharPares(valb);
});
