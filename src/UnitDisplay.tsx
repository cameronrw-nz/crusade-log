import React, { useState, useMemo } from "react";
import { ICrusadeUnit } from "./Constants";
import EditUnit from "./EditUnit";
import { CalculateCrusadePoints } from "./Helpers/CrusadeUnitHelper";
import Header from "./CommonFields/Header";
import UnitSummaryRows from "./CommonFields/UnitSummary";
import { Button, Row, Col } from "react-bootstrap";

interface IUnitDisplayProps {
    deleteUnit: (unit: ICrusadeUnit) => void;
    goBack: () => void;
    saveUnit: (unit: ICrusadeUnit) => void;
    unit: ICrusadeUnit;
}

function UnitDisplay(props: IUnitDisplayProps) {
    const [isEdittingUnit, setIsEdittingUnit] = useState<boolean>(false);
    const isNewUnit = useMemo<boolean>(() => { return props.unit.name === "" }, [])

    function completeEdit(unit: ICrusadeUnit) {
        props.saveUnit(unit)
        setIsEdittingUnit(false)
        if (isNewUnit) {
            props.goBack();
        }
    }

    if (isEdittingUnit || isNewUnit) {
        return (
            <EditUnit
                deleteUnit={props.deleteUnit}
                goBack={() => setIsEdittingUnit(false)}
                unit={props.unit}
                saveUnit={completeEdit}
            />
        )
    }

    let crusadePoints = CalculateCrusadePoints(props.unit);

    return (
        <>
            <Header
                crusadePoints={crusadePoints}
                headerText={props.unit.name}
                powerLevel={props.unit.powerLevel}
            />
            <UnitSummaryRows unit={props.unit} />
            <Row>
                <Col>
                    <Button block size="lg" variant="outline-primary" onClick={props.goBack} type="button">
                        Back
                    </Button>
                </Col>
                <Col>
                    <Button block size="lg" variant="primary" onClick={() => setIsEdittingUnit(true)} type="button">
                        Edit
                    </Button>
                </Col>
            </Row>
        </>
    )
}

export default UnitDisplay