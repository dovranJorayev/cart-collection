import React from 'react';
import {GalleryActionType} from 'state/GalleryState';
import {useGalleryAsyncDispatcher} from 'hooks/useGaleryAsyncDispatcher';
import {getMainPageCards} from 'pages/MainPage/api/getMainPageCards';

export const useFetchGalleryOnMount = (): void => {
  const asyncDispatcher = useGalleryAsyncDispatcher();
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    if(isMounted === false) {
      asyncDispatcher(async (dispatch, state) => {
        dispatch({
          type: GalleryActionType.SET_LOADING,
          payload: {
            loading: true
          }
        });

        const cards = await getMainPageCards();

        dispatch({
          type: GalleryActionType.SET_LIST,
          payload: {
            list: cards
          }
        });

        dispatch({
          type: GalleryActionType.SET_LOADING,
          payload: {
            loading: false
          }
        });
      });

      setIsMounted(true);
    }
  }, [asyncDispatcher, isMounted]);
}
