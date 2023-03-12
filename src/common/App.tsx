import { useDarkMode } from "../hooks/useDarkMode";
import "./App.scss";

function App() {
  
  const { dark, setDark } = useDarkMode();

  return (
    <main className="app">
      <div className="wrapper">
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
          <div className="top-cards"></div>
        </section>
        <section className="bottom">Bottom</section>
      </div>
    </main>
  );
}

export default App;
