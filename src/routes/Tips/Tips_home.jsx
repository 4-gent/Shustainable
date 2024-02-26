// Tips_Home.js
import React, { useState } from 'react';
import { Button, Modal, Form, Navbar, Nav, Container, Card } from 'react-bootstrap';
import './Tips.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import boba_background from './boba_background.jpg';
import tomatoes_background from './tomatoes_background.jpg';

const initialTips = [
  {
    id: 1,
    title: 'Grow your own fruits and veggies to avoid buying plastic packaging.',
    author: 'Shyla Monic',
    votes: 0,
    image: tomatoes_background,
    liked: false,
    saved: false
  },
  {
    id: 2,
    title: 'Businesses: Sell bubble tea in paper cups',
    author: 'Taylor Swift',
    votes: 0,
    image: boba_background,
    liked: false,
    saved: false
  }
];

function Tips_Home() {
  const [tips, setTips] = useState(initialTips);
  const [newTip, setNewTip] = useState({title: '', description: '', author: '', image: ''});
  const [show, setShow] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [view, setView] = useState('all');

  const handleLike = (id) => {
    setTips(tips.map(tip => tip.id === id ? {...tip, liked: !tip.liked} : tip));
  };

  const handleSave = (id) => {
    setTips(tips.map(tip => tip.id === id ? {...tip, saved: !tip.saved} : tip));
  };

  const handleNewTip = (field, value) => {
    setNewTip({...newTip, [field]: value});
  };

  const handleSearchTerm = event => {
    setSearchTerm(event.target.value);
  };

  const handleSubmitTip = () => {
    if (newTip.title && newTip.description && newTip.author && newTip.image) {
      setTips([...tips, {id: tips.length + 1, ...newTip, votes: 0, liked: false, saved: false}]);
      setNewTip({title: '', description: '', author: '', image: ''});
      setShow(false);
    } else {
      alert('Please fill out all fields before submitting.');
    }
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let filteredTips = tips.filter(tip => tip.title.toLowerCase().includes(searchTerm.toLowerCase()));

  if (view === 'liked') {
    filteredTips = filteredTips.filter(tip => tip.liked);
  } else if (view === 'saved') {
    filteredTips = filteredTips.filter(tip => tip.saved);
  }

  return (
    <div className="app">
      <nav >
          <Navigation />
      </nav>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Tip Submissions</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link onClick={() => setView('all')}>All Tips</Nav.Link>
            <Nav.Link onClick={() => setView('liked')}>Liked Tips</Nav.Link>
            <Nav.Link onClick={() => setView('saved')}>Saved Tips</Nav.Link>
          </Nav>
          <Form inline className="ml-auto">
            <Form.Control type="text" value={searchTerm} onChange={handleSearchTerm} placeholder="Search For Tips" className="mr-sm-2" />
            <Button variant="outline-success" onClick={handleShow}>Share Your Tips!</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
      <Container>
        {filteredTips.map(tip => (
          <Card className="tip" key={tip.id}>
            <Card.Img variant="top" src={tip.image} className="tip-image"/>
            <Card.Body>
              <Card.Title>{tip.title}</Card.Title>
              <Card.Text>
                {tip.description}
                <br />
                <small className="text-muted">{tip.author}</small>
              </Card.Text>
            </Card.Body>
            <Card.Footer className="votes">
              <Button variant={tip.liked ? "success" : "outline-success"} onClick={() => handleLike(tip.id)}>👍 {tip.liked ? "Liked" : "Like"}</Button>
              <Button variant={tip.saved ? "primary" : "outline-primary"} onClick={() => handleSave(tip.id)}>{tip.saved ? "💾 Saved" : "💾 Save"}</Button>
            </Card.Footer>
          </Card>
        ))}
      </Container>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Submit Your Tip</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" value={newTip.title} onChange={e => handleNewTip('title', e.target.value)} placeholder="Enter title" />
            </Form.Group>
            <Form.Group controlId="formBasicDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control type="text" value={newTip.description} onChange={e => handleNewTip('description', e.target.value)} placeholder="Enter description" />
            </Form.Group>
            <Form.Group controlId="formBasicAuthor">
              <Form.Label>Author</Form.Label>
              <Form.Control type="text" value={newTip.author} onChange={e => handleNewTip('author', e.target.value)} placeholder="Enter author" />
            </Form.Group>
            <Form.Group controlId="formBasicImage">
              <Form.Label>Image URL</Form.Label>
              <Form.Control type="text" value={newTip.image} onChange={e => handleNewTip('image', e.target.value)} placeholder="Enter image URL" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmitTip}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Tips_Home;
