const createCustomHTMLElement = (tagHTML, className, innerText) => {

    const e = document.createElement(tagHTML);
    e.className = className;
    e.innerText = innerText;
    if (tagHTML === 'option') {
        e.style = 'background-image:"../icons/options.png"'
    }
    return e;
};

const createImageElement = (imageSource) => {

    const img = document.createElement('img');
    img.className = 'cardImage';
    img.src = imageSource;
    return img;
};


export {createCustomHTMLElement, createImageElement }