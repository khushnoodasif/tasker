import React from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
   <MuiThemeProvider>
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}><DeleteForeverIcon/></button>
    </div>
   </MuiThemeProvider>
  );
}

export default Note;
