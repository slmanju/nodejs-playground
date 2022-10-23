const movies = [
  { id: "1", title: "The Great Battle", year: 2018, directorId: "2" },
  { id: "2", title: "Baahubali: The Beginning", year: 2015, directorId: "3" },
  { id: "3", title: "Baahubali 2: The Conclusion", year: 2017, directorId: "3" },
  { id: "4", title: "Magadheera", year: 2009, directorId: "3" },
  { id: "5", title: "Rurouni Kenshin Part I: Origins", year: 2012, directorId: "4" },
  { id: "6", title: "Rurouni Kenshin Part II: Kyoto Inferno", year: 2014, directorId: "4" },
  { id: "7", title: "Rurouni Kenshin: The Legend Ends", year: 2014, directorId: "4" },
  { id: "8", title: "Avatar", year: 2009, directorId: "1" },
  { id: "9", title: "Avatar 2", year: 2023, directorId: "1" },
  { id: "10", title: "Titanic", year: 1997, directorId: "1" }
];

const directors = [
  { id: "1", name: "James Cameron" },
  { id: "2", name: "Kwang-shik Kim" },
  { id: "3", name: "S.S. Rajamouli" },
  { id: "4", name: "Keishi Otomo" }
];

export function findMovies() {
  console.log("Find movies");
  return movies;
}

export function findMovie(id) {
  console.log(`Find movie by id ${id}`);
  return movies.find(movie => movie.id === id);
}

export function findDirector(id) {
  console.log(`Find director by id ${id}`);
  return directors.find(director => director.id === id);
}

export function findDirectorsByIds(ids) {
  console.log(`Find directors by ids ${ids}`);
  return directors.filter(director => ids.includes(director.id));
}

export function findMoviesByDirector(directorId) {
  console.log(`Find movies by director ${directorId}`);
  return movies.filter(movie => movie.directorId === directorId);
}
