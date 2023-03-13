import { PrimaryCard } from "../components/primaryCard/PrimaryCard";
import { useDarkMode } from "../hooks/useDarkMode";
import { followersData } from "../utils/data";
import "./App.scss";

function App() {
  const { dark, setDark } = useDarkMode();

  return (
    <main className="app">
      <div className={`wrapper ${dark}`}>
        <section className={`top ${dark}`}>
          <header className="header">
            <div className="right">
              <h1 className={`right-header ${dark}`}>Social Media Dashboard</h1>
              <p className={`right-desc ${dark}`}>Total Followers: 23,004</p>
            </div>
            <div className={`middle ${dark}`}></div>
            <div className="left">
              <h2 className={`left-header ${dark}`}>Dark Mode</h2>
              <div
                className={`left-toggle ${dark}`}
                onClick={() => setDark(!dark)}
              >
                <div className={`left-toggle-circle ${dark}`}></div>
              </div>
            </div>
          </header>
          <div className="top-cards">
            {followersData.map((item) => (
              <PrimaryCard key={item.id} item={item} />
            ))}
          </div>
        </section>
        <section className={`bottom ${dark}`}>Bottom</section>
      </div>
    </main>
  );
}

export default App;
