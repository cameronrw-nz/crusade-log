import React, { useState, useMemo } from "react";
import { ICrusadeUnit } from "./Constants";
import EditUnit from "./EditUnit";
import { CalculateCrusadePoints } from "./Helpers/CrusadeUnitHelper";
import Header from "./CommonFields/Header";
import UnitSummaryRows from "./CommonFields/UnitSummary";
import FormButtons from "./CommonFields/FormButtons";

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
                goBack={() => isNewUnit ? props.goBack() : setIsEdittingUnit(false)}
                unit={props.unit}
                saveUnit={completeEdit}
            />
        )
    }

    let crusadePoints = CalculateCrusadePoints(props.unit);

    return (
        <>
            <Header
                subHeaderInfo={[
                    { name: "PL", value: props.unit.powerLevel },
                    { name: "CP", value: crusadePoints },
                ]}
                headerText={props.unit.name}
            />
            <UnitSummaryRows unit={props.unit} />
            <FormButtons
                primaryButtonName="Edit"
                primaryButtonOnClick={() => setIsEdittingUnit(true)}
                secondaryButtonName="Back"
                secondaryButtonOnClick={props.goBack}
            />
        </>
    )
}

export default UnitDisplay