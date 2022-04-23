const play = () => {
    // let turns = 0;
    const gridContainer = document.querySelector(".container");
    // const cells = [];
    // for (let i = 0, i < 9 ; i++) {
    //     const cell = cells[i];

    // }
    gridContainer.append(generateBox());
} 

function generateBox() {
    const newElement = document.createElement("div");

    newElement.classList.add("box");

    return newElement;
}