import logo from './logo.svg';
import './App.css';
import Note from './Note.js';

const currentYear = new Date().getFullYear();

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
 