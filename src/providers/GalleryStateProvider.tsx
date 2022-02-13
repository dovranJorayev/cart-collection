import React from 'react';
import {
  INITIAL_GALLERY_STATE,
  galleryReducer,
  GalleryStateContext
} from 'state/GalleryState';

function GalleryStateProvider({ children }: React.PropsWithChildren<{}>): JSX.Element {
  const [state, dispatcher] = React.useReducer(galleryReducer, INITIAL_GALLERY_STATE);

  const value = {
    state,
    dispatcher
  }
  return (
    <GalleryStateContext.Provider value={value}>
      { children }
    </GalleryStateContext.Provider>
  );
}

export default GalleryStateProvider;
