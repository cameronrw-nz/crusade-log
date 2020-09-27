import React, { useState, useEffect } from "react";
import Report from "./Report/Report";
import { ICrusadeArmy, ICrusadeUnit, BattleHonourRank } from "./Constants";
import UnitDisplay from "./UnitDisplay";
import EditIcon from "./Resources/Icons/EditIcon.svg";
import EditArmy from "./EditArmy";


interface ICrusadeArmyRoster {
    crusadeArmy: ICrusadeArmy;
    goBack: () => void;
    updateArmy: (crusadeArmy: ICrusadeArmy) => void;
}

function CrusadeArmyRoster(props: ICrusadeArmyRoster) {
    const [edittingUnit, setEdittingUnit] = useState<ICrusadeUnit>()
    const [isEditting, setIsEditting] = useState<boolean>()
    const [isReporting, setIsReporting] = useState<boolean>()
    const [selectedUnitId, setSelectedUnitId] = useState<number>()
    const [unitsDisplay, setUnitsDisplay] = useState<JSX.Element[]>()

    useEffect(() => {
        const display = props.crusadeArmy.units.map(unit => {
            const highestRank = unit.battleHonours[unit.battleHonours.length - 1]?.rank ?? BattleHonourRank.BattleReady;
            const isSelected = unit.id === selectedUnitId;
            const crusadePoints = unit.battleHonours && unit.battleHonours.length > 0 ?
                unit.battleHonours
                    ?.map(bh => bh.crusadePoints)
                    ?.reduce((total, newvalue) => {
                        return (total ?? 0) + newvalue;
                    })
                : 0;

            return (
                <tr
                    className={`read-only-display-item${isSelected ? " selected" : ""}`}
                    onClick={() => setEdittingUnit(unit)}
                >
                    <td>
                        {unit.name}
                    </td>
                    <td style={{ whiteSpace: "nowrap" }}>
                        {highestRank}
                    </td>
                    <td>
                        {crusadePoints}
                    </td>
                </tr>
            )
        })

        setUnitsDisplay(display);
    }, [selectedUnitId, props.crusadeArmy, edittingUnit, isReporting])

    function addUnit() {
        const newUnit: ICrusadeUnit = {
            id: props.crusadeArmy.units.length,
            agendaXp: 0,
            battleHonours: [],
            battleParticipation: 0,
            crusadePoints: 0,
            kills: 0,
            markedForGreatness: 0,
            name: "",
            notes: "",
            outOfAction: [],
            powerLevel: 0
        }

        setEdittingUnit(newUnit);
    }

    function saveUnit(unit: ICrusadeUnit) {
        const crusadeArmy = { ...props.crusadeArmy }
        var existingIndex = crusadeArmy.units.findIndex(u => u.id === unit.id);
        if (existingIndex >= 0) {
            crusadeArmy.units.splice(existingIndex, 1, unit);
        }
        else {
            crusadeArmy.units.push(unit);
        }

        props.updateArmy(crusadeArmy)
        setEdittingUnit(unit);
    }

    function saveArmy(army: ICrusadeArmy) {
        props.updateArmy(army);
        setIsReporting(false);
        setIsEditting(false);
    }

    let crusadePoints = 0;
    let powerLevel = 0;
    props.crusadeArmy.units.forEach(unit => {
        unit.battleHonours.forEach(bh => {
            crusadePoints += bh.crusadePoints
        })
        powerLevel += unit.powerLevel;
    });

    if (isEditting) {
        return (
            <EditArmy
                goBack={() => setIsEditting(false)}
                crusadeArmy={props.crusadeArmy}
                saveArmy={saveArmy}
            />
        )
    }
    else if (isReporting) {
        return (
            <Report
                crusadeArmy={props.crusadeArmy}
                goBack={() => setIsReporting(false)}
                updateArmy={saveArmy}
            />
        )
    }
    else if (edittingUnit) {
        return (
            <UnitDisplay
                goBack={() => setEdittingUnit(undefined)}
                saveUnit={saveUnit}
                unit={edittingUnit}
            />
        )
    }

    let unitsTableDisplay = null;
    if (unitsDisplay?.length !== 0) {
        unitsTableDisplay = (
            <table className="army-roster-units">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Rank</th>
                        <th>CP</th>
                    </tr>
                </thead>
                {unitsDisplay}
            </table>
        )
    }

    return (
        <>
            <div className="header">
                <h1>
                    {props.crusadeArmy.name}
                    <img
                        className="icon"
                        src={EditIcon}
                        alt="Edit Links"
                        onClick={() => setIsEditting(true)}
                    />
                </h1>
                <div>
                    <div className="heading-sub-header"><b>{powerLevel + " "}</b>PL</div>
                    <div className="heading-sub-header"><b>{crusadePoints + " "}</b>CP</div>
                </div>
            </div>
            <div className="army-roster-content">
                {unitsTableDisplay}
            </div>
            <div className="button-container">
                <button onClick={props.goBack}>
                    Back
                </button>
                <button onClick={addUnit}>
                    Add
                </button>
                <button className="primary" onClick={() => setIsReporting(true)}>
                    Log
                </button>
            </div>
        </>
    )
}

export default CrusadeArmyRoster;