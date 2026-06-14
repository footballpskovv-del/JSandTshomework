//допю задание 2
async function getFirstTatooineFilm() {
  const planetResponse = await fetch("https://swapi.py4e.com/api/planets/1/");
  const planet = await planetResponse.json();
  console.log(planet); //весь объект планеты
  const firstFilmUrl = planet.films[0];
  console.log(firstFilmUrl);
  const filmResponse = await fetch(firstFilmUrl);
  const film = await filmResponse.json();

  console.log("Планета:", planet.name);

  console.log("Первый фильм:", film.title);

  console.log("Дата выхода:", film.release_date);
}
getFirstTatooineFilm();
