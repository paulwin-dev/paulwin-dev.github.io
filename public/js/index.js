import technologies from "./docs/technologies.json"  with { type: "json" }
import projects from "./docs/projects.json"  with { type: "json" }

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

function loadGames() {
    const gamesContainer = document.getElementById("work-list-container");
    const template = document.getElementById("work-list-item-template");

    for (const project of projects) {
        const projectItem = template.content.cloneNode(true);
        const projectCover = projectItem.querySelector(".work-list-item-cover");
        const projectHeader = projectItem.querySelector(".work-list-item-header");
        const projectDesc = projectItem.querySelector(".work-list-item-desc");
        const projectTags = projectItem.querySelector(".work-list-item-tags-container");

        projectHeader.textContent = project.name;
        projectDesc.textContent = project.description;
        projectCover.src = project.cover;
        
        for (const tag of project.tags) {
            const tagElement = document.createElement("span");
            tagElement.className = "work-list-item-tag";
            tagElement.textContent = tag;

            projectTags.appendChild(tagElement);
        }

        projectItem.querySelector(".work-list-item").onclick = () => {
            window.open(project.link, "_blank");
        }

        projectItem.querySelector(".work-list-item").setAttribute("data-section", project.section);
        
        gamesContainer.appendChild(projectItem);
    }
}

function loadGameFilters() {
    const filterButtons = document.getElementsByClassName("work-filter-item");

    let selectedFilter = "all";

    for (const button of filterButtons) {

        button.onclick = () => {
            selectedFilter = button.getAttribute("data-section");

            for (const btn of filterButtons) {
                btn.classList.remove("work-filter-item-selected");
            }
            button.classList.add("work-filter-item-selected");

            for (const item of document.getElementsByClassName("work-list-item")) {
                const section = item.getAttribute("data-section")
                console.log(section, selectedFilter)
                if (selectedFilter === "all" || section === selectedFilter) {
                    item.style.display = "block";
                } else {
                    item.style.display = "none";
                }
            }
        }

    }
}

const techListContainer = document.getElementById("tech-list-container");

for (const tech of technologies) {
    const techListItem = createTechListItem(tech);
    techListContainer.appendChild(techListItem);
}

loadGames();
loadGameFilters();