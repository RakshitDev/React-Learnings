import "./Avatar.css";

function Avatar({ name }) {
  const shortName = name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase();
  return <div className="avatar">{shortName}</div>;
}

export default Avatar;
