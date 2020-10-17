import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { ThemeContext } from "../App";

interface IFormButtonsProps {
    primaryButtonName: string;
    primaryButtonOnClick: (e: React.FormEvent | React.MouseEvent) => void;
    secondaryButtonName: string;
    secondaryButtonOnClick: () => void;
    tertiaryButtonName?: string;
    tertiaryButtonOnClick?: () => void;
    color?: string;
}

function FormButtons(props: IFormButtonsProps) {
    return (
        <ThemeContext.Consumer>
            {value =>
                <Row className="mb-2">
                    {
                        props.tertiaryButtonOnClick && props.tertiaryButtonName && (
                            <Col>
                                <Button
                                    block
                                    size="lg"
                                    variant="outline-primary"
                                    onClick={props.tertiaryButtonOnClick}
                                    type="button"
                                    style={{ borderColor: props.color || value, color: props.color || value }}
                                >
                                    {props.tertiaryButtonName}
                                </Button>
                            </Col>
                        )
                    }
                    <Col>
                        <Button
                            block
                            size="lg"
                            variant="outline-primary"
                            onClick={props.secondaryButtonOnClick}
                            type="button"
                            style={{ borderColor: props.color || value, color: props.color || value }}
                        >
                            {props.secondaryButtonName}
                        </Button>
                    </Col>
                    <Col>
                        <Button
                            block
                            size="lg"
                            variant="primary"
                            onClick={props.primaryButtonOnClick}
                            type="submit"
                            style={{ borderColor: props.color || value, backgroundColor: props.color || value }}
                        >
                            {props.primaryButtonName}
                        </Button>
                    </Col>
                </Row>
            }
        </ThemeContext.Consumer >
    )
}

export default FormButtons