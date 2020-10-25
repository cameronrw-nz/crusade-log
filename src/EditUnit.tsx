import React, { useState } from "react";
import { ICrusadeUnit, BattleHonourRank } from "./Constants";
import { CalculateTotalExperience } from "./Helpers/CrusadeUnitHelper";
import EditBattleScars from "./CommonFields/EditBattleScars";
import DeleteIcon from "./Resources/Icons/DeleteIcon.svg";
import { Form, Row, Col } from "react-bootstrap";
import FormInput from "./CommonFields/FormInput";
import FormButtons from "./CommonFields/FormButtons";
import ReadOnlyRow from "./CommonFields/ReadOnlyRow";
import FormNameEffectInputs from "./CommonFields/FormNameEffectInputs";
import FormButton from "./CommonFields/FormButton";

interface IEditUnitProps {
    deleteUnit: (unit: ICrusadeUnit) => void;
    goBack: () => void;
    saveUnit: (unit: ICrusadeUnit) => void;
    unit: ICrusadeUnit;
}

function EditUnit(props: IEditUnitProps) {
    const [isNewUnit] = useState<boolean>(props.unit.name === "")
    const [unit, setUnit] = useState<ICrusadeUnit>(props.unit);
    const [isShowingExperience, setIsShowingExperience] = useState<boolean>(false)

    function save(e: React.FormEvent | React.MouseEvent) {
        e.preventDefault()
        e.stopPropagation()
        props.saveUnit(unit)
    }

    function editUnit(func: (u: ICrusadeUnit) => void) {
        const newUnit: ICrusadeUnit = { ...unit, battleHonours: [...unit.battleHonours], battleScars: [...(unit.battleScars || [])] };
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
            <FormNameEffectInputs
                key={index}
                formName={battleHonour.rank}
                onNameChange={event => {
                    editUnit((u) => {
                        let bh = u.battleHonours.find(b => b.rank === battleHonour.rank)
                        if (!bh?.battleTrait) {
                            bh!.battleTrait = {}
                        }
                        bh!.battleTrait.name = event.target.value;
                    })
                }}
                onEffectChange={event => {
                    editUnit((u) => {
                        let bh = u.battleHonours.find(b => b.rank === battleHonour.rank)
                        if (!bh?.battleTrait) {
                            bh!.battleTrait = {}
                        }
                        bh!.battleTrait.effect = event.target.value;
                    })
                }}
                nameEffect={battleHonour.battleTrait}
            />
        )
    });

    let experienceFields = isShowingExperience && (
        <>
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
            <FormInput
                formName="Loss"
                inputType="number"
                onChange={e => editUnit((u) => u.experienceLoss = Number.parseInt(e.target.value))}
                value={unit.experienceLoss}
            />
        </>
    )

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
            <ReadOnlyRow
                label
                firstColumn="Total Experience"
                secondColumn={totalExperience}
                onClick={() => setIsShowingExperience(!isShowingExperience)}
            />
            {experienceFields}
            <Row className="mb-2">
                <Col>
                    <Form.Label>
                        Traits and Honours
                    </Form.Label>
                </Col>
                <Col>
                    <FormButton
                        small
                        name="Add"
                        onClick={() => {
                            editUnit((u) =>
                                u.battleHonours.push({
                                    rank: BattleHonourRank.Custom,
                                    battleTrait: {},
                                    crusadePoints: u.powerLevel >= 11 ? 2 : 1,
                                }))
                        }}
                    />
                </Col>
            </Row>
            {battleHonours}
            <EditBattleScars
                unit={unit}
                editUnit={editUnit}
            />
            {
                unit.warlordTrait &&
                <FormNameEffectInputs
                    formName="Warlord Trait"
                    onNameChange={event => editUnit((u) => {
                        if (!u.warlordTrait) {
                            u.warlordTrait = {}
                        }
                        u.warlordTrait.name = event.target.value
                    })}
                    onEffectChange={event => editUnit((u) => {
                        if (!u.warlordTrait) {
                            u.warlordTrait = {}
                        }
                        u.warlordTrait.effect = event.target.value
                    })}
                    nameEffect={unit.warlordTrait}
                />
            }
            <ReadOnlyRow
                label
                firstColumn="Crusade Points"
                secondColumn={crusadePoints}
            />
            <FormButtons
                primaryButtonName="Save"
                primaryButtonOnClick={save}
                secondaryButtonName="Back"
                secondaryButtonOnClick={props.goBack}
            />
        </Form>
    )
}

export default EditUnit