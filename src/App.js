import logo from './logo.svg';
import './App.css';
import Card from './Card.js';
import contacts from './Contact.js';

const currentYear = new Date().getFullYear();

function createCard(contacts){
  return <Card
  key={contacts.id}
  name={contacts.name}
  img={contacts.img}
  mobile={contacts.mobile}
  email={contacts.email} />
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <h1 className="App-header">Tasker</h1>
      </header>
<div>
  <h1 className="heading">Contacts</h1>
  {contacts.map(createCard)}

</div>
      <footer>
        <p>Created By Khushnood Asif</p>
        <p>Copyright &copy; {currentYear}</p>
      </footer>
    </div>
    
  );
}


export default App;
 