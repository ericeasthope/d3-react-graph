// components/State.js

import { createStore, combineReducers } from 'redux';
import { D3Link, D3Graph } from 'types';

// Define Redux action types
export const types = {
  ADD_NODE: 'ADD_NODE',
  ADD_LINK: 'ADD_LINK',
};

export interface RootState {
  graph: D3Graph;
}

// Define Node type
type Node = {
  id?: string;
  group?: string | number;
};

// Define graph state reducer
const graphReducer = (
  state = {
    nodes: [
      { id: '0', group: 0 },
      { id: '1', group: 1 },
    ],
    links: [{ source: 0, target: 1 }],
  },
  action: { type: string; node: Node; dimensions: number; link: D3Link },
) => {
  switch (action.type) {
    case 'ADD_NODE':
      return { ...state, nodes: [...state.nodes, action.node] };
    case 'ADD_LINK':
      return { ...state, links: [...state.links, action.link] };
    default:
      return state;
  }
};

// Combine all reducers
const reducer = combineReducers({
  graph: graphReducer,
});

export default createStore(reducer);
