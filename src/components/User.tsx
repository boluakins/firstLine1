import UserModel from "../models/User";

type props = {
  author: UserModel;
};
const User: React.FC<props> = ({ author }) => {
  const { id, karma } = author;
  return (
    <p className="info">
      author:<span className="highlight"> {id}</span> || karma score:
      <span className="highlight"> {karma || 0}</span>
    </p>
  );
};

export default User;
