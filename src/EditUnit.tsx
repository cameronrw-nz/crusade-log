import React, { useState } from "react";
import { ICrusadeUnit, BattleHonourRank } from "./Constants";
import { CalculateTotalExperience } from "./Helpers/CrusadeUnitHelper";
import EditOutOfActions from "./CommonFields/EditOutOfActions";
import DeleteIcon from "./Resources/Icons/DeleteIcon.svg";

interface IEditUnitProps {
    deleteUnit: (unit: ICrusadeUnit) => void;
    goBack: () => void;
    saveUnit: (unit: ICrusadeUnit) => void;
    unit: ICrusadeUnit;
}

function EditUnit(props: IEditUnitProps) {
    const [isNewUnit] = useState<boolean>(props.unit.name === "")
    const [unit, setUnit] = useState<ICrusadeUnit>(props.unit);

    function save(e: React.FormEvent | React.MouseEvent) {
        e.preventDefault()
        e.stopPropagation()
        props.saveUnit(unit)
    }

    function editUnit(func: (u: ICrusadeUnit) => void) {
        const newUnit: ICrusadeUnit = { ...unit, battleHonours: [...unit.battleHonours], outOfAction: [...(unit.outOfAction || [])] };
        func(newUnit)
        const newTotalExperience = CalculateTotalExperience(newUnit);

        if (newUnit.battleHonours.findIndex(bh => bh.rank === BattleHonourRank.Blooded) < 0 && newTotalExperience >= 6) {
            newUnit.battleHonours.push({ crusadePoints: newUnit.powerLevel >= 11 ? 2 : 1, effect: "", rank: BattleHonourRank.Blooded })
        }
        else if (newUnit.battleHonours.findIndex(bh => bh.rank === BattleHonourRank.BattleHardened) < 0 && newTotalExperience >= 16) {
            newUnit.battleHonours.push({ crusadePoints: newUnit.powerLevel >= 11 ? 2 : 1, effect: "", rank: BattleHonourRank.BattleHardened })
        }
        else if (newUnit.battleHonours.findIndex(bh => bh.rank === BattleHonourRank.Heroic) < 0 && newTotalExperience >= 31) {
            newUnit.battleHonours.push({ crusadePoints: newUnit.powerLevel >= 11 ? 2 : 1, effect: "", rank: BattleHonourRank.Heroic })
        }
        else if (newUnit.battleHonours.findIndex(bh => bh.rank === BattleHonourRank.Legendary) < 0 && newTotalExperience >= 51) {
            newUnit.battleHonours.push({ crusadePoints: newUnit.powerLevel >= 11 ? 2 : 1, effect: "", rank: BattleHonourRank.Legendary })
        }

        setUnit(newUnit)
    }

    function handleDeleteUnit(): void {
        if (window.confirm("Are you sure you wish to delete this unit?")) {
            props.deleteUnit(props.unit);
        }
    }

    const totalExperience = CalculateTotalExperience(unit);

    let crusadePoints = 0;
    let battleHonours = unit.battleHonours.map(battleHonour => {
        crusadePoints += battleHonour.crusadePoints;

        let effectField: React.ReactNode = (
            <input
                type="text"
                value={battleHonour.effect}
                onChange={event => {
                    editUnit((u) => {
                        let bh = u.battleHonours.find(b => b.rank === battleHonour.rank)
                        bh!.effect = event.target.value;
                    })
                }}
            />
        )

        return (
            <tr>
                <td>
                    {battleHonour.rank}
                </td>
                <td>
                    {effectField}
                </td>
            </tr>
        )
    });

    return (
        <form onSubmit={save} id="edit-unit">
            <div className="header">
                <h1>
                    {(isNewUnit ? "Add Unit: " : "Edit Unit: ") + unit.name}
                    <img
                        className="icon"
                        src={DeleteIcon}
                        alt="Edit Links"
                        onClick={handleDeleteUnit}
                    />
                </h1>
            </div>
            <div className="expand">
                <table className="edittable-table">
                    <tr>
                        <td>Name:</td>
                        <td>
                            <input
                                onChange={e => editUnit((u) => u.name = e.target.value)}
                                type="textbox"
                                value={unit.name}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>Power Level</td>
                        <td>
                            <input
                                onChange={e => editUnit((u) => u.powerLevel = Number.parseInt(e.target.value))}
                                type="number"
                                value={unit.powerLevel}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>Crusade Points</td>
                        <td>{crusadePoints}</td>
                    </tr>
                    <tr>
                        <td>Battle Participation:</td>
                        <td>
                            <input
                                type="number"
                                onChange={event => editUnit((u) => u.battleParticipation = Number.parseInt(event.target.value))}
                                value={unit.battleParticipation}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>Marked For Greatness:</td>
                        <td>
                            <input
                                type="number"
                                onChange={event => editUnit((u) => u.markedForGreatness = Number.parseInt(event.target.value))}
                                value={unit.markedForGreatness}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>Agenda:</td>
                        <td>
                            <input
                                type="number"
                                onChange={event => editUnit((u) => u.agendaXp = Number.parseInt(event.target.value))}
                                value={unit.agendaXp}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>Kills:</td>
                        <td>
                            <input
                                type="number"
                                onChange={event => editUnit((u) => u.kills = Number.parseInt(event.target.value))}
                                value={unit.kills}
                            />
                        </td>
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
                    <EditOutOfActions
                        unit={unit}
                        editUnit={editUnit}
                    />
                </table>
            </div>
            <div className="button-container">
                <button onClick={props.goBack} type="button">
                    Back
                </button>
                <button className="primary" onClick={save} type="submit">
                    Save
                </button>
            </div>
        </form>
    )
}

export default EditUnit