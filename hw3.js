// bonus function

function errHandler(x, y) {

    if (typeof x == 'number' && typeof y == 'number')
        return true;
    else console.log("Enter a number value")
}

//home work function

function pow(x, y) {

    if (errHandler(x, y)){

        let result = 1;

        for (let i = 0; i < y; i++) {
        result *= x;
        }
        return result;
    }    
}