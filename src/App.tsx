import React from 'react';
import './App.scss';
import ArmiesList from './ArmiesList';
import { Container, Row, Col } from 'react-bootstrap';

interface IContext {
    color: string;
    isUsingAlternateName?: boolean;
    toggleIsUsingAlternateName?: () => void;
}

export const ThemeContext = React.createContext<IContext>({ color: "blue" });

function App() {

    return (
        <Container fluid className="h-100">
            <Row>
                <Col xs={0} sm={1} md={2} lg={3} xl={3} />
                <Col xs={12} sm={10} md={8} lg={6} xl={6}>
                    <ArmiesList />
                </Col>
                <Col xs={0} sm={1} md={2} lg={3} xl={3} />
            </Row>
        </Container>
    );
}

export default App;
