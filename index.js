

const keyboard = document.querySelector("#keyboard"); 
const keyboardLetters = [
        ['q','w','e','r','t','y','u','i','o','p'],
        ['a','s','d','f','g','h','j','k','l','ñ'],
        ['enter','z','x','c','v','b','n','m', 'delete'],
];

const listElements = []; // creamos un array vacio para ser llenado con nuestro codigo; 

keyboardLetters.map(letters => {
    let  list = document.createElement("ul");  // en el primer aray vamos a crear un ul
    letters.map( letter => {
        let listItem = document.createElement("li"); /// y por cada hijo haremos un li
              listItem.innerHTML =`
                <button onclick="pressLetter()" id="${letter}" > ${letter}</button>
                `;
        list.appendChild(listItem);  // listItem lo agregaremos a list
    }); // apendChild solo agrega de uno de uno al final

    listElements.push(list);  // aqui agregamos nuestra lista al array vacio; 
});


keyboard.append(...listElements); //agregamos todo el array completo


const pressLetter = () => { // es el evento que va a desencadenar y con target, exacamente en ese botton

    const button = event.target; // target es; en donde nos encontramos, en ese momento, contexto
    console.log(button.id); // me regresra lo que hay en el id de ese button 
    
};