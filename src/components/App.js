import './App.css';
import Header from './Header.js';
import Footer from './Footer.js';
import Note from './Note.js';
import notes from '../notes';


function App() {
  return (
    <div className="App">
      <Header />
      {notes.map(noteItem => (
        <Note
          key={noteItem.key}
          title={noteItem.title}
          content={noteItem.content}
        />
      ))}
      <Footer />
    </div>
  );
}


export default App;
 