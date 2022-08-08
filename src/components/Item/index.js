import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';


function Item({ name, img, price, description }){
    return( 
      <Container>
      <Row xs={1} md={2} className="g-4 box">
      {Array.from({ length: 2 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img variant="top" src={img} />
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>
                    Precio: ${price}
              </Card.Text>
              <Card.Text>
                    {description}
              </Card.Text>
              <Button variant="primary">Ver Detalles</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </Container>
       
      )
    
}

export default Item;
