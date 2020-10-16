import React, { useState } from "react";
import { ICrusadeArmy } from "./Constants";
import { CopyToClipboard } from "./Helpers/Clipboard";
import CopyIcon from "./Resources/Icons/CopyIcon.svg";
import DeleteIcon from "./Resources/Icons/DeleteIcon.svg";
import { Form, Row, Col, Button } from "react-bootstrap";
import FormInput from "./CommonFields/FormInput";

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
                <Row className="mb-2">
                    <Col>
                        <Button block size="lg" variant="outline-primary" onClick={props.goBack} type="button">
                            Back
                        </Button>
                    </Col>
                    <Col>
                        <Button block size="lg" variant="primary" onClick={() => props.saveArmy(army)} type="submit">
                            Save
                        </Button>
                    </Col>
                </Row>
            </Form>
        </>
    )
}

export default EditArmy;