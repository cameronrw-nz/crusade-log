import React from 'react';
import './App.scss';
import ArmiesList from './ArmiesList';
import { Container } from 'react-bootstrap';

interface IContext {
    color: string;
    isUsingAlternateName?: boolean;
    toggleIsUsingAlternateName?: () => void;
}

export const ThemeContext = React.createContext<IContext>({ color: "blue" });

function App() {

    return (
        <Container fluid className="h-100">
            <ArmiesList />
        </Container>
    );
}

export default App;
