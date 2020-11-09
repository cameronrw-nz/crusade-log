import React from "react";
import { Row, Col, Form } from "react-bootstrap";

interface IReadOnlyRowProps {
    firstColumn: string;
    label?: boolean;
    secondColumn: React.ReactNode;
    onClick?: () => void
}

function ReadOnlyRow(props: IReadOnlyRowProps): JSX.Element {
    let firstColumn: JSX.Element | string = props.firstColumn;
    if (props.label) {
        firstColumn = (
            <Form.Label>
                {props.firstColumn}
            </Form.Label>
        )
    }

    return (
        <Row className="mb-2" onClick={props.onClick}>
            <Col>
                {firstColumn}
            </Col>
            <Col>
                {props.secondColumn}
            </Col>
        </Row>

    )
}

export default ReadOnlyRow