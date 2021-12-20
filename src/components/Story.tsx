import User from "./User";
import StoryViewModel from "../models/StoryViewModel";

type props = {
  storyViewModel: StoryViewModel;
};
const Story: React.FC<props> = ({ storyViewModel }) => {
  const { story, user } = storyViewModel;
  const timestamp = new Date(story.time);
  return (
    <article className="story">
      <h4 className="title">{story.title || "loading"}</h4>
      <p className="info">
        score: <span className="highlight">{story.score || 0}</span> points
      </p>
      <p className="info">
        timestamp: <span className="highlight">{timestamp.toString() || "loading"}</span>
      </p>

      <User author={user} />
      <div>
        <a
          href={story.url}
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
