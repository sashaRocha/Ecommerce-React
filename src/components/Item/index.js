import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function Item({ item }){
    return( 
      <div className="grid text-center">
           <div>
            <Card style={{ width: '30rem' }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>
                  {`Email user : ${item.email}`}    
                </Card.Text>
                <Button variant="primary">Mas Informacion</Button>
              </Card.Body>
            </Card> 
            </div>
            </div>
      )
    
}

export default Item;
