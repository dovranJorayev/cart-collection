import React, {Dispatch} from 'react';
import {GalleryAction, GalleryState, GalleryStateContext} from 'state/GalleryState';

export interface AsyncMiddleware<TAction, TState> {
  (dispatch: Dispatch<TAction>, state: TState): Promise<void>;
}
interface AsyncDispatch<TAction, TState> {
  (value: AsyncMiddleware<TAction, TState> | TAction): void;
}

export const useGalleryAsyncDispatcher = (): AsyncDispatch<GalleryAction, GalleryState> => {
  const contextValue = React.useContext(GalleryStateContext);

  const asyncDispatcher = (value: AsyncMiddleware<GalleryAction, GalleryState> | GalleryAction) => {
    if(contextValue !== null) {
      if (typeof value === 'function') {
        return value(
          contextValue.dispatcher,
          contextValue.state
        );
      } else {
        return contextValue.dispatcher(value);
      }
    }
    throw new Error('GalleryStateContextValue could not be null an moment of using');
  };

  return asyncDispatcher;
}
