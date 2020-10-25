import React, { useState } from "react";
import { ICrusadeArmy } from "../Constants";
import ReportSummary from "./ReportSummary";
import { Form, Row, Col } from "react-bootstrap";
import FormButtons from "../CommonFields/FormButtons";
import { ThemeContext } from "../App";
import ReadOnlyRow from "../CommonFields/ReadOnlyRow";
import { CalculateCrusadePoints } from "../Helpers/CrusadeUnitHelper";
import FormButton from "../CommonFields/FormButton";

interface IReportProps {
    crusadeArmy: ICrusadeArmy;
    goBack: () => void;
    updateArmy: (crusadeArmy: ICrusadeArmy) => void;
}

function Report(props: IReportProps) {
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
        return (
            <ThemeContext.Consumer>
                {value =>
                    <Form.Group onClick={() => selectUnit(unit.id)} className="mb-1">
                        <Form.Check type="checkbox" className="custom-control" color={value}>
                            <Form.Check.Input className="custom-control-input mr-1" color={value} checked={selectedUnitIds.includes(unit.id)} style={{ position: "relative" }} />
                            <Form.Check.Label className="custom-control-label" children={`${unit.name} ${unit.powerLevel}PL`} style={{ fontWeight: "unset" }} />
                        </Form.Check>
                    </Form.Group>
                }
            </ThemeContext.Consumer>
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
            <Row className="my-2 mx-1 header">
                <h2>
                    Select Battle Roster
                </h2>
            </Row>
            <ReadOnlyRow
                firstColumn="Selected Power Level"
                secondColumn={selectedPowerLevel}
            />
            <ReadOnlyRow
                firstColumn="Selected Crusade Points"
                secondColumn={selectedCrusadePoints}
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