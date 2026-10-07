import "./ProfileCard.css";
import Avatar from "../components/Avatar";
function ProfileCard({ name, status, location, skills }) {
  return (
    <div className="card">
      <div className="card-header">
        <Avatar name={name}></Avatar>
        {status === "Open to Work" && <p className="status-tag">{status}</p>}
      </div>
      <div className="details">
        <p className="name">{name}</p>
        <p className="location">{location}</p>
        <div className="skills">
          {skills.length > 0 ? (
            skills.map((skill) => (
              <span className="skill" key={skill}>
                {skill}
              </span>
            ))
          ) : (
            <p className="no-skills">No skills listed</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
