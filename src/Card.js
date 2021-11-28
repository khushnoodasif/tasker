import react from 'react';
import Avatar from './Avatar.js';
import Detail from './Detail.js';

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <Avatar img={props.img}/>
      </div>
      <div className="bottom">
        <Detail detailinfo={props.mobile}/>
        <Detail detailinfo={props.email}/>
      </div>
    </div>
  );
}

export default Card;