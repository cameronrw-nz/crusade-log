import React from "react";
import { Form, Row, Col } from "react-bootstrap";
import { INameEffect } from "../Constants";

interface IFormNameEffectInputsProps {
    formName?: string;
    onNameChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    nameEffect?: INameEffect;
    onEffectChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function FormNameEffectInputs(props: IFormNameEffectInputsProps) {
    let formHeaderLabel = undefined
    if (props.formName) {
        formHeaderLabel = (
            <Row>
                <Col>
                    <Form.Label>
                        {props.formName}
                    </Form.Label>
                </Col>
            </Row>
        )
    }

    return (
        <Form.Group as={Row} className="mb-2" controlId={`form${props.formName}`}>
            <Col>
                {formHeaderLabel}
                <Row>
                    <Col className="pr-1">
                        <Form.Control
                            type="textbox"
                            onChange={props.onNameChange}
                            value={props.nameEffect?.name}
                            placeholder="Name"
                        />
                    </Col>
                    <Col className="pl-1">
                        <Form.Control
                            type="textbox"
                            onChange={props.onEffectChange}
                            value={props.nameEffect?.effect}
                            placeholder="Effect"
                        />
                    </Col>
                </Row>
            </Col>
        </Form.Group>
    )
}

export default FormNameEffectInputs;