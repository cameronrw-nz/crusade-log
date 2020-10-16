import React, { useState } from "react";
import { ICrusadeArmy } from "../Constants";
import ReportSummary from "./ReportSummary";

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

    const display = props.crusadeArmy.units.map((unit, key) => {
        return (
            <div className="read-only-display-item" onClick={() => selectUnit(unit.id)}>
                <input
                    type="checkbox"
                    checked={selectedUnitIds.includes(key)}
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
        if (selectedUnitIds.includes(index)) {
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
            <h1>
                Select Battle Roster
            </h1>
            <p>
                Selected Power Level:{" " + selectedPowerLevel}
            </p>
            <div className="report-units expand">
                {display}
            </div>
            <div className="button-container">
                <button onClick={props.goBack}>
                    Back
                </button>
                <button className="primary" onClick={Continue}>
                    Continue
                </button>
            </div>
        </>
    )
}

export default Report;