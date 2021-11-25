import logo from './logo.svg';
import './App.css';

const currentYear = new Date().getFullYear();

function Note() {
  return (
    <div className="note">
      <h1>This is the note title</h1>
      <p>This is the note content</p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <h1 className="App-header">Tasker</h1>
      </header>
<div>
  <div><Note /></div>
</div>
      <footer>
        <p>Created By Khushnood Asif</p>
        <p>Copyright &copy; {currentYear}</p>
      </footer>
    </div>
    
  );
}


export default App;
 