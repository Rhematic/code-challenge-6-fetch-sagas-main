import AnimalList from '../AnimalList/AnimalList.jsx';
import './App.css';

function App() {
  // Renders the entire app on the DOM
  return (
    <div className="app">
      <header className="app-header">
        <h1 className="app-title">Zoo Animals</h1>
        <h2 className="app-intro">List of Species and Class</h2>
      </header>
      <AnimalList />
    </div>
  );
}

export default App;
