import $ from 'jquery';

//exporting function that has a name that doesn't have a default keyword
//when importing, have to use same function name
export function addHeader(text){
    $('#root').append(`<h1>${text}</h1>`);
}

export function addParagraph(text){
    $('#root').append(`<p>${text}</p>`);
}