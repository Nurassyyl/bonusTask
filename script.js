const header = document.querySelector(".header");
const select = document.getElementById("select");
console.log(select);

const getData = () => {
    return fetch("dbHeroes.json").then(res => res.json());
}

getData().then(users => {
    users.forEach(elems => {
        let realName = "";
        if (elems.realName) {
            realName = elems.realName;
        }
        let cards = document.createElement('div');
        cards.classList.add("block");
        let photo = "";
        if (select.options[select.selectedIndex].value !== elems.status && select.options[select.selectedIndex].value == "") {
                photo = "<img class='image' src= " +
                    elems.photo +
                    "  alt=''> <div class='elements'> <h3> Название: " + elems.name + "</h3> " +
                    " <p> Актеры: " + realName + "</p> " +
                    " <p> Спиок фильмов: " + elems.movies + " </p> " +
                    " <p> Статус: " + elems.status + "</p> </div>";
                cards.innerHTML = photo;
                header.append(cards);
        } else {
            photo = "";
            cards.innerHTML = photo;
            header.append(cards);
        }

        select.addEventListener('input', () => {
            if (select.options[select.selectedIndex].value == elems.status && select.options[select.selectedIndex].value == "deceased" ||
                select.options[select.selectedIndex].value == elems.status && select.options[select.selectedIndex].value == "alive" ||
                select.options[select.selectedIndex].value == elems.status && select.options[select.selectedIndex].value == "destroyed" ||
                select.options[select.selectedIndex].value == elems.status && select.options[select.selectedIndex].value == "unknown") {
                photo = "<img class='image' src= " +
                    elems.photo +
                    "  alt=''> <div class='elements'> <h3> Название: " + elems.name + "</h3> " +
                    " <p> Актеры: " + realName + "</p> " +
                    " <p> Спиок фильмов: " + elems.movies + " </p> " +
                    " <p> Статус: " + elems.status + "</p> </div>";
                cards.innerHTML = photo;
                header.append(cards);
            } else if (select.options[select.selectedIndex].value == "deceased" || select.options[select.selectedIndex].value == "alive" ||
                select.options[select.selectedIndex].value == "destroyed" || select.options[select.selectedIndex].value == "unknown") {
                photo = "";
                cards.innerHTML = photo;
                header.append(cards);
            }
        });
    });

})