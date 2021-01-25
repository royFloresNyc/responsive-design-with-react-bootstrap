import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap'

import gorilla from '../Images/Gorilla.jpg'

function Gorilla(props) {
    return (
        <Container className="mt-5">
            <Row>
                <h1 className="mt-5 pl-3">Gorilla</h1>
            </Row>
            <Row>
                <Col md={4}>
                    <Card className="mt-2">
                        <Card.Img variant='bottom' src={gorilla} alt='gorilla'/>
                    </Card>
                </Col>
                <Col md={8} className="mt-2 bg-black">
                    <p className="text-white">Gorillas are fascinating creatures that share 98.3% of their DNA with humans! They are capable of feeling emotions like we do and even behave like us sometimes – did you know they can laugh? There are two species, the Eastern Gorilla and the Western Gorilla, and they both have two subspecies. Three out of four are Critically Endangered on the IUCN Red List of Threatened Species. The only one that isn’t is the Mountain Gorilla, a subspecies of the Eastern Gorilla, which is considered Endangered. At the time of writing (June 2020), there are only around 150 to 180 adult Cross River Gorillas left in the wild. Like many endangered animals, their decline is mostly due to poaching, habitat loss, disease, and human conflict. Gorillas are also slow to recover as they have a low reproductive rate, meaning females only give birth every four to six years. One female will breed three or four times in her lifetime.</p>
                </Col>
            </Row>
        </Container>
    );
}

export default Gorilla;