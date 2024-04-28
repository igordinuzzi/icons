import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardWithLottie from './components/CardWithLottie';
import { Container, Row, Col } from 'react-bootstrap';
import truckAnimation from './assets/lottie/truck.json';
import toothAnimation from './assets/lottie/tooth.json';
import paintingAnimation from './assets/lottie/painting.json';
import peopleAnimation from './assets/lottie/people.json';
import coinsAnimation from './assets/lottie/coins.json';
import newAnimation1 from './assets/lottie/truck2.json';
import newAnimation2 from './assets/lottie/tooth2.json';
import newAnimation3 from './assets/lottie/painting2.json';
import newAnimation4 from './assets/lottie/people2.json';
import newAnimation5 from './assets/lottie/coins2.json';
import mainImage from './assets/images/main.jpg'; // Your main image at the top

const animations = [truckAnimation, toothAnimation, paintingAnimation, peopleAnimation, coinsAnimation];
const moreAnimations = [newAnimation1, newAnimation2, newAnimation3, newAnimation4, newAnimation5];

function App() {
    return (
        <Container>
            <Row className="mb-4">
                <Col>
                    <img src={mainImage} alt="Main Visual" style={{ width: '100%', height: 'auto' }} />
                </Col>
            </Row>
            <Row>
                {animations.map((animation, index) => (
                    <Col key={index} md={4} className="mb-4">
                        <CardWithLottie
                            title={`Card ${index + 1}`}
                            text="This is a card with a Lottie animation."
                            animationData={animation}
                        />
                    </Col>
                ))}
            </Row>
            <Row>
                {moreAnimations.map((animation, index) => (
                    <Col key={index} md={4} className="mb-4">
                        <CardWithLottie
                            title={`New Card ${index + 1}`}
                            text="This is another card with a new Lottie animation."
                            animationData={animation}
                        />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default App;
