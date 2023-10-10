import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link, useNavigate } from 'react-router-dom';
import Login from '../../views/login/Login';
import Register from '../../views/register/Register';
import { handleLogOut, myProfile } from '../services/context';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Avatar } from '@mui/material';
function AppBarView() {

  const navigate = useNavigate();
  const [loginOpen, setLoginOpen] = React.useState(false);
  const [registerOpen, setRegisterOpen] = React.useState(false);
  const [userName, setName] = React.useState('Guest');
  const [userImage, setImage] = React.useState('');

  useEffect(() => {
    if (localStorage.getItem('token')) {
      myProfile().then((userData) => {
        const { name, image } = userData[0]
        setName(name)
        setImage(image)
      })
    }
  }, [])


  return (
    <>
      {['xl'].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
          <Container>
            <Navbar.Brand href="/">BLOGOSPHERE</Navbar.Brand>
            <Navbar.Toggle className="bg-transparent border-0" aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link as={Link} to="/">Home</Nav.Link>
                  <Nav.Link as={Link} to="/post">Post</Nav.Link>
                  <Nav.Link as={Link} to="/about">About</Nav.Link>
                  <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
                  <NavDropdown
                    className='custom-dropdown'
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                    title={userName || userImage ? <>
                      <div style={{ display: 'flex' }}>
                        <Avatar sx={{ width: 24, height: 24 }} alt="Remy Sharp" src={userImage} />
                        {` Hi! ${userName.split(' ')[0]}`}
                      </div>
                    </> : <>
                      <AccountCircleIcon /> {` `} Hi! Guest
                    </>}
                  >
                    {localStorage.getItem('token') ? (
                      <>
                        <NavDropdown.Item as={Link} to='my-profile'>My Profile</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => handleLogOut(navigate)}>Logout</NavDropdown.Item>
                      </>
                    ) : (
                      <>
                        <NavDropdown.Item onClick={() => setLoginOpen(true)}>Login</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => setRegisterOpen(true)}>Register</NavDropdown.Item>
                      </>
                    )}
                  </NavDropdown>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar >
      ))
      }

      <Login
        modalShow={loginOpen}
        onHide={() => setLoginOpen(false)}
        setLoginOpen={setLoginOpen}
      />

      <Register
        modalShow={registerOpen}
        onHide={() => setRegisterOpen(false)}
        size={'lg'}
      />
    </>
  );
}

export default AppBarView;