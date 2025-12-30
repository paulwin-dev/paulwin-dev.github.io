import technologies from "./docs/technologies.json"  with { type: "json" }

function createTechListItem(tech) {
    const techListItem = document.createElement("div");
    techListItem.className = "tech-list-item";

    const img = document.createElement("img");
    img.src = tech.icon;

    if (tech.bg) {
        img.style.backgroundColor = tech.bg;
    }

    const title = document.createElement("h1");
    title.textContent = tech.name;

    const description = document.createElement("p");
    description.textContent = tech.desc;

    techListItem.appendChild(img);
    techListItem.appendChild(title);
    techListItem.appendChild(description);

    return techListItem;
}

//load technology items dybnamically from JSON
const techListContainer = document.getElementById("tech-list-container")

for (const tech of technologies) {
    const techListItem = createTechListItem(tech);
    techListContainer.appendChild(techListItem);
}