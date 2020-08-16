import React, { useState } from "react";
import ReportUnits from "./ReportUnits";
import { ICrusadeArmy } from "./Constants";

interface IReportProps {
    crusadeArmy: ICrusadeArmy;
    goBack: () => void;
    updateArmy: (crusadeArmy: ICrusadeArmy) => void;
}

function Report(props: IReportProps) {
    const [selectedUnitIndexes, setSelectedUnitIndexes] = useState<number[]>([])
    const [isContinuing, setIsContinuing] = useState<boolean>();

    function selectUnit(key: number) {
        let newKeys = [];
        if (selectedUnitIndexes.includes(key)) {
            newKeys = selectedUnitIndexes.filter(i => i !== key);
        }
        else {
            newKeys = [...selectedUnitIndexes, key]
        }
        setSelectedUnitIndexes(newKeys);
    }

    const display = props.crusadeArmy.units.map((unit, key) => {
        return (
            <div className="army-roster-units-item" onClick={() => selectUnit(key)}>
                <input
                    type="checkbox"
                    onChange={() => { }}
                    checked={selectedUnitIndexes.includes(key)}
                />
                <span>
                    {unit.name}
                </span>
                <span>
                    {unit.powerLevel + " "}PL
                </span>
            </div >
        )
    })

    let selectedPowerLevel = 0;

    props.crusadeArmy.units.map((unit, index) => {
        if (selectedUnitIndexes.includes(index)) {
            selectedPowerLevel += unit.powerLevel
        }
    })

    if (isContinuing) {
        return (
            <ReportUnits
                crusadeArmy={props.crusadeArmy}
                selectedUnitIndexes={selectedUnitIndexes}
                goBack={() => setIsContinuing(false)}
                updateArmy={props.updateArmy}
            />
        )
    }

    return (
        <>
            <h1>
                Select Battle Roster
            </h1>
            <p>
                Selected Power Level:{" " + selectedPowerLevel}
            </p>
            <div className="report-units expand">
                {display}
            </div>
            <div>
                <button onClick={props.goBack}>
                    Back
                </button>
                <button onClick={() => setIsContinuing(true)}>
                    Continue
                </button>
            </div>
        </>
    )
}

export default Report;