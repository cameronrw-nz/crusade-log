import React, { useState } from "react";
import { ICrusadeUnit, BattleHonourRank } from "./Constants";
import { CalculateTotalExperience } from "./Helpers/CrusadeUnitHelper";
import EditOutOfActions from "./CommonFields/EditOutOfActions";
import DeleteIcon from "./Resources/Icons/DeleteIcon.svg";
import { Form, Button, Row, Col } from "react-bootstrap";
import FormInput from "./CommonFields/FormInput";

interface IEditUnitProps {
    deleteUnit: (unit: ICrusadeUnit) => void;
    goBack: () => void;
    saveUnit: (unit: ICrusadeUnit) => void;
    unit: ICrusadeUnit;
}

function EditUnit(props: IEditUnitProps) {
    const [isNewUnit] = useState<boolean>(props.unit.name === "")
    const [unit, setUnit] = useState<ICrusadeUnit>(props.unit);

    function save(e: React.FormEvent | React.MouseEvent) {
        e.preventDefault()
        e.stopPropagation()
        props.saveUnit(unit)
    }

    function editUnit(func: (u: ICrusadeUnit) => void) {
        const newUnit: ICrusadeUnit = { ...unit, battleHonours: [...unit.battleHonours], outOfAction: [...(unit.outOfAction || [])] };
        func(newUnit)
        const newTotalExperience = CalculateTotalExperience(newUnit);

        if (newUnit.battleHonours.findIndex(bh => bh.rank === BattleHonourRank.Blooded) < 0 && newTotalExperience >= 6) {
            newUnit.battleHonours.push({ crusadePoints: newUnit.powerLevel >= 11 ? 2 : 1, battleTrait: { effect: "" }, rank: BattleHonourRank.Blooded })
        }
        else if (newUnit.battleHonours.findIndex(bh => bh.rank === BattleHonourRank.BattleHardened) < 0 && newTotalExperience >= 16) {
            newUnit.battleHonours.push({ crusadePoints: newUnit.powerLevel >= 11 ? 2 : 1, battleTrait: { effect: "" }, rank: BattleHonourRank.BattleHardened })
        }
        else if (newUnit.battleHonours.findIndex(bh => bh.rank === BattleHonourRank.Heroic) < 0 && newTotalExperience >= 31) {
            newUnit.battleHonours.push({ crusadePoints: newUnit.powerLevel >= 11 ? 2 : 1, battleTrait: { effect: "" }, rank: BattleHonourRank.Heroic })
        }
        else if (newUnit.battleHonours.findIndex(bh => bh.rank === BattleHonourRank.Legendary) < 0 && newTotalExperience >= 51) {
            newUnit.battleHonours.push({ crusadePoints: newUnit.powerLevel >= 11 ? 2 : 1, battleTrait: { effect: "" }, rank: BattleHonourRank.Legendary })
        }

        setUnit(newUnit)
    }

    function handleDeleteUnit(): void {
        if (window.confirm("Are you sure you wish to delete this unit?")) {
            props.deleteUnit(props.unit);
        }
    }

    const totalExperience = CalculateTotalExperience(unit);

    let crusadePoints = 0;
    let battleHonours = unit.battleHonours.map((battleHonour, index) => {
        crusadePoints += battleHonour.crusadePoints;

        return (
            <FormInput
                key={index}
                formName={battleHonour.rank}
                inputType="textbox"
                onChange={event => {
                    editUnit((u) => {
                        let bh = u.battleHonours.find(b => b.rank === battleHonour.rank)
                        if (!bh?.battleTrait) {
                            bh!.battleTrait = {}
                        }
                        bh!.battleTrait.effect = event.target.value;
                    })
                }}
                value={battleHonour.battleTrait?.effect}
            />
        )
    });

    return (
        <Form onSubmit={save} id="edit-unit">
            <Row className="my-2 mx-1 header">
                <h2>
                    {isNewUnit ? "Adding Unit " : "Editting Unit "}
                    <img
                        className="icon"
                        src={DeleteIcon}
                        alt="Edit Links"
                        onClick={handleDeleteUnit}
                    />
                </h2>
            </Row>
            <FormInput
                formName="Name"
                inputType="textbox"
                onChange={e => editUnit((u) => u.name = e.target.value)}
                value={unit.name}
            />
            <FormInput
                formName="Power Level"
                inputType="number"
                onChange={e => editUnit((u) => u.powerLevel = Number.parseInt(e.target.value))}
                value={unit.powerLevel}
            />
            <FormInput
                formName="Participation"
                inputType="number"
                onChange={e => editUnit((u) => u.battleParticipation = Number.parseInt(e.target.value))}
                value={unit.battleParticipation}
            />
            <FormInput
                formName="Greatness"
                inputType="number"
                onChange={e => editUnit((u) => u.markedForGreatness = Number.parseInt(e.target.value))}
                value={unit.markedForGreatness}
            />
            <FormInput
                formName="Agenda"
                inputType="number"
                onChange={e => editUnit((u) => u.agendaXp = Number.parseInt(e.target.value))}
                value={unit.agendaXp}
            />
            <FormInput
                formName="Kills"
                inputType="number"
                onChange={e => editUnit((u) => u.kills = Number.parseInt(e.target.value))}
                value={unit.kills}
            />
            <Row className="mb-2">
                <Col>
                    <Form.Label>Total Experience</Form.Label>
                </Col>
                <Col>
                    {totalExperience}
                </Col>
            </Row>
            {battleHonours}
            <EditOutOfActions
                unit={unit}
                editUnit={editUnit}
            />
            <Form.Group as={Row} className="mb-2" controlId="formWarlordTrait">
                <Col>
                    <Row>
                        <Col>
                            <Form.Label>
                                Warlord Trait
                                </Form.Label>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="pr-1">
                            <Form.Control
                                type="textbox"
                                onChange={event => editUnit((u) => {
                                    if (!u.warlordTrait) {
                                        u.warlordTrait = {}
                                    }
                                    u.warlordTrait.name = event.target.value
                                })}
                                value={unit.warlordTrait?.name || ""}
                                placeholder="Name"
                            />
                        </Col>
                        <Col className="pl-1">
                            <Form.Control
                                type="textbox"
                                onChange={event => editUnit((u) => {
                                    if (!u.warlordTrait) {
                                        u.warlordTrait = {}
                                    }
                                    u.warlordTrait.effect = event.target.value
                                })}
                                value={unit.warlordTrait?.effect || ""}
                                placeholder="Effect"
                            />
                        </Col>
                    </Row>
                </Col>
            </Form.Group>
            <Row className="mb-2">
                <Col>
                    <Form.Label>Crusade Points</Form.Label>
                </Col>
                <Col>
                    {crusadePoints}
                </Col>
            </Row>
            <Row className="mb-2">
                <Col>
                    <Button block size="lg" variant="outline-primary" onClick={props.goBack} type="button">
                        Back
                    </Button>
                </Col>
                <Col>
                    <Button block size="lg" variant="primary" onClick={save} type="submit">
                        Save
                    </Button>
                </Col>
            </Row>
        </Form>
    )
}

export default EditUnit