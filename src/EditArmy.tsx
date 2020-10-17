import React, { useState } from "react";
import { ICrusadeArmy } from "./Constants";
import { CopyToClipboard } from "./Helpers/Clipboard";
import CopyIcon from "./Resources/Icons/CopyIcon.svg";
import DeleteIcon from "./Resources/Icons/DeleteIcon.svg";
import { Form, Row, Col, Button } from "react-bootstrap";
import FormInput from "./CommonFields/FormInput";
import FormNameEffectInputs from "./CommonFields/FormNameEffectInputs";
import { TwitterPicker, GithubPicker, CirclePicker } from "react-color";
import FormButtons from "./CommonFields/FormButtons";

interface IEditArmyProps {
    crusadeArmy: ICrusadeArmy;
    goBack: () => void;
    handleDeleteArmy: () => void;
    saveArmy: (unit: ICrusadeArmy) => void;
}

function EditArmy(props: IEditArmyProps) {
    const [isNewArmy] = useState<boolean>(props.crusadeArmy.name === "")
    const [army, setArmy] = useState<ICrusadeArmy>(props.crusadeArmy);

    function editArmy(func: (a: ICrusadeArmy) => void) {
        const newArmy = { ...army }
        func(newArmy)
        setArmy(newArmy)
    }

    function handleDelete(): void {
        if (window.confirm("Are you sure you wish to delete this army?")) {
            props.handleDeleteArmy();
        }
    }

    return (
        <>
            <Form onSubmit={() => props.saveArmy(army)} >
                <Row className="my-2 mx-1 header">
                    <h2>
                        {isNewArmy ? "Add Army" : "Edit Army"}
                        <img
                            className="icon"
                            src={DeleteIcon}
                            alt="Edit Links"
                            onClick={handleDelete}
                        />
                    </h2>
                </Row>
                <FormInput
                    formName="Name"
                    onChange={e => editArmy((a) => a.name = e.target.value)}
                    inputType="textbox"
                    value={army.name}
                />
                <FormNameEffectInputs
                    formName="Trait"
                    onNameChange={e => editArmy((a) => {
                        if (!a.detachmentTrait) {
                            a.detachmentTrait = {}
                        }
                        a.detachmentTrait.name = e.target.value
                    })}
                    nameEffect={army.detachmentTrait}
                    onEffectChange={e => editArmy((a) => {
                        if (!a.detachmentTrait) {
                            a.detachmentTrait = {}
                        }
                        a.detachmentTrait.effect = e.target.value
                    })}
                />
                <Row className="mb-2">
                    <Col>
                        <CirclePicker
                            width="90vw"
                            onChange={c => editArmy((a) => a.traitColor = c.hex)}
                            color={army.traitColor || "blue"}
                            colors={["#FF0000", "#0000FF", "#ebdb00", "#6b6b6b", "#00a00d"]}
                        />
                    </Col>
                </Row>
                <Row className="mb-2">
                    <Col>
                        <Form.Label>
                            Copy from Clipboard
                        </Form.Label>
                    </Col>
                    <Col>
                        <img
                            className="icon"
                            src={CopyIcon}
                            alt="Edit Links"
                            onClick={() => CopyToClipboard(props.crusadeArmy)}
                        />
                    </Col>
                </Row>
                <Row className="mb-2">
                    <Col>
                        <Form.Control
                            as="textarea"
                            rows={5}
                            onChange={e => {
                                const newArmy = JSON.parse(e.target.value)
                                newArmy.id = army.id;
                                setArmy(newArmy)
                            }}
                            value={JSON.stringify(army)}
                        />
                    </Col>
                </Row>
                <FormButtons
                    primaryButtonName="Save"
                    primaryButtonOnClick={() => props.saveArmy(army)}
                    secondaryButtonName="Back"
                    secondaryButtonOnClick={props.goBack}
                    color={army.traitColor}
                />
            </Form>
        </>
    )
}

export default EditArmy;