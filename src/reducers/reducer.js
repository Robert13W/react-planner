import * as constants from '../constants';
import viewer2DReducer from './viewer2d-reducer';
import editingReducer from './editing-reducer';
import projectReducer from './project-reducer';
import viewer3DReducer from './viewer3d-reducer';
import holesReducer from './holes-reducer';
import linesReducer from './lines-reducer';
import sceneReducer from './scene-reducer';
import verticesReducer from './vertices-reducer';
import itemsReducer from './items-reducer';

import {State} from '../models';

export const initialState = new State();

export default function appReducers(state, action) {
  state = state || initialState;

  switch (action.type) {
    case constants.NEW_PROJECT:
    case constants.LOAD_PROJECT:
    case constants.SAVE_PROJECT:
    case constants.LOAD_PROJECT_FROM_FILE:
    case constants.SAVE_PROJECT_TO_FILE:
    case constants.OPEN_CATALOG:
      return projectReducer(state, action);

    case constants.UPDATE_2D_CAMERA:
    case constants.SELECT_TOOL_PAN:
    case constants.SELECT_TOOL_ZOOM_IN:
    case constants.SELECT_TOOL_ZOOM_OUT:
      return viewer2DReducer(state, action);

    case constants.SELECT_TOOL_EDIT:
    case constants.SELECT_LINE:
    case constants.SELECT_AREA:
    case constants.SELECT_HOLE:
    case constants.SELECT_ITEM:
    case constants.UNSELECT_ALL:
    case constants.SET_PROPERTIES:
    case constants.REMOVE:
    case constants.UNDO:
    case constants.ROLLBACK:
      return editingReducer(state, action);

    case constants.SELECT_TOOL_3D_VIEW:
    case constants.SELECT_TOOL_3D_FIRST_PERSON:
      return viewer3DReducer(state, action);

    case constants.SELECT_TOOL_DRAWING_LINE:
    case constants.BEGIN_DRAWING_LINE:
    case constants.UPDATE_DRAWING_LINE:
    case constants.END_DRAWING_LINE:
    case constants.BEGIN_DRAGGING_LINE:
    case constants.UPDATE_DRAGGING_LINE:
    case constants.END_DRAGGING_LINE:
      return linesReducer(state, action);

    case constants.SELECT_TOOL_DRAWING_HOLE:
    case constants.UPDATE_DRAWING_HOLE:
    case constants.END_DRAWING_HOLE:
    case constants.BEGIN_DRAGGING_HOLE:
    case constants.UPDATE_DRAGGING_HOLE:
    case constants.END_DRAGGING_HOLE:
      return holesReducer(state, action);

    case constants.ADD_LAYER:
    case constants.SET_LAYER_PROPERTIES:
    case constants.SELECT_LAYER:
      return sceneReducer(state, action);

    case constants.BEGIN_DRAGGING_VERTEX:
    case constants.UPDATE_DRAGGING_VERTEX:
    case constants.END_DRAGGING_VERTEX:
      return verticesReducer(state, action);

    case constants.SELECT_TOOL_DRAWING_ITEM:
    case constants.UPDATE_DRAWING_ITEM:
    case constants.END_DRAWING_ITEM:
    case constants.BEGIN_DRAGGING_ITEM:
    case constants.UPDATE_DRAGGING_ITEM:
    case constants.END_DRAGGING_ITEM:
    case constants.BEGIN_ROTATING_ITEM:
    case constants.UPDATE_ROTATING_ITEM:
    case constants.END_ROTATING_ITEM:
      return itemsReducer(state, action);

    default:
      return state;
  }
};
