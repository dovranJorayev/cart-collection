import { Dispatch, Reducer } from 'react';
import React from 'react';
import {
  galleryDeleteHandler,
  galleryNavigateHandler, galleryResizeHandler, gallerySetFilterHandler,
  gallerySetListHandler,
  gallerySetLoadingHandler
} from 'state/services/GalleryReducerCaseHandler';

export interface Card {
  id: number;
  albumId: number;
  title: string;
  thumbnailUrl: string;
  url: string;
}

export interface FilterOption {
  value: number;
  label: string;
}

export interface GalleryState {
  loading: boolean;
  page: number;
  pages: Card[][];
  list: Card[];
  filterOptions: FilterOption[];
  size: number;
  filterValue: number | null;
}

export enum GalleryActionType {
  SET_LOADING = '_SET_LOADING_',
  NAVIGATE = '_NAVIGATE',
  DELETE = '_DELETE_',
  SET_FILTER = '_FILTER_',
  RESIZE = '_RESIZE_',
  SET_LIST = '_SET_'
}

export interface GalleryAction {
  type: GalleryActionType;
  payload: Partial<GalleryState>;
}

export interface GalleryStateContextValue {
  state: GalleryState;
  dispatcher: Dispatch<GalleryAction>;
}

export const INITIAL_GALLERY_STATE: GalleryState = {
  loading: false,
  page: 1,
  pages: [],
  list: [],
  filterOptions: [{value: 0, label: 'Not selected'}],
  size: 10,
  filterValue: null
}

export const galleryReducer: Reducer<GalleryState, GalleryAction> = (state, action) => {
  switch (action.type) {
    case GalleryActionType.SET_LOADING: {
      return gallerySetLoadingHandler(state, action.payload);
    }
    case GalleryActionType.NAVIGATE: {
      return galleryNavigateHandler(state, action.payload);
    }
    case GalleryActionType.SET_LIST: {
      return gallerySetListHandler(state, action.payload);
    }
    case GalleryActionType.DELETE: {
      return galleryDeleteHandler(state, action.payload);
    }
    case GalleryActionType.RESIZE: {
      return galleryResizeHandler(state, action.payload);
    }
    case GalleryActionType.SET_FILTER: {
      return gallerySetFilterHandler(state, action.payload);
    }
    default: {
      throw new Error('Unknown action type');
    }
  }
}


export const GalleryStateContext = React.createContext<GalleryStateContextValue|null>(null);

