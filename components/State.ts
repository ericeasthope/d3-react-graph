// components/State.js

import { createStore, combineReducers } from 'redux';
import * as d3f3d from 'd3-force-3d';

// Define Redux action types
export const types = {
  ADD_NODE: 'ADD_NODE',
  ADD_LINK: 'ADD_LINK',
  SET_WIDTH: 'SET_WIDTH',
  UPDATE_SIMULATION: 'UPDATE_SIMULATION',
};

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
  action: { type: string; node: Node; dimensions: number },
) => {
  switch (action.type) {
    case 'ADD_NODE':
      return { ...state, nodes: [...state.nodes, action.node] };
    case 'ADD_LINK':
      return { ...state, links: [...state.links, action.link] };
    case 'SET_WIDTH':
      return { ...state, width: action.width };
    case 'UPDATE_SIMULATION':
      return {
        ...state,
        simulation: action.simulation,
      };
    default:
      return state;
  }
};

// Combine all reducers
const reducer = combineReducers({
  graph: graphReducer,
});

export default createStore(reducer);
