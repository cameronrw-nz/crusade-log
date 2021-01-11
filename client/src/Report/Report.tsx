import React, { useState, useContext } from "react";
import { ICrusadeArmy } from "../Constants";
import ReportSummary from "./ReportSummary";
import { Form, Row, Col } from "react-bootstrap";
import FormButtons from "../CommonFields/FormButtons";
import { ThemeContext } from "../App";
import { CalculateCrusadePoints, GetName } from "../Helpers/CrusadeUnitHelper";
import FormButton from "../CommonFields/FormButton";
import { GetClassName } from "../Helpers/ClassNameHelper";
import Header from "../CommonFields/Header";

interface IReportProps {
    crusadeArmy: ICrusadeArmy;
    goBack: () => void;
    updateArmy: (crusadeArmy: ICrusadeArmy) => void;
}

function Report(props: IReportProps) {
    const context = useContext(ThemeContext);
    const [selectedUnitIds, setSelectedUnitIds] = useState<number[]>([])

    function Continue() {
        const crusadeArmy = { ...props.crusadeArmy }
        crusadeArmy.battleRosterUnitIds = selectedUnitIds;
        props.updateArmy(crusadeArmy)
    }

    function RemoveSelection() {
        const crusadeArmy = { ...props.crusadeArmy }
        crusadeArmy.battleRosterUnitIds = undefined;
        props.updateArmy(crusadeArmy)
    }

    function selectUnit(unitId: number) {
        let newKeys = [];
        if (selectedUnitIds.includes(unitId)) {
            newKeys = selectedUnitIds.filter(i => i !== unitId);
        }
        else {
            newKeys = [...selectedUnitIds, unitId]
        }
        setSelectedUnitIds(newKeys);
    }

    function selectAll() {
        let newKeys = props.crusadeArmy.units.map(u => u.id);
        setSelectedUnitIds(newKeys)
    }

    const display = props.crusadeArmy.units.map((unit) => {
        const crusadePoints = CalculateCrusadePoints(unit)

        return (
            <Form.Group onClick={() => selectUnit(unit.id)} className="mb-1">
                <Form.Check type="checkbox" className={`custom-control ${GetClassName(props.crusadeArmy.traitColor)}`} color={context.color}>
                    <Form.Check.Input
                        className="custom-control-input mr-1"
                        color={context.color}
                        checked={selectedUnitIds.includes(unit.id)}
                        style={{ position: "relative" }}
                    />
                    <Form.Check.Label
                        className="custom-control-label"
                        children={`${GetName(unit, context.isUsingAlternateName)} ${unit.powerLevel}PL  ${crusadePoints}CP`}
                        style={{ fontWeight: "unset" }}
                    />
                </Form.Check>
            </Form.Group>
        )
    })

    let selectedPowerLevel = 0;
    let selectedCrusadePoints = 0;
    props.crusadeArmy.units.forEach(unit => {
        if (selectedUnitIds.includes(unit.id)) {
            selectedPowerLevel += unit.powerLevel
            selectedCrusadePoints += CalculateCrusadePoints(unit)
        }
    });

    if (props.crusadeArmy.battleRosterUnitIds) {
        return (
            <ReportSummary
                crusadeArmy={props.crusadeArmy}
                goBack={RemoveSelection}
                updateArmy={props.updateArmy}
            />
        )
    }

    return (
        <>
            <Header
                subHeaderInfo={[
                    { name: "PL", value: selectedPowerLevel },
                    { name: "CP", value: selectedCrusadePoints },
                ]}
                headerText="Battle Roster"
            />
            <Form>
                <Row className="mb-2">
                    <Col>
                        <FormButton
                            small
                            name="Select All"
                            onClick={selectAll}
                        />
                    </Col>
                </Row>
                {display}
            </Form>
            <FormButtons
                primaryButtonName="Continue"
                primaryButtonOnClick={Continue}
                secondaryButtonName="Back"
                secondaryButtonOnClick={props.goBack}
            />
        </>
    )
}

export default Report;