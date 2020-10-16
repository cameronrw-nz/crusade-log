import React from "react";
import { ICrusadeUnit, IOutOfAction } from "../Constants";
import { Form, Row, Col, Button } from "react-bootstrap";

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
        outOfActionDisplay.push(
            <Row className="mb-2">
                <Col>
                    Battle Scar
                </Col>
                <Col>
                    Out Of Action
                </Col>
            </Row>
        )
        props.unit.outOfAction.forEach((outOfAction, index) => {
            if (!outOfAction.isActive) {
                return;
            }
            outOfActionDisplay.push(
                <Row className="mb-2">
                    <Col className="pr-1">
                        <Form.Control
                            type="textbox"
                            onChange={e => editOutOfAction((o) => o.battleScar!.effect = e.target.value, index)}
                            value={outOfAction.battleScar?.effect}
                            placeholder="Name"
                        />
                    </Col>
                    <Col className="pl-1">
                        <Form.Control
                            type="textbox"
                            onChange={e => editOutOfAction((o) => o.xp = Number.parseInt(e.target.value), index)}
                            value={outOfAction.xp}
                            placeholder="Effect"
                        />
                    </Col>
                </Row>
            )
        })
    }

    return (
        <Form.Group as={Row} className="mb-2" controlId={`formWarlordTrait`}>
            <Col>
                <Row className="mb-2">
                    <Col>
                        <Form.Label>
                            Out Of Action
                        </Form.Label>
                    </Col>
                    <Col>
                        <Button variant="outline-primary" onClick={addOutOfAction} type="button" block>
                            Add
                        </Button>
                    </Col>
                </Row>
                {outOfActionDisplay}
            </Col>
        </Form.Group>
    )
}

export default EditOutOfActions;