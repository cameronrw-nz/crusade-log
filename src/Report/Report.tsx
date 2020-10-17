import React, { useState } from "react";
import { ICrusadeArmy } from "../Constants";
import ReportSummary from "./ReportSummary";
import { Form, Row, Col, Button } from "react-bootstrap";
import FormButtons from "../CommonFields/FormButtons";
import { ThemeContext } from "../App";

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

    const display = props.crusadeArmy.units.map((unit) => {
        return (
            <ThemeContext.Consumer>
                {value =>
                    <Form.Group onClick={() => selectUnit(unit.id)} className="mb-1">
                        <Form.Check type="checkbox" className="custom-control" color={value}>
                            <Form.Check.Input className="custom-control-input mr-1" color={value} checked={selectedUnitIds.includes(unit.id)} style={{ position: "relative" }} />
                            <Form.Check.Label className="custom-control-label" children={`${unit.name} ${unit.powerLevel} PL`} style={{ fontWeight: "unset" }} />
                        </Form.Check>
                    </Form.Group>
                }
            </ThemeContext.Consumer>
        )
    })

    let selectedPowerLevel = 0;

    props.crusadeArmy.units.map((unit, index) => {
        if (selectedUnitIds.includes(unit.id)) {
            selectedPowerLevel += unit.powerLevel
        }
    })

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
            <p>
                Selected Power Level:{" " + selectedPowerLevel}
            </p>
            <Form>
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