import React, { useEffect, useState } from "react";
import StoryModel from "../models/Story";
import { fetchStory } from "../data/API";
import User from "./User";

type props = {
  storyId: number;
};
const Story: React.FC<props> = ({ storyId }) => {
  const [user, setUser] = useState<StoryModel>(Object);
  useEffect(() => {
    fetchStory(storyId).then((u) => setUser(u));
  }, []);
  const q = "";
  const { by: authorId, score, time, title, url } = user;
  return (
    <article className="story">
      <h4 className="title">{title}</h4>
      <p className="info">
        {score} points by <User authorId={authorId} />
      </p>
      <div>
        <a
          href={url}
          className="read-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          read more
        </a>
      </div>
    </article>
  );
};

export default Story;
