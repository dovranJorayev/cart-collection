import {
  GalleryAction,
  GalleryState,
  INITIAL_GALLERY_STATE,
} from 'state/GalleryState';
import {
  filterList,
  paginateList,
  recalculateFilterOptions,
  recalculatePageAfterDeleting,
  truncateList
} from 'state/services/GaleryStateUtils';

export interface GalleryReducerCaseHandler {
  (prevState: GalleryState, payload: GalleryAction['payload']): GalleryState;
}

export const gallerySetLoadingHandler: GalleryReducerCaseHandler = (prevState, { loading }) => {
  if(loading !== undefined) {
    return {
      ...prevState,
      loading
    }
  }

  return prevState;
}

export const galleryNavigateHandler: GalleryReducerCaseHandler = (prevState, { page }) => {
  if(page !== undefined) {
    return {
      ...prevState,
      page
    }
  }
  return prevState;
}

export const gallerySetListHandler: GalleryReducerCaseHandler = (prevState, { list }) => {
  if(list !== undefined) {

    return {
      ...INITIAL_GALLERY_STATE,
      size: prevState.size,
      filterOptions: recalculateFilterOptions(list),
      list: list,
      pages: paginateList(
        list,
        prevState.size
      )
    }
  }
  return prevState;
}

export const gallerySetFilterHandler: GalleryReducerCaseHandler = (prevState, {filterValue}) => {
  if(filterValue !== undefined) {
    return {
      ...prevState,
      page: INITIAL_GALLERY_STATE.page,
      pages: paginateList(
        filterList(
          prevState.list,
          filterValue
        ),
        prevState.size
      ),
      filterValue
    }
  }

  return prevState;
}

export const galleryDeleteHandler: GalleryReducerCaseHandler = (prevState, { list }) => {
  if(list !== undefined) {
    const updatedList = truncateList(
      prevState.list,
      list.map(p => p.id)
    );
    const updatedPages = paginateList(
      filterList(
        updatedList,
        prevState.filterValue
      ),
      prevState.size
    );

    const updatedPage = recalculatePageAfterDeleting(
      prevState.pages,
      updatedPages,
      prevState.page
    );

    return {
      ...prevState,
      list: updatedList,
      pages: updatedPages,
      page: updatedPage
    };
  }

  return prevState;
}

export const galleryResizeHandler: GalleryReducerCaseHandler = (prevState, { size }) =>  {
  if(size !== undefined) {
    return {
      ...prevState,
      pages: paginateList(prevState.pages.flat(), size),
      page: INITIAL_GALLERY_STATE.page,
      size
    };
  }

  return prevState;
}
