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
    db.collection("Courses").get().then((querySnapshot) => {
      querySnapshot.forEach(element => {
        var data = element.data();
        setInfo(arr => [...arr, data]);
      });
    })
  }
  return(
    <div className = "cardGroup">
      {
        info.map((data) => (
          <Frame name = {data.name}
                 price = {data.price}
                 rating = {data.rating}
                 yardage = {data.yardage}
                 description = {data.description}
                />
        ))
      }
    </div>
  );
}

const Frame = ({name, price, rating, yardage, description}) => {
  return (
      <Card className = "card" border = "info" style={{ width: '20rem' }}>
        <Card.Body>
          <Card.Title className = "name">{name}</Card.Title>
          <Card.Subtitle className = "price">Price: ${price}</Card.Subtitle>
          <Card.Subtitle className = "rating">Rating(1-5): {rating}</Card.Subtitle>
          <Card.Subtitle className = "yardage">Yardage: {yardage}</Card.Subtitle>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Card>
  );
}

export default Read;

