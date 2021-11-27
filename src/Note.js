import react from 'react';
import Card from './Card.js';

function Note() {
   return (
     <div className="note">
     <Card 
     name ="Khushnood Asif"
     img ="src\logo.svg"
     mobile="+4479848512"
     email="test@example.com"
     />
     </div>
   );
 }

 export default Note;