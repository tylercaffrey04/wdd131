// 1. Your list of character objects
const characters = [
    {
        imgUrl: "https://via.placeholder.com/100", // Replace with real image URLs later
        name: "Dan",
        description: "A friend of Elara and a Songcaller by birth. His father was killed for his heritage and dan must set out to right the ways of the world."
    },
    {
        imgUrl: "elara.webp",
        name: "Elara",
        description: "A young artisan turned Songweaver, On the run from the King trying to follow the will of Arieaus."
    },
    {
        imgUrl: "https://via.placeholder.com/100",
        name: "Benjamin",
        description: "A young man in a small village in the distant mountains who must do things he doesn tthink he is ready for."
    },
    {
        imgUrl: "https://via.placeholder.com/100",
        name: "Sariah",
        description: "A young lady of Kundari, born with the ability to sense and track Song, will she help Elara or betray Elara to her father. "
    }
];

const container = document.getElementById('character-container');
const searchInput = document.querySelector('.search-bar');

function renderCharacters(charactersToRender = characters) {
    container.innerHTML = "";

    if (charactersToRender.length === 0) {
        container.innerHTML = `<p style="text-align: center; color: #260f26ff; font-size: 14px; margin-top: 20px;">No characters found</p>`;
        return;
    }

    charactersToRender.forEach(character => {
        const card = document.createElement('div');
        card.classList.add('content-row');

        card.innerHTML = `
            <div class="content-img">
                <img src="${character.imgUrl}" alt="${character.name}" style="width:100%; height:100%; object-fit:cover; border-radius:4px;">
            </div>
            <div class="content-details">
                <div class="name-box">${character.name}</div>
                <div class="p-box">${character.description}</div>
            </div>
        `;

        container.appendChild(card);
    });
}

searchInput.addEventListener('input', (event) => {
    const searchTerm = event.target.value.toLowerCase().trim();

    const filteredCharacters = characters.filter(character => {
        const matchesName = character.name.toLowerCase().includes(searchTerm);
        const matchesDescription = character.description.toLowerCase().includes(searchTerm);
        
        return matchesName || matchesDescription;
    });

    renderCharacters(filteredCharacters);
});

renderCharacters();