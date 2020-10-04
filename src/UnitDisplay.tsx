import React, { useState } from "react";
import { ICrusadeUnit } from "./Constants";
import EditUnit from "./EditUnit";
import { CalculateTotalExperience, CalculateCrusadePoints } from "./Helpers/CrusadeUnitHelper";

interface IUnitDisplayProps {
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
                goBack={() => setIsEdittingUnit(false)}
                unit={props.unit}
                saveUnit={completeEdit}
            />
        )
    }

    const totalExperience = CalculateTotalExperience(props.unit);

    let crusadePoints = CalculateCrusadePoints(props.unit);
    const battleHonourDisplay = props.unit.battleHonours.map(battleHonour => {
        return (
            <tr>
                <td>{battleHonour.rank}</td>
                <td>{battleHonour.effect}</td>
            </tr>
        )
    });

    const outOfActionDisplay: JSX.Element[] = []
    if (props.unit.outOfAction && props.unit.outOfAction.length > 0) {
        outOfActionDisplay.push(<tr><td>Out Of Action</td><td /></tr>)
        props.unit.outOfAction.forEach(outOfAction => {
            if (!outOfAction.isActive) {
                return;
            }
            const display = outOfAction.effect ? "Battle Scar" : "Experience Loss";
            outOfActionDisplay.push(
                <tr>
                    <td>{display}</td>
                    <td>{outOfAction.effect || "-" + outOfAction.xp}</td>
                </tr>
            )
        })
    }

    return (
        <>
            <div className="header">
                <h1>
                    {props.unit.name}
                </h1>
                <div>
                    <div className="heading-sub-header"><b>{props.unit.powerLevel + " "}</b>PL</div>
                    <div className="heading-sub-header"><b>{crusadePoints + " "}</b>CP</div>
                </div>
            </div>
            <div className="expand">
                <table className="edittable-table">
                    <tr>
                        <td>Battle Participation:</td>
                        <td>{props.unit.battleParticipation}</td>
                    </tr>
                    <tr>
                        <td>Marked For Greatness:</td>
                        <td>{props.unit.markedForGreatness}</td>
                    </tr>
                    <tr>
                        <td>Agenda:</td>
                        <td>{props.unit.agendaXp}</td>
                    </tr>
                    <tr>
                        <td>Kills:</td>
                        <td>{props.unit.kills}</td>
                    </tr>
                    <tr>
                        <td>
                            Total Experience:
                        </td>
                        <td>
                            {totalExperience}
                        </td>
                    </tr>
                    {battleHonourDisplay}
                    {outOfActionDisplay}
                </table>
            </div>
            <div className="button-container">
                <button onClick={props.goBack} type="button">
                    Back
                </button>
                <button className="primary" onClick={() => setIsEdittingUnit(true)} type="submit">
                    Edit
                </button>
            </div>
        </>
    )
}

export default UnitDisplay