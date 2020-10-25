import React from "react";
import { ICrusadeUnit, INameEffect } from "../Constants";
import { Form, Row, Col, Button } from "react-bootstrap";
import { ThemeContext } from "../App";
import FormNameEffectInputs from "./FormNameEffectInputs";

interface IEditBattleScarsProps {
    unit: ICrusadeUnit;
    editUnit: (edit: (u: ICrusadeUnit) => void) => void
}

function EditBattleScars(props: IEditBattleScarsProps): JSX.Element {
    function addBattleScar(e: React.MouseEvent) {
        e.preventDefault()

        props.editUnit((u) => {
            let battleScars = u.battleScars
            if (!battleScars) {
                battleScars = [];
            }

            u.battleScars.push({})
        })
    }

    function editBattleScar(edit: (o: INameEffect) => void, index: number): void {
        props.editUnit((u) => {
            const newBattleScar = { ...u.battleScars[index] };
            edit(newBattleScar)
            u.battleScars.splice(index, 1, newBattleScar);
        })
    }

    const outOfActionDisplay: JSX.Element[] = []
    if (props.unit.battleScars && props.unit.battleScars.length > 0) {
        props.unit.battleScars.forEach((battleScar, index) => {
            outOfActionDisplay.push(
                <FormNameEffectInputs
                    key={index}
                    onEffectChange={e => editBattleScar(o => o.effect = e.target.value, index)}
                    onNameChange={e => editBattleScar(o => o.name = e.target.value, index)}
                    nameEffect={battleScar}
                />
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
                                    Battle Scars
                                </Form.Label>
                            </Col>
                            <Col>
                                <Button
                                    variant="outline-primary"
                                    onClick={addBattleScar}
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

export default EditBattleScars;