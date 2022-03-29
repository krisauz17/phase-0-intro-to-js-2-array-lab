// Write your solution here!

const cats = ['Milo','Otis','Garfield'];

function destructivelyAppendCat(name) {
    cats.push('Ralph');
}

function destructivelyPrependCat(name) {
    cats.unshift('Bob');
}

function destructivelyRemoveLastCat(name) {
    cats.pop();
}

function destructivelyRemoveFirstCat(name) {
    cats.shift();
}

function appendCat(name) {
    return[...cats, 'Broom'];
}

function prependCat(name) {
    return ['Arnold', ...cats];
}

function removeLastCat(name) {
    return cats.slice(0, cats.length-1);
}

function removeFirstCat(name) {
    return cats.slice(1);
}

//cats.push('Ralph');
//cats;
    //cats.unshift('Bob');
//cats;
    //cats.pop();
//cats;
    //cats.shift();
//cats;
        //const appendCat = [...cats, 'Broom'];
        //appendCat;
//cats;
        //const prependCat = ['Arnold', ...cats];
        //prependCat;
//cats;
            //cats.slice(-1); 
            //cats.slice(1);