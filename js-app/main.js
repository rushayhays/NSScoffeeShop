import {showTheBeans} from "./beanVariety.js"

const url = "https://localhost:5001/api/beanvariety/";


const button = document.querySelector("#run-button");
button.addEventListener("click", () => {
    getAllBeanVarieties()
        .then(beanVarieties => {
            console.log(beanVarieties);
            showTheBeans(beanVarieties);
        })
});

function getAllBeanVarieties() {
    return fetch(url).then(resp => resp.json());
}

const beanButton = document.querySelector("#bean-button");
beanButton.addEventListener("click", () => {
    console.log("cool beans")
});