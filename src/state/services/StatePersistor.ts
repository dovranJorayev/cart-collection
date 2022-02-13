import {GalleryState, INITIAL_GALLERY_STATE} from 'state/GalleryState';

export interface StatePersistor<TState> {
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
        return INITIAL_GALLERY_STATE;
      }
    }
    return INITIAL_GALLERY_STATE;
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
