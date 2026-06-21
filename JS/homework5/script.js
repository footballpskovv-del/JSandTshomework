const API = "https://swapi.py4e.com/api";
let currentPage = 1;
let totalPlanets = 0;
let totalPages = 0;

async function showAllPlanets() {
  const allPlanets = [];

  for (let page = 1; page <= totalPages; page++) {
    const response = await fetch(`${API}/planets/?page=${page}`);
    const data = await response.json();

    allPlanets.push(...data.results);
  }

  renderPlanets(allPlanets);

  document.querySelector("#pageInfo").textContent =
    `1-${totalPlanets}/${totalPlanets}`;
}

async function openModal(planet) {
  const filmPromises = planet.films.map((filmUrl) => {
    return fetch(filmUrl).then((response) => {
      return response.json();
    });
  });

  const films = await Promise.all(filmPromises);

  const filmsHtml = films
    .map((film) => {
      return `
        <li>
          Эпизод: ${film.episode_id}<br>
          Название: ${film.title}<br>
          Дата выхода: ${film.release_date}
        </li>
      `;
    })
    .join("");

  const characterPromises = planet.residents.map((characterUrl) => {
    return fetch(characterUrl).then((response) => {
      return response.json();
    });
  });

  const characters = await Promise.all(characterPromises);

  const charactersHtmlPromises = characters.map(async (character) => {
    const homeworldResponse = await fetch(character.homeworld);
    const homeworld = await homeworldResponse.json();

    return `
    <li>
      Имя: ${character.name}<br>
      Пол: ${character.gender}<br>
      День рождения: ${character.birth_year}<br>
      Родной мир: ${homeworld.name}
    </li>
  `;
  });

  const charactersHtmlArray = await Promise.all(charactersHtmlPromises);

  const charactersHtml = charactersHtmlArray.join("");

  const modal = document.querySelector("#modal");
  const modalBody = document.querySelector("#modalBody");

  modalBody.innerHTML = `
  <h2>${planet.name}</h2>

  <p>Диаметр: ${planet.diameter}</p>
  <p>Население: ${planet.population}</p>
  <p>Гравитация: ${planet.gravity}</p>
  <p>Природные зоны: ${planet.terrain}</p>
  <p>Климат: ${planet.climate}</p>

  <div class="modal-grid">
    <div>
      <h3>Фильмы</h3>
      <ul>
        ${filmsHtml}
      </ul>
    </div>

    <div>
      <h3>Персонажи</h3>
      <ul>
        ${charactersHtml}
      </ul>
    </div>
  </div>
`;

  modal.classList.remove("hidden");
}

async function loadPlanets(page) {
  const response = await fetch(`${API}/planets/?page=${page}`);
  const data = await response.json();
  totalPlanets = data.count;
  totalPages = Math.ceil(totalPlanets / 10);

  renderPlanets(data.results);
  renderPagination();
}

function renderPlanets(planets) {
  const planetsContainer = document.querySelector("#planets");
  planetsContainer.innerHTML = "";
  planets.forEach((planet) => {
    const card = document.createElement("div");
    card.addEventListener("click", () => {
      openModal(planet);
    });
    card.innerHTML = `
      <h2>${planet.name}</h2>
      <p>Диаметр: ${planet.diameter}</p>
      <p>Население: ${planet.population}</p>
      <p>Гравитация: ${planet.gravity}</p>
      <p>Природные зоны: ${planet.terrain}</p>
      <p>Климат: ${planet.climate}</p>
    `;
    planetsContainer.appendChild(card);
  });
}

function renderPagination() {
  const pageInfo = document.querySelector("#pageInfo");
  const nextBtn = document.querySelector("#nextBtn");
  const prevBtn = document.querySelector("#prevBtn");
  const start = (currentPage - 1) * 10 + 1;
  const end = Math.min(currentPage * 10, totalPlanets);

  pageInfo.textContent = `${start}-${end}/${totalPlanets}`;
  prevBtn.disabled = currentPage === 1;
  nextBtn.disabled = currentPage === totalPages;
}

document.querySelector("#prevBtn").addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    loadPlanets(currentPage);
  }
});
document.querySelector("#nextBtn").addEventListener("click", () => {
  if (currentPage < totalPages) {
    currentPage++;
    loadPlanets(currentPage);
  }
});
document.querySelector("#closeModal").addEventListener("click", () => {
  document.querySelector("#modal").classList.add("hidden");
});
document.querySelector("#showAllBtn").addEventListener("click", () => {
  showAllPlanets();
});

loadPlanets(currentPage);
