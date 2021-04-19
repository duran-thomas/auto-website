import {Component} from 'react'
import {Nav, Navbar, NavDropdown} from 'react-bootstrap'

class NavigationBar extends Component{
    render(){
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <div className="container-fluid">
                    <Navbar.Brand href="/">Auto Website</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className='ml-auto'>
                            <Nav.Link href="/">Home</Nav.Link>
                            <NavDropdown title="Vehicles" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="/new-vehicles">New Vehicles</NavDropdown.Item>
                                <NavDropdown.Item href="/used-vehicles">Used Vehicles</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="/about-us">About Us</Nav.Link>
                            <Nav.Link href="/contact-us">Contact Us</Nav.Link>
                            <Nav.Link href="/book-appointment">Book Appointment</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    </div>
                </Navbar>
            </div>
            // <ul>
            //     <li><Link to="/">Home</Link></li>
            //     <li><Link to="/new-vehicles">New Vehicles</Link></li>
            //     <li><Link to="/used-vehicles">Used Vehicles</Link></li>
            //     <li><Link to="/contact-us">Contact</Link></li>
            //     <li><Link to="/about-us">About</Link></li>
            //     <li><Link to="/book-appointment">Book Appointment</Link></li>
            // </ul>
        )
    }
}
    
export default NavigationBar;