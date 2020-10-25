import React from "react";
import { Row, Col } from "react-bootstrap";
import FormButton from "./FormButton";

interface IFormButtonsProps {
    primaryButtonName: string;
    primaryButtonOnClick: (e: React.FormEvent | React.MouseEvent) => void;
    secondaryButtonName: string;
    secondaryButtonOnClick: (e: React.FormEvent | React.MouseEvent) => void;
    tertiaryButtonName?: string;
    tertiaryButtonOnClick?: (e: React.FormEvent | React.MouseEvent) => void;
    color?: string;
}

function FormButtons(props: IFormButtonsProps) {
    return (
        <Row className="mb-2">
            {
                props.tertiaryButtonOnClick && props.tertiaryButtonName && (
                    <Col>
                        <FormButton
                            color={props.color}
                            name={props.tertiaryButtonName}
                            onClick={props.tertiaryButtonOnClick}
                        />
                    </Col>
                )
            }
            <Col>
                <FormButton
                    color={props.color}
                    name={props.secondaryButtonName}
                    onClick={props.secondaryButtonOnClick}
                />
            </Col>
            <Col>
                <FormButton
                    color={props.color}
                    name={props.primaryButtonName}
                    onClick={props.primaryButtonOnClick}
                    primary
                    submit
                />
            </Col>
        </Row>
    )
}

export default FormButtons