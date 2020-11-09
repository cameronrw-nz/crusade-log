import React, { useState } from "react";
import Report from "./Report/Report";
import { ICrusadeArmy, ICrusadeUnit } from "./Constants";
import UnitDisplay from "./UnitDisplay";
import EditArmy from "./EditArmy";
import { CalculateCrusadePoints, GetArmyName } from "./Helpers/CrusadeUnitHelper";
import Header from "./CommonFields/Header";
import { Row, Col, Form } from "react-bootstrap";
import FormButtons from "./CommonFields/FormButtons";
import NameEffectsCard from "./CommonFields/UnitSummaryCard";
import FormButton from "./CommonFields/FormButton";
import RequisitionPointSpending from "./RequisitionPointSpending";
import ReadOnlyRow from "./CommonFields/ReadOnlyRow";
import DraggableTable from "./CommonFields/DraggableTable";
import { Column } from "react-table";

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
            battleScars: [],
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

    function reOrderUnits(id: number, targetIndex: number): void {
        const units = [...props.crusadeArmy.units]
        const originalIndex = units.findIndex(u => u.id === id);
        const unit = units.splice(originalIndex, 1)
        units.splice(targetIndex, 0, unit[0])

        const army = { ...props.crusadeArmy };
        army.units = units;

        props.updateArmy(army)
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
    if (props.crusadeArmy.units.length !== 0) {
        const columns: Column<ICrusadeUnit>[] = [
            {
                Header: 'Name',
                accessor: 'name',
            },
            {
                Header: 'CP',
                accessor: 'crusadePoints'
            },
            {
                Header: 'PL',
                accessor: 'powerLevel'
            }
        ];
        unitsTableDisplay = (
            <DraggableTable
                columns={columns}
                crusadeArmy={props.crusadeArmy}
                updateRowPosition={reOrderUnits}
                onRowClick={(id: number): void => {
                    const unit = props.crusadeArmy.units.find(u => u.id === id);
                    if (unit) {
                        setEdittingUnit(unit)
                    }
                }}
            />
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
                headerText={GetArmyName(props.crusadeArmy)}
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
                        small
                    />
                </Col>
            </Row>
            {detachmentTraitCard}
            <Row className="mb-2">
                <Col>
                    <Form.Label>
                        <h3 >
                            Units
                        </h3>
                    </Form.Label>
                </Col>
                <Col>
                    <FormButton
                        name="Add"
                        onClick={addUnit}
                        small
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