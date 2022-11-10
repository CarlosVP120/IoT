import "./App.css";
import RegisteredDays from "./components/Days/RegisteredDays";
import Header from "./components/Layout/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <RegisteredDays />
      </main>
    </div>
  );
}

export default App;
