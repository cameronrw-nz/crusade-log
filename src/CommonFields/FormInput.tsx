import React from "react";
import { Form, Row, Col } from "react-bootstrap";

interface IFormInputProps {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    formName: string;
    value?: string | number;
    placeHolder?: string;
    inputType: string;
    resetFirstColSpan?: boolean;
}

function FormInput(props: IFormInputProps): JSX.Element {
    return (
        <Form.Group as={Row} className="mb-2" controlId={`form${props.formName}`}>
            <Col xs={props.resetFirstColSpan ? undefined : 4}>
                <Form.Label>
                    {props.formName}
                </Form.Label>
            </Col>
            <Col>
                <Form.Control type={props.inputType} onChange={props.onChange} value={props.value} placeholder={props.placeHolder || props.formName} />
            </Col>
        </Form.Group>
    )
}

export default FormInput;