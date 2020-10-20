import React from "react";
import { ICrusadeUnit, IOutOfAction } from "../Constants";
import { Form, Row, Col, Button } from "react-bootstrap";
import { ThemeContext } from "../App";
import FormNameEffectInputs from "./FormNameEffectInputs";
import FormInput from "./FormInput";

interface IEditOutOfActionsProps {
    unit: ICrusadeUnit;
    editUnit: (edit: (u: ICrusadeUnit) => void) => void
}

function EditOutOfActions(props: IEditOutOfActionsProps): JSX.Element {
    function addOutOfAction(e: React.MouseEvent) {
        e.preventDefault()

        props.editUnit((u) => {
            let outOfActions = u.outOfAction
            if (!outOfActions) {
                outOfActions = [];
            }

            outOfActions.push({ isActive: true });
            u.outOfAction = outOfActions
        })
    }

    function editOutOfAction(edit: (o: IOutOfAction) => void, index: number): void {
        props.editUnit((u) => {
            const newOutOfAction = { ...u.outOfAction[index] };
            edit(newOutOfAction)
            u.outOfAction.splice(index, 1, newOutOfAction);
        })
    }

    const outOfActionDisplay: JSX.Element[] = []
    if (props.unit.outOfAction && props.unit.outOfAction.length > 0) {
        props.unit.outOfAction.forEach((outOfAction, index) => {
            if (!outOfAction.isActive) {
                return;
            }
            outOfActionDisplay.push(
                <>
                    <FormNameEffectInputs
                        onEffectChange={e => editOutOfAction(o => {
                            if (!o.battleScar) {
                                o.battleScar = {}
                            }
                            o.battleScar.effect = e.target.value
                        }, index)}
                        onNameChange={e => editOutOfAction(o => {
                            if (!o.battleScar) {
                                o.battleScar = {}
                            }
                            o.battleScar.name = e.target.value
                        }, index)}
                        nameEffect={outOfAction.battleScar}
                        formName="Battle Scar"
                    />
                    <FormInput
                        onChange={e => editOutOfAction((o) => o.xp = Number.parseInt(e.target.value), index)}
                        value={outOfAction.xp}
                        formName="Experience Loss"
                        inputType="textbox"
                    />
                </>
            )
        })
    }

    return (
        <ThemeContext.Consumer>
            {value =>
                <Form.Group as={Row} className="mb-2" controlId={`formWarlordTrait`}>
                    <Col>
                        <Row className="mb-2">
                            <Col>
                                <Form.Label>
                                    Out Of Action
                                </Form.Label>
                            </Col>
                            <Col>
                                <Button
                                    variant="outline-primary"
                                    onClick={addOutOfAction}
                                    type="button"
                                    block
                                    style={{ borderColor: value, color: value }}
                                >
                                    Add
                                </Button>
                            </Col>
                        </Row>
                        {outOfActionDisplay}
                    </Col>
                </Form.Group>
            }
        </ThemeContext.Consumer>
    )
}

export default EditOutOfActions;