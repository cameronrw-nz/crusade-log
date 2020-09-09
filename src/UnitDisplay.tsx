import React, { useState } from "react";
import { ICrusadeUnit } from "./Constants";
import EditUnit from "./EditUnit";

interface IUnitDisplayProps {
    goBack: () => void;
    saveUnit: (unit: ICrusadeUnit) => void;
    unit: ICrusadeUnit;
}

function UnitDisplay(props: IUnitDisplayProps) {
    const [isEdittingUnit, setIsEdittingUnit] = useState<boolean>(false);

    const totalExperience = props.unit.battleParticipation
        + props.unit.markedForGreatness * 3
        + props.unit.agendaXp
        + Math.floor(props.unit.kills / 3);

    let crusadePoints = 0;
    let battleHonours = props.unit.battleHonours.map(battleHonour => {
        crusadePoints += battleHonour.crusadePoints;
        return (
            <tr>
                <td>{battleHonour.rank}</td>
                <td>{battleHonour.effect}</td>
            </tr>
        )
    });

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

    return (
        <>
            <h2>
                {props.unit.name}
            </h2>
            <div className="expand">
                <table className="report-unit-table">
                    <tr>
                        <td>Power Level</td>
                        <td>{props.unit.powerLevel}</td>
                    </tr>
                    <tr>
                        <td>Crusade Points</td>
                        <td>{crusadePoints}</td>
                    </tr>
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
                    {battleHonours}
                </table>
            </div>
            <div className="button-container">
                <button onClick={props.goBack} type="button">
                    Back
                </button>
                <button onClick={() => setIsEdittingUnit(true)} type="submit">
                    Edit
                </button>
            </div>
        </>
    )
}

export default UnitDisplay