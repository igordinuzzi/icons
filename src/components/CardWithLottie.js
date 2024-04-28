import React from 'react';
import { Card } from 'react-bootstrap';
import Lottie from 'react-lottie';

function CardWithLottie({ title, text, animationData }) {
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <Card style={{ width: '18rem' }}>
            <Lottie options={defaultOptions} height={150} width={150} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{text}</Card.Text>
            </Card.Body>
        </Card>
    );
}

export default CardWithLottie;
