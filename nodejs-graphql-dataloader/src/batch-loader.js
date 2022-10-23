import DataLoader from 'dataloader';
import { findDirectorsByIds } from './movie-data-service.js';

async function directorLoaderFn(ids) {
  const directors = findDirectorsByIds(ids);
  const directorsMap = new Map(directors.map(director => [director.id, director]));
  return ids.map(id => directorsMap.get(id));
}

const directorLoader = new DataLoader(directorLoaderFn);

export { directorLoader };
