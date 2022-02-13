import React, {Dispatch} from 'react';
import {GalleryAction, GalleryStateContext} from 'state/GalleryState';

export const useGalleryDispatcher = (): Dispatch<GalleryAction> => {
  const contextValue = React.useContext(GalleryStateContext);

  if(contextValue !== null) {
    return contextValue.dispatcher;
  }

  throw new Error('GalleryStateContextValue could not be null an moment of using');
}
