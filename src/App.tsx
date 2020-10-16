import React from 'react';
import './App.scss';
import ArmiesList from './ArmiesList';
import { Container } from 'react-bootstrap';

function App() {

    return (
        <Container fluid className="h-100">
            <ArmiesList />
        </Container>
    );
}

export default App;
