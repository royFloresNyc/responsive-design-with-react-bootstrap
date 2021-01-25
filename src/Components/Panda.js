import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap'

import panda from '../Images/Panda.jpg'

function Panda(props) {
    return (
        <Container className="mt-5">
            <Row>
                <h1 className="mt-5 pl-3">Panda</h1>
            </Row>
            <Row>
                <Col md={4}>
                    <Card className="mt-2">
                        <Card.Img variant='bottom' src={panda} alt='gorilla'/>
                    </Card>
                </Col>
                <Col md={8} className="mt-2 bg-black">
                    <p className="text-white">The giant panda (Ailuropoda melanoleuca; Chinese: 大熊猫; pinyin: dàxióngmāo),[5] also known as the panda bear or simply the panda, is a bear[6] native to south central China.[1] It is characterised by large, black patches around its eyes, over the ears, and across its round body. The name "giant panda" is sometimes used to distinguish it from the red panda, a neighboring musteloid. Though it belongs to the order Carnivora, the giant panda is a folivore, with bamboo shoots and leaves making up more than 99% of its diet.[7] Giant pandas in the wild will occasionally eat other grasses, wild tubers, or even meat in the form of birds, rodents, or carrion. In captivity, they may receive honey, eggs, fish, yams, shrub leaves, oranges, or bananas along with specially prepared food</p>
                </Col>
            </Row>
        </Container>
    );
}

export default Panda;