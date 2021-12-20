import StoryViewModel from "../models/StoryViewModel";
import { getRandomIndex } from "../utils/utils";
import { actionType, IActionType } from "./action";

type reducerState = {
  stories: number[];
  isLoading: boolean;
  hasError: boolean
  randomStories: StoryViewModel[];
  sliceIndex: number;
};

const initialState: reducerState = {
  stories: [],
  isLoading: true,
  hasError:false,
  randomStories: [],
  sliceIndex: 0,
};

const reducer = (state = initialState, action: IActionType): reducerState => {
  switch (action.type) {
    case actionType.SETSLICEINDEX:
      return {
        ...state,
        randomStories: [],
        sliceIndex: getRandomIndex(state.stories.length),
      };
    case actionType.SETSTORIES:
      return {
        ...state,
        stories: action.payLoad,
      };
    case actionType.SETRANDOMSTORIES:
      return {
        ...state,
        randomStories: action.payLoad,
      };
    case actionType.SETLOADING:
      return {
        ...state,
        isLoading: !state.isLoading,
      };
    case actionType.SETERROR:
      return {
        ...state,
        hasError: !state.hasError,
      };
    default:
      return state;
  }
};

export { reducer };
export type { reducerState };
