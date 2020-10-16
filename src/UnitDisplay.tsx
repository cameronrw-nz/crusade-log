import React, { useState } from "react";
import { ICrusadeUnit } from "./Constants";
import EditUnit from "./EditUnit";
import { CalculateCrusadePoints } from "./Helpers/CrusadeUnitHelper";
import Header from "./CommonFields/Header";
import UnitSummaryRows from "./CommonFields/UnitSummary";

interface IUnitDisplayProps {
    deleteUnit: (unit: ICrusadeUnit) => void;
    goBack: () => void;
    saveUnit: (unit: ICrusadeUnit) => void;
    unit: ICrusadeUnit;
}

function UnitDisplay(props: IUnitDisplayProps) {
    const [isEdittingUnit, setIsEdittingUnit] = useState<boolean>(false);

    function completeEdit(unit: ICrusadeUnit) {
        props.saveUnit(unit)
        setIsEdittingUnit(false)
    }

    if (isEdittingUnit) {
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
                onEdit={() => setIsEdittingUnit(true)}
            />
            <div className="expand">
                <table className="edittable-table">
                    <tbody>
                        <UnitSummaryRows unit={props.unit} />
                    </tbody>
                </table>
            </div>
            <div className="button-container">
                <button onClick={props.goBack} type="button">
                    Back
                </button>
            </div>
        </>
    )
}

export default UnitDisplay