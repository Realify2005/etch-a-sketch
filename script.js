let grid_length = 16;
let width = 40 / 16 + "em";
let height = 40 / 16 + "em";
let rgbActivated = false;

grid_length = parseInt(prompt("What's your desired box side length? Between 0 and 100"))
if (grid_length > 0 && grid_length <= 100 && !isNaN(grid_length)) {
    width = 40 / grid_length + "em";
    height = 40 / grid_length + "em";
}
else {
    alert("Value entered invalid/out of range, proceeding with default side length");
    grid_length = 16;
}

for (let i = 0; i < grid_length; i++) {
    const div = document.createElement("div");
    div.setAttribute("style", "display: flex;");
    const container = document.querySelector(".container");
    for (let j = 0; j < grid_length; j++) {
        const box = document.createElement("div");
        box.setAttribute("style", `width: ${width}; height: ${height};`)
        box.setAttribute("id", "box");
        div.appendChild(box);
    }
    container.appendChild(div);

}

const boxes = document.querySelectorAll("#box");
boxes.forEach(box => {
    box.addEventListener("mouseover", function() {
        if (rgbActivated) {
            const red = Math.floor(Math.random() * 256);
            const green = Math.floor(Math.random() * 256);
            const blue = Math.floor(Math.random() * 256);
            box.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
        }
        else {
            box.style.backgroundColor = "black";
        }
    })
})

const rgb = document.querySelector("#rgb");
rgb.addEventListener("click", function() {
    rgbActivated = true;
})

const black = document.querySelector("#black");
black.addEventListener("click", function() {
    rgbActivated = false;
})