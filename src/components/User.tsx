import React, { useState, useEffect } from "react";
import { fetchUser } from "../data/API";
import UserModel from "../models/User";

type props = {
  authorId: string;
};
const User: React.FC<props> = ({ authorId }) => {
  const [user, setUser] = useState<UserModel>(Object);
  useEffect(() => {
    fetchUser(authorId).then((u) => setUser(u));
  }, []);
  return <span>{authorId} with karma score {user.karma} </span>;
};

export default User;
