import React, { useEffect, useState } from "react";
import { fetchStories } from "../data/API";
import Story from "./Story";

const Stories = () => {
  const [toggle, setToggle] = useState(false);
  const [stories, setStories] = useState<number[]>([]);

  const refresh = () => {};
  useEffect(() => {
    fetchStories().then((s) => {
      setStories(s);
    });
  }, []);
  return (
    <section className="stories">
      <h2>Hacker News</h2>
      <div className="btn-container">
        <button onClick={() => refresh()}>Refresh</button>
      </div>
      {stories.slice(30, 40).map((id) => {
        return (
          <article key={id} className="story">
            <Story storyId={id} />
          </article>
        );
      })}
    </section>
  );
};

export default Stories;
