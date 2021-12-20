import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setAllStories,
  setIsLoading,
  setRandomStories,
  setSpliceIndex,
} from "../actions/actions";
import { reducerState } from "../context/reducer";
import Error from "./Error";
import Loading from "./Loading";
import Story from "./Story";

const Stories = () => {
  const dispatch = useDispatch();
  const objState = useSelector((state: reducerState) => state);
  const { randomStories, stories, sliceIndex, isLoading, hasError } = objState;

  const [outerLoading, setOuterLoading] = useState(true);

  const shuffle = () => {
    dispatch(setIsLoading());
    dispatch(setSpliceIndex());
  };

  useEffect(() => {
    dispatch(setAllStories());
    setOuterLoading(false);
  }, []);

  useEffect(() => {
    if (!outerLoading) {
      dispatch(setRandomStories(stories, sliceIndex));
    }
  }, [sliceIndex]);

  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  if (hasError) {
    return (
      <main>
        <Error />
      </main>
    );
  }
  return (
    <>
      <div className="btn-container">
        <button onClick={() => shuffle()}>Shuffle</button>
      </div>
      <section className="stories">
        {randomStories.map((story) => {
          return <Story key={story.story.id} storyViewModel={story} />;
        })}
      </section>
    </>
  );
};

export default Stories;
