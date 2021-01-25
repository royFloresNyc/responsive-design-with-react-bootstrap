import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap'

import rhino from '../Images/Rhino.jpg'

function Rhino(props) {
    return (
        <Container className="mt-5">
            <Row>
                <h1 className="mt-5 pl-3">Rhinocerous</h1>
            </Row>
            <Row>
                <Col md={4}>
                    <Card className="mt-2">
                        <Card.Img variant='bottom' src={rhino} alt='gorilla'/>
                    </Card>
                </Col>
                <Col md={8} className="mt-2 bg-black">
                    <p className="text-white">The name Rhinocerous comes from two Greek words Rhino and Ceros, which when translated into English mean nose horn! It’s a very fitting name, don’t you think? Unfortunately, though, poaching for their distinctive horns is their biggest threat. They are used in Traditional Chinese medicine and displayed as a status symbol and demonstration of wealth. They are so highly prized that a Javan rhino horn can sell for up to $30,000 per kg on the black market. Because of this, three of the five species of rhinoceros are among the most endangered species in the world: the black rhino, the Javan rhino, and the Sumatran rhino. The Javan rhino is the closest to extinction with only between 46 to 66 individuals left, all of which are in Ujung Kulon National Park in Indonesia.</p>
                </Col>
            </Row>
        </Container>
    );
}

export default Rhino;