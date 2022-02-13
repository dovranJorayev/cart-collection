import React from 'react';
import {GalleryState, GalleryStateContext} from 'state/GalleryState';

export const useGalleryState = (): GalleryState => {
  const contextValue = React.useContext(GalleryStateContext);

  if(contextValue !== null) {
    return contextValue.state;
  }

  throw new Error('GalleryStateContext could not be null an moment of using');
};
