const header = document.querySelector(".header");

const getData = () => {
    return fetch("dbHeroes.json").then(res => res.json());
}

getData().then(users => {
    

    users.forEach(elems => {
        let cards = document.createElement('div');
        let photo = "<img src= " + elems.photo  + "  alt=''>"
        cards.innerHTML = photo;
        header.append(cards)
    });
    
})