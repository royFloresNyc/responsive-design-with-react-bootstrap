import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap'

import seaTurtle from '../Images/SeaTurtle.jpg'

function SeaTurtle(props) {
    return (
        <Container className="mt-5">
            <Row>
                <h1 className="mt-5 pl-3">Sea Turtle</h1>
            </Row>
            <Row>
                <Col md={4}>
                    <Card className="mt-2">
                        <Card.Img variant='bottom' src={seaTurtle} alt='gorilla'/>
                    </Card>
                </Col>
                <Col md={8} className="mt-2 bg-black">
                    <p className="text-white">Two species of sea turtle are critically endangered on the IUCN Red List of Threatened Species: Hawksbill Turtles and Kemps Ridley Turtles. Leatherback sea turtles are classified as Vulnerable, though the population is decreasing and several subpopulations are facing extinction. Hunting is one of the biggest threats to sea turtles, with poachers targeting their eggs, shells, meat and skin. They are also at risk from habitat loss, bycatch, and pollution as well as climate change. Sand temperature determines the sex of hatchlings with eggs developing as females in warmer temperatures. That means even small temperature changes could skew the sex ratio of populations. Furthermore, breeding beaches could disappear underwater with sea-level rise.</p>
                </Col>
            </Row>
        </Container>
    );
}

export default SeaTurtle;