import { actionType, IActionType } from "../context/action";
import { fetchAllStories, fetchStory, fetchUser } from "../data/API";
import StoryViewModel from "../models/StoryViewModel";

const setAllStories = () => {
  return async (dispatch: any) => {
    try {
      const stories = await fetchAllStories();
      dispatch({
        type: actionType.SETSTORIES,
        payLoad: stories,
      });
      dispatch(setSpliceIndex());
    } catch (error) {
      console.log(error);
      dispatch(setIsLoading())
      dispatch(setError());
    }
  };
};

const setRandomStories = (stories: number[], index: number): any => {
  return async (dispatch: any) => {
    try {
      const randomStoryIds: number[] = stories.slice(index, index + 10);
      let randomStories: StoryViewModel[] = [];
      for (let i = 0; i < randomStoryIds.length; i++) {
        const story = await fetchStory(randomStoryIds[i]);
        const user = await fetchUser(story.by);
        const result = { story, user };
        randomStories.push(result);
      }
      randomStories.sort((a, b) => a.story.score - b.story.score);
      dispatch({
        type: actionType.SETRANDOMSTORIES,
        payLoad: randomStories,
      });
      dispatch(setIsLoading());
    } catch (error) {
      console.log(error);
      dispatch(setIsLoading())
      dispatch(setError());
    }
  };
};

const setSpliceIndex = (): IActionType => {
  return {
    type: actionType.SETSLICEINDEX,
  };
};

const setIsLoading = () => {
  return {
    type: actionType.SETLOADING,
  };
};

const setError = () => {
  return {
    type: actionType.SETERROR,
  };
};
export {
  setAllStories,
  setRandomStories,
  setSpliceIndex,
  setIsLoading,
  setError,
};
