import { Container, Nav, Navbar } from "react-bootstrap";
//El siguiente import nos proporciona una funcion para cambiar la url de nuestra app controlada dinamicamente por nuestro codigo
import {useNavigate} from 'react-router-dom';
const Header = () => {

  const navigate = useNavigate();

    return (
        <>

         <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand onClick={() => navigate ('/')}>React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => navigate ('/')}>Home</Nav.Link>
            <Nav.Link onClick={() => navigate ('/componentes')}>Componentes</Nav.Link>
            <Nav.Link onClick={() => navigate ('/administracion')}>Administracion</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

        </>
    )
} 
export default Header;
