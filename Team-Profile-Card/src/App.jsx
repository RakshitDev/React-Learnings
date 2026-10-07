import teams from "./data/team";
import ProfileCard from "./components/ProfileCard";

const App = () => {
  return (
    <div className="main-container">
      <div className="container">
        {teams.map((team) => (
          <ProfileCard key={team.id} {...team} />
        ))}
      </div>
    </div>
  );
};

export default App;
