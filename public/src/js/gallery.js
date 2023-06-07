const imagesData = [
    {
        src: "src/img/sandy4.jpg",
        title: "sandy",
        description: "Class aptent taciti sociosqu ad litora torquentper conubia nostra, per inceptos himenaeo",
        dialogSrc: "src/img/sandy2.jpg",
        dialogText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry..."
    },
    {
        src: "src/img/sandy27.jpg",
        title: "happy bdad",
        description: "Class aptent taciti sociosqu ad litora torquentper conubia nostra, per inceptos himenaeo",
        dialogSrc: "src/img/sandy20.jpg",
        dialogText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry..."
    }
    // Add more objects for more images and captions
];

function createImageElement(data) {
    // Create the necessary elements
    const a = document.createElement("a");
    const divWorkColumn = document.createElement("div");
    const img = document.createElement("img");
    const divCaption = document.createElement("div");
    const divText = document.createElement("div");
    const h3 = document.createElement("h3");
    const p = document.createElement("p");

    // Set the attributes and content for the elements
    a.href = "#small-dialog";
    a.classList.add("thickbox", "play-icon", "popup-with-zoom-anim");
    divWorkColumn.classList.add("work-column");
    img.src = data.src;
    img.alt = "";
    img.classList.add("img-cap");
    divCaption.classList.add("caption");
    divText.classList.add("text");
    h3.textContent = data.title;
    p.innerHTML = data.description.replace("<br>", "\n");

    // Assemble the elements
    a.appendChild(divWorkColumn);
    divWorkColumn.appendChild(img);
    divWorkColumn.appendChild(divCaption);
    divCaption.appendChild(divText);
    divText.appendChild(h3);
    divText.appendChild(p);

    return a;
}

const parentElement = document.querySelector(".row.work-row");

imagesData.forEach((data) => {
    const imageElement = createImageElement(data);
    parentElement.appendChild(imageElement);
});
