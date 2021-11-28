import logo from './logo.svg';
import './App.css';
import Card from './Card.js';
import contacts from './Contact.js';


const currentYear = new Date().getFullYear();

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <h1 className="App-header">Tasker</h1>
      </header>
<div>
  <h1 className="heading">Contacts</h1>
  <Card 
    name={contacts[0].name}
    img={contacts[0].img}
    mobile={contacts[0].mobile}
    email={contacts[0].email}
    />
  <Card 
    name={contacts[1].name}
    img={contacts[1].img}
    mobile={contacts[1].mobile}
    email={contacts[1].email}
    />
  <Card 
    name={contacts[2].name}
    img={contacts[2].img}
    mobile={contacts[2].mobile}
    email={contacts[2].email}
    />
</div>
      <footer>
        <p>Created By Khushnood Asif</p>
        <p>Copyright &copy; {currentYear}</p>
      </footer>
    </div>
    
  );
}


export default App;
 