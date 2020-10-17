import React from 'react';
import './App.scss';
import ArmiesList from './ArmiesList';
import { Container } from 'react-bootstrap';

export const ThemeContext = React.createContext("blue");

function App() {

    return (
        <Container fluid className="h-100">
            <ArmiesList />
        </Container>
    );
}

export default App;
