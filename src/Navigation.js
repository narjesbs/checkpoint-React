import {Nav} from 'react-bootstrap';

function Navv() {
  return ( 
    <div className="theNavBar">
        <Nav variant="tabs" defaultActiveKey="/home">
            <Nav.Item>
                <Nav.Link href="/home">Form</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-1">Payment</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="disabled" disabled>Shipping</Nav.Link>
            </Nav.Item>
        </Nav>
    </div>
    );
  }
    export default Navv;