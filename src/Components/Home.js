import React from 'react';
import { Container, Row, Col, Card} from 'react-bootstrap'

import earth from '../Images/Earth.jpg'

function Home(props) {
    return (
        <Container className="mt-5">
            <Row>
                <Col>
                    <Card className="mt-5">
                        <Card.Img variant='bottom' src={earth} alt='earth'/>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Home;