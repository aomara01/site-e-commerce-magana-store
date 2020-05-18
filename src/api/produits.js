import Produits from './produits.json'

export function getAll(){
    return Promise.resolve(Produits);
}


export function getById(id){
    const produit= Produits.find(item =>item.id === id);
    return Promise.resolve(produit);
}

export default {
    getAll,
    getById
}