export function getElementFrom(el: Element, query: string){

    const element = el.querySelector(query);
    
    if (!element) throw Error(`${query} não encontrado`);
    
    return element;
}

export function getElement(query: string){
    const element = document.querySelector(query);
    
    if (!element) throw Error(`${query} não encontrado`);
    
    return element;
}

export function getAllElementFrom(el: Element, query: string){

    const element = el.querySelectorAll(query);
    
    if (!element) throw Error(`${query} não encontrado`);
    
    return element;
}

export function getAllElement(query: string){
    const element = document.querySelectorAll(query);
    
    if (!element) throw Error(`${query} não encontrado`);
    
    return element;
}