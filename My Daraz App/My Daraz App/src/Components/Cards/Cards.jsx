import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import style from "./Cards.module.css"

function Cards({imgSrc,tittle,desc}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant={`top ${style.cover}`} src={imgSrc} />
      <Card.Body>
        <Card.Title>{tittle}</Card.Title>
        <Card.Text>{desc}</Card.Text>
        <Button variant="primary">Buy</Button>
      </Card.Body>
    </Card>
  );
}

export default Cards;