const GRID_LENGTH = 16;

for (let i = 0; i < GRID_LENGTH; i++) {
    const div = document.createElement("div");
    div.setAttribute("style", "display: flex;");
    const container = document.querySelector(".container");
    for (let j = 0; j < GRID_LENGTH; j++) {
        const box = document.createElement("div");
        box.setAttribute("style", "width: 2em; height: 2em;")
        box.style.border = "1px solid black"; //delete after
        div.appendChild(box);
    }
    container.appendChild(div);

}