import { Dispatch, Reducer } from 'react';
import React from 'react';

interface Card {
  id: number;
  albumId: number;
  title: string;
  thumbnailUrl: string;
  url: string;
}

interface GalleryState {
  page: number;
  pages: Card[][];
  size: number;
  filterBy: number | null;
}
export enum GalleryActionType {
  DELETE = '_DELETE_',
  FILTER = '_FILTER_',
  RESIZE = '_RESIZE_',
  SET = '_SET_',
  NAVIGATE = '_NAVIGATE'
}

interface GalleryAction {
  type: GalleryActionType;
  payload: Partial<GalleryState>;
}

interface GalleryStateContext {
  state: GalleryState;
  dispatcher: Dispatch<GalleryAction>;
}

interface StatePersistor<TState> {
  get: () => TState;
  set: (state: TState) => boolean;
  remove: () => boolean;
}

export class GalleryStatePersistor implements StatePersistor<GalleryState> {
  private readonly galleryStateKey = 'GalleryStateKey';
  private static $instance: GalleryStatePersistor;

  private constructor(){}

  static get Instance(): GalleryStatePersistor {
    return GalleryStatePersistor.$instance || (
      GalleryStatePersistor.$instance = new GalleryStatePersistor()
    );
  }

  get(): GalleryState {
    const state = localStorage.getItem(this.galleryStateKey);
    if(state !== null) {
      try {
        return JSON.parse(state);
      } catch (error) {
        return EMPTY_GALLERY_STATE;
      }
    }
    return EMPTY_GALLERY_STATE;
  }

  remove(): boolean {
    try {
      localStorage.removeItem(this.galleryStateKey);
      return true;
    } catch (error) {
      return false;
    }
  }

  set(state: GalleryState): boolean {
    try {
      localStorage.setItem(
        this.galleryStateKey,
        JSON.stringify(state)
      );

      return true;
    } catch (error) {
      return false;
    }
  }
}


const getCards = async (): Promise<Card[]> => {
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



export const EMPTY_GALLERY_STATE: GalleryState = {
  page: 1,
  pages: [],
  size: 0,
  filterBy: null
}


export const galleryReducer: Reducer<GalleryState, GalleryAction> = (state, action) => {
  switch (action.type) {
    case GalleryActionType.RESIZE: {
      return state;
    }
    case GalleryActionType.FILTER: {
      return state;
    }
    case GalleryActionType.DELETE: {
      return state;
    }
    case GalleryActionType.SET: {
      return state;
    }
    case GalleryActionType.NAVIGATE: {
      return state;
    }
    default: {
      throw new Error('Unknown action type');
    }
  }
} 



export const GalleryStateContext = React.createContext<GalleryStateContext|null>(null);
export const useGalleryState = (): GalleryState => {
  const contextValue = React.useContext(GalleryStateContext);

  if(contextValue !== null) {
    return contextValue.state;
  }

  throw new Error('GalleryStateContext could not be null an moment of using');
}

export const useGalleryDispatcher = (): Dispatch<GalleryAction> => {
  const contextValue = React.useContext(GalleryStateContext);

  if(contextValue !== null) {
    return contextValue.dispatcher;
  }

  throw new Error('GalleryStateContext could not be null an moment of using');
}



