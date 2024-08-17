import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Navbar1() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
      <img src='image.png' className=" w-10 h-15 mr-3" />
        <Navbar.Brand href="#home">DCC</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Link to="./Home"><Nav.Link href="#home" className="hover:bg-gray-400">Home</Nav.Link></Link>
            <Link to="./form1"><Nav.Link href="#home" className="hover:bg-gray-400">Form-1</Nav.Link></Link>
            <Link to="./form2"><Nav.Link href="#link"className="hover:bg-gray-400">Form-2</Nav.Link></Link>
            <Link to="./form3"><Nav.Link href="#link"className="hover:bg-gray-400">Form-3</Nav.Link></Link>
            <Link to="./form4"><Nav.Link href="#link"className="hover:bg-gray-400">Form-4</Nav.Link></Link>
            <Link to="./form5"><Nav.Link href="#link"className="hover:bg-gray-400">Form-5</Nav.Link></Link>
            <Link to="./form6"><Nav.Link href="#link"className="hover:bg-gray-400">Form-6</Nav.Link></Link>
            <Link to="./form7"><Nav.Link href="#link"className="hover:bg-gray-400">Form-7</Nav.Link></Link>
            <Link to="./form8"><Nav.Link href="#link"className="hover:bg-gray-400">Form-8</Nav.Link></Link>
           
            <Link to="./form9"><Nav.Link href="#link"className="hover:bg-gray-400">Form-9</Nav.Link></Link>
            <Link to="./form10"><Nav.Link href="#link"className="hover:bg-gray-400">Form-10</Nav.Link></Link>
            <Link to="./form11"><Nav.Link href="#link"className="hover:bg-gray-400">Form-11</Nav.Link></Link>
            <Link to="./form12"><Nav.Link href="#link"className="hover:bg-gray-400">Form-12</Nav.Link></Link>
            <Link to="./form13"><Nav.Link href="#link"className="hover:bg-gray-400">Form-13</Nav.Link></Link>
            <Link to="./form14"><Nav.Link href="#link"className="hover:bg-gray-400">Form-14</Nav.Link></Link>
            <Link to="./form15"><Nav.Link href="#link"className="hover:bg-gray-400">Form-15</Nav.Link></Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbar1;