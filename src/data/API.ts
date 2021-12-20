import Story from "../models/Story";
import User from "../models/User";

const getAllStoriesUrl =
  "https://hacker-news.firebaseio.com/v0/topstories.json";
const getStoryUrl = "https://hacker-news.firebaseio.com/v0/item/{{id}}.json";
const getUserUrl = "https://hacker-news.firebaseio.com/v0/user/{{id}}.json";

const fetchAllStories = async (): Promise<number[]> => {
  try {
    return await (await fetch(getAllStoriesUrl)).json();
  } catch (error) {
    console.log(error);
    throw new Error("could not fetch data");
  }
};

const fetchStory = async (storyId: number): Promise<Story> => {
  const preparedUrl = getStoryUrl.replace("{{id}}", `${storyId}`);
  
  try {
    const response = await fetch(preparedUrl);
    if (response.status == 200) {
      return await response.json();
    }
    throw new Error(`story with id ${storyId} not found`);
  } catch (error) {
    console.log(error);
    throw new Error("could not fetch data");
  }
};

const fetchUser = async (userId: string): Promise<User> => {
  const preparedUrl = getUserUrl.replace("{{id}}", `${userId}`);
  
  try {
    const response = await fetch(preparedUrl);
    if (response.status == 200) {
      return await response.json();
    }
    throw new Error(`user with id ${userId} not found`);
  } catch (error) {
    console.log(error);
    throw new Error("could not fetch data");
  }
};

export { fetchAllStories, fetchStory, fetchUser };
