import {Card, FilterOption, INITIAL_GALLERY_STATE} from 'state/GalleryState';

export const recalculateFilterOptions = function (list: Card[]): FilterOption[] {
  const updatedFilterOptions = [
    ...new Set(
      list.map(
        card => card.albumId
      )
    )
  ].map(albumId => ({
    value: albumId,
    label: `album code: ${albumId}`
  }));

  return [...INITIAL_GALLERY_STATE.filterOptions, ...updatedFilterOptions];
}
export const recalculatePageAfterDeleting = function(prevPages: Card[][], updatedPages: Card[][], prevPageNumber: number): number {
  if(prevPageNumber === 1) return INITIAL_GALLERY_STATE.page;
  if(updatedPages.length <= 1) return INITIAL_GALLERY_STATE.page;

  if(prevPages.flat().length - updatedPages.flat().length === 1) {
    if(updatedPages.length === prevPages.length) {
      return prevPageNumber;
    }
    return prevPageNumber - 1
  }

  return INITIAL_GALLERY_STATE.page;
}
export const paginateList = function<TData>(list: TData[], size: number): TData[][] {
  const pages: TData[][] = [];

  if(size > 0) {
    const count = Math.ceil(list.length / size);

    for (let i = 0; i < count; i++) {
      const start = i * size;
      const end = start + size;

      pages.push(
        list.slice(start, end)
      );
    }

    return pages;
  }

  return pages;
};
export const truncateList = function<TData extends {id: number}>(list: TData[], mustDeleteIds: number[]): TData[] {
  const updatedList = list.filter(item => {
    return !mustDeleteIds.includes(item.id);
  });

  return updatedList;
}

export const filterList = function<TData extends {albumId: number}>(list: TData[], id: number|null): TData[] {
  if(id !== null) {
    const updatedList = list.filter(item => {
      return id === item.albumId;
    });

    return updatedList;
  }

  return list;
}
