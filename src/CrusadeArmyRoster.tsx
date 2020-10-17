import React, { useState, useEffect } from "react";
import Report from "./Report/Report";
import { ICrusadeArmy, ICrusadeUnit, BattleHonourRank } from "./Constants";
import UnitDisplay from "./UnitDisplay";
import EditArmy from "./EditArmy";
import { CalculateCrusadePoints } from "./Helpers/CrusadeUnitHelper";
import Header from "./CommonFields/Header";
import { Button, ButtonGroup, Row, Col } from "react-bootstrap";
import { Table } from "react-bootstrap";
import { ThemeContext } from "./App";
import FormButtons from "./CommonFields/FormButtons";
import NameEffectsCard from "./CommonFields/UnitSummaryCard";


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
                        {crusadePoints}
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

    let unitsTableDisplay = null;
    if (unitsDisplay?.length !== 0) {
        unitsTableDisplay = (
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Rank</th>
                        <th>CP</th>
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
                crusadePoints={crusadePoints}
                headerText={props.crusadeArmy.name}
                powerLevel={powerLevel}
                onEdit={() => setIsEditting(true)}
            />
            {detachmentTraitCard}
            <Row>
                <Col>
                    {unitsTableDisplay}
                </Col>
            </Row>
            <FormButtons
                primaryButtonName="Log"
                primaryButtonOnClick={() => setIsReporting(true)}
                secondaryButtonName="Add"
                secondaryButtonOnClick={addUnit}
                tertiaryButtonName="Back"
                tertiaryButtonOnClick={props.goBack}
            />
        </>
    )
}

export default CrusadeArmyRoster;