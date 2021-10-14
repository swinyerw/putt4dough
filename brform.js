import {useState} from 'react';
import './index.css';
import Card from 'react-bootstrap/Card'
import firebase from 'firebase'

const db = firebase.firestore();

const Read = () => {
  const [info, setInfo] = useState([]);

  window.addEventListener('load', () => {
    Fetchdata();
  });

  const Fetchdata = () => {
    db.collection("Golf Balls").get().then((querySnapshot) => {
      querySnapshot.forEach(element => {
        var data = element.data();
        setInfo(arr => [...arr, data]);
      });
    })
  }
  return(
    <div className = "ballGroup">
      {
        info.map((data) => (
          <Frame name = {data.name}
                 price = {data.price}
                />
        ))
      }
    </div>
  );
}

const Frame = ({name, price}) => {
  return (
      <Card className = "card" border = "info" style={{ width: '20rem' }}>
        <Card.Body>
          <Card.Title className = "name">{name}</Card.Title>
          <Card.Subtitle className = "price">Price: ${price}</Card.Subtitle>
        </Card.Body>
      </Card>
  );
}

export default Read;


