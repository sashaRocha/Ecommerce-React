import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import './Item.css';
import { Link } from 'react-router-dom';


function Item({ id,name, img, price, description,stock }){
    return( 
      <Container fluid="xxl">
      <Row xs={5} md={1} className="g-4">
      {Array.from({ length: 1 }).map((_, idx) => (
        <Col lg={true} >
          <Card border="primary" style={{ width: '18rem' }} className='box'>
            <Card.Img variant="top" src={img} />
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>
                    Precio: ${price}
              </Card.Text>
              <Card.Text>
                   Stock: {stock}
             </Card.Text>
              <Card.Text>
                    {description}
              </Card.Text>
            
              <Link to={`/detail/${id}`} >  
                  <Button variant="primary">Ver Detalles</Button>
              </Link>
            </Card.Body>
          </Card>

        </Col>
      ))}
    </Row>
    </Container>
       
      )
    
}

export default Item;
