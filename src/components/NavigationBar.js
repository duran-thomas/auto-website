import {Component} from 'react'
import {Nav, Navbar, NavDropdown, Container} from 'react-bootstrap'

var d = new Date();
var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var time = ""

if(d.getDay() === 0){
    time = "11am - 5pm"
}else if(d.getDay() === 1 || d.getDay() === 2 || d.getDay() === 3 || d.getDay() === 4 || d.getDay() === 5){
    time = "10am - 7pm"
}else{
    time = "11am - 5pm"
}

class NavigationBar extends Component{

    constructor(props) {
        super(props);
          this.state = {
            openingHours: time
          }
    }

    render(){
        return (
            <div style={{backgroundColor: '#F8F9FA'}}>
                <Container >
                <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                    <div className="container-fluid">
                    <Navbar.Brand href="/">Jahvon Prince</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className='ml-auto'>
                            <Nav.Link href="/">Home</Nav.Link>
                            <NavDropdown title="Vehicles" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="/new-vehicles">New Vehicles</NavDropdown.Item>
                                <NavDropdown.Item href="/used-vehicles">Used Vehicles</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="/about-us">About</Nav.Link>
                            <Nav.Link href="/contact-us">Contact Us</Nav.Link>
                            <Nav.Link href="/book-appointment">Book Appointment</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    </div>
                </Navbar>
                </Container>
                <div className='opening-hrs-bar'>
                   <p>Open Today! {this.state.openingHours}</p>
               </div>
               
            </div>
        )
    }
}
    
export default NavigationBar;