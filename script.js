const GRID_LENGTH = 16;

for (let i = 0; i < GRID_LENGTH; i++) {
    const div = document.createElement("div");
    div.setAttribute("display: flex;");
    const container = document.querySelector(".container");
    for (let j = 0; j < GRID_LENGTH; i++) {
        const box = document.createElement("div");
        box.style.margin = "1px solid black"; //delete after
        div.appendChild(box);
    }
    container.appendChild(div);

}