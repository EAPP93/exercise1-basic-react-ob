import logo from './logo.svg';
import './App.css';
import Showcontactandstatus from './components/container/showContactAndStatus';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Showcontactandstatus></Showcontactandstatus>
      </header>
    </div>
  );
}

export default App;
