
import './App.css';
import Feed from './Feed';
import Sidebar from './Sidebar';
import Widget from './Widget';

function App() {
  return (
    <div className="App">
      <Sidebar/>
        <Feed/>
        <Widget/>
    </div>
  );
}

export default App;
