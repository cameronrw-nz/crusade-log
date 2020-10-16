import React, { useState } from "react";
import { ICrusadeArmy } from "../Constants";
import ReportSummary from "./ReportSummary";
import { Form, Row, Col, Button } from "react-bootstrap";

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
            <Form.Group onClick={() => selectUnit(unit.id)}>
                <Form.Check type="checkbox">
                    <Form.Check.Input checked={selectedUnitIds.includes(unit.id)} className="mr-1" style={{ position: "relative" }} />
                    <Form.Check.Label children={`${unit.name} ${unit.powerLevel} PL`} style={{ fontWeight: "unset" }} />
                </Form.Check>
            </Form.Group>
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
            <Row className="mb-2">
                <Col>
                    <Button block size="lg" className="mr-2" variant="outline-primary" onClick={props.goBack}>
                        Back
                    </Button>
                </Col>
                <Col>
                    <Button block size="lg" variant="primary" onClick={Continue} type="submit">
                        Continue
                    </Button>
                </Col>
            </Row>
        </>
    )
}

export default Report;