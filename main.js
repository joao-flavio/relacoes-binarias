let x = [1, 2, 3, 4, 5];
let y = [2, 3, 4, 5, 6];

function acharPares(valy){
    x.forEach(valx => {
        if(valx + 1 == valy ){
            console.log(`{${valx}},{${valy}}`);
        };
    });
}

y.forEach(valy => {
    acharPares(valy);
});
