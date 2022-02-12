import { Dispatch } from 'react';
import React from 'react';

interface Cart {
  id: number;
  albumId: number;
  thumbnailUrl: string;
  url: string;
}

interface TableState<TList> {
  page: number;
  list: TList[][];
  size: number;
  filterBy: keyof TList | null;
}
enum TableActionType {
  DELETE = '_DELETE_',
  FILTER = '_FILTER_',
  RESIZE = '_RESIZE_'
}
interface TableAction {
  type: TableActionType;
  payload: unknown;
}

interface TableStateContext<TList> {
  state: TableState<TList>;
  dispather: Dispatch<TableAction>;
}


const CartTableStateContext = React.createContext<TableStateContext<Cart>|null>(null);
const useCartTableState = (): TableState<Cart> => {
  const contextValue = React.useContext(CartTableStateContext);

  if(contextValue !== null) {
    return contextValue.state;
  }

  throw new Error('CartTableStateContext could not be null an moment of using');
}

const useCartTableDispatcher = () => {
  const contextValue = React.useContext(CartTableStateContext);

  if(contextValue !== null) {
    return contextValue.dispather;
  }

  throw new Error('CartTableStateContext could not be null an moment of using');
}



