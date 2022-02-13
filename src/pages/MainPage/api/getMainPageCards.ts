import {Card} from 'state/GalleryState';

export const getMainPageCards = async (): Promise<Card[]> => {
  const url = 'http://jsonplaceholder.typicode.com/photos';

  try {
    const response = await fetch(url);
    if(response.ok) {
      const cards: Card[] = await response.json();
      return cards;
    }

    throw new Error(response.statusText);

  } catch (error) {
    console.error('Error while trying fetching GalleryState', error);
    return Promise.resolve([]);
  }
}
