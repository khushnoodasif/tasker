import React, {useState} from 'react';

function CreateArea(props) {
   const [notes,setNote] = useState({
      title:"",
      content:""
   });

   function handleChange(event) {
      const {name,value} = event.target;

      setNote(prevnote => {
         return {
            ...prevnote,
            [name]:value
         };
      });
   }

   function submitNote(event) {
      props.onAdd(notes);
      setNote({
         title:"",
         content:""
      });
      event.preventDefault();
   }

   return (
      <div>
         <form>
            <input
               name="title"
               onChange={handleChange}
               value={notes.title}
               placeholder="Title"
            />
            <textarea
               name="content"
               onChange={handleChange}
               value={notes.content}
               placeholder="Take a note..."
               rows="3"
            />
            <button onClick={submitNote}>Add</button>
         </form>
      </div>
   );
}

export default CreateArea;
