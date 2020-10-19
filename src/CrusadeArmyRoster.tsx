import React, { useState, useEffect } from "react";
import Report from "./Report/Report";
import { ICrusadeArmy, ICrusadeUnit, BattleHonourRank } from "./Constants";
import UnitDisplay from "./UnitDisplay";
import EditArmy from "./EditArmy";
import { CalculateCrusadePoints } from "./Helpers/CrusadeUnitHelper";
import Header from "./CommonFields/Header";
import { Row, Col, Form } from "react-bootstrap";
import { Table } from "react-bootstrap";
import FormButtons from "./CommonFields/FormButtons";
import NameEffectsCard from "./CommonFields/UnitSummaryCard";
import FormButton from "./CommonFields/FormButton";
import RequisitionPointSpending from "./RequisitionPointSpending";
import ReadOnlyRow from "./CommonFields/ReadOnlyRow";

interface ICrusadeArmyRoster {
    crusadeArmy: ICrusadeArmy;
    deleteArmy: (crusadeArmy: ICrusadeArmy) => void;
    goBack: () => void;
    updateArmy: (crusadeArmy: ICrusadeArmy) => void;
}

function CrusadeArmyRoster(props: ICrusadeArmyRoster) {
    const [edittingUnit, setEdittingUnit] = useState<ICrusadeUnit>()
    const [isEditting, setIsEditting] = useState<boolean>()
    const [isReporting, setIsReporting] = useState<boolean>()
    const [isSpendingRequisition, setIsSpendingRequisition] = useState<boolean>()
    const [unitsDisplay, setUnitsDisplay] = useState<JSX.Element[]>()

    useEffect(() => {
        const display = props.crusadeArmy.units.map(unit => {
            const highestRank = unit.battleHonours[unit.battleHonours.length - 1]?.rank ?? BattleHonourRank.BattleReady;
            const crusadePoints = CalculateCrusadePoints(unit)

            return (
                <tr
                    key={unit.id}
                    className="read-only-display-item"
                    onClick={() => setEdittingUnit(unit)}
                >
                    <td>
                        {unit.name}
                    </td>
                    <td style={{ whiteSpace: "nowrap" }}>
                        {highestRank}
                    </td>
                    <td>
                        {unit.powerLevel}
                    </td>
                </tr>
            )
        })

        setUnitsDisplay(display);
    }, [props.crusadeArmy, edittingUnit, isReporting])

    function addUnit() {
        let highestId = 0
        props.crusadeArmy.units.forEach(unit => {
            if (unit.id > highestId) {
                highestId = unit.id
            }
        })
        const newUnit: ICrusadeUnit = {
            id: highestId + 1,
            agendaXp: 0,
            battleHonours: [],
            battleParticipation: 0,
            crusadePoints: 0,
            kills: 0,
            markedForGreatness: 0,
            name: "",
            notes: "",
            outOfAction: [],
            powerLevel: 0
        }

        setEdittingUnit(newUnit);
    }

    function saveUnit(unit: ICrusadeUnit) {
        const crusadeArmy = { ...props.crusadeArmy }
        var existingIndex = crusadeArmy.units.findIndex(u => u.id === unit.id);
        if (existingIndex >= 0) {
            crusadeArmy.units.splice(existingIndex, 1, unit);
        }
        else {
            crusadeArmy.units.push(unit);
        }

        props.updateArmy(crusadeArmy)
        setEdittingUnit(unit);
    }

    function deleteUnit(unit: ICrusadeUnit): void {
        const crusadeArmy = { ...props.crusadeArmy }
        var existingIndex = crusadeArmy.units.findIndex(u => u.id === unit.id);
        if (existingIndex >= 0) {
            crusadeArmy.units.splice(existingIndex, 1);
        }

        props.updateArmy(crusadeArmy)
        setEdittingUnit(undefined);
    }

    function saveArmy(army: ICrusadeArmy) {
        props.updateArmy(army);
        setIsReporting(false);
        setIsEditting(false);
    }

    let crusadePoints = 0;
    let powerLevel = 0;
    props.crusadeArmy.units.forEach(unit => {
        crusadePoints += CalculateCrusadePoints(unit);
        powerLevel += unit.powerLevel;
    });

    if (isEditting) {
        return (
            <EditArmy
                crusadeArmy={props.crusadeArmy}
                goBack={() => setIsEditting(false)}
                handleDeleteArmy={() => props.deleteArmy(props.crusadeArmy)}
                saveArmy={saveArmy}
            />
        )
    }
    else if (isReporting || props.crusadeArmy.battleRosterUnitIds) {
        return (
            <Report
                crusadeArmy={props.crusadeArmy}
                goBack={() => setIsReporting(false)}
                updateArmy={saveArmy}
            />
        )
    }
    else if (edittingUnit) {
        return (
            <UnitDisplay
                deleteUnit={deleteUnit}
                goBack={() => setEdittingUnit(undefined)}
                saveUnit={saveUnit}
                unit={edittingUnit}
            />
        )
    }
    else if (isSpendingRequisition) {
        return (
            <RequisitionPointSpending
                goBack={() => setIsSpendingRequisition(false)}
                crusadeArmy={props.crusadeArmy}
                updateArmy={saveArmy}
            />
        )
    }

    let unitsTableDisplay = null;
    if (unitsDisplay?.length !== 0) {
        unitsTableDisplay = (
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Rank</th>
                        <th>PL</th>
                    </tr>
                </thead>
                <tbody>
                    {unitsDisplay}
                </tbody>
            </Table>
        )
    }

    let detachmentTraitCard = undefined
    if (props.crusadeArmy.detachmentTrait) {
        detachmentTraitCard = (
            <NameEffectsCard
                header="Detachment Trait"
                nameEffects={[props.crusadeArmy.detachmentTrait]}
            />
        )
    }
    return (
        <>
            <Header
                subHeaderInfo={[
                    { name: "PL", value: powerLevel },
                    { name: "CP", value: crusadePoints },
                ]}
                headerText={props.crusadeArmy.name}
                onEdit={() => setIsEditting(true)}
            />
            <Row className="mb-2">
                <Col>
                    <Form.Label>
                        Requisition Points:
                    </Form.Label>
                    {" " + props.crusadeArmy.requisitionPoints}
                </Col>
                <Col>
                    <FormButton
                        name="Spend"
                        onClick={() => setIsSpendingRequisition(true)}
                    />
                </Col>
            </Row>
            {detachmentTraitCard}
            <Row className="mb-2">
                <Col>
                    <Form.Label>
                        <h3>
                            Units
                        </h3>
                    </Form.Label>
                </Col>
                <Col>
                    <FormButton
                        name="Add"
                        onClick={addUnit}
                    />
                </Col>
            </Row>
            <ReadOnlyRow
                firstColumn="Power Level"
                secondColumn={powerLevel + "/" + props.crusadeArmy.maximumPowerLevel}
            />
            <Row className="mb-2">
                <Col>
                    {unitsTableDisplay}
                </Col>
            </Row>
            <FormButtons
                primaryButtonName="Battle!"
                primaryButtonOnClick={() => setIsReporting(true)}
                secondaryButtonName="Back"
                secondaryButtonOnClick={props.goBack}
            />
        </>
    )
}

export default CrusadeArmyRoster;