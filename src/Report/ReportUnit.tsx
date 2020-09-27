import React, { useState } from "react";
import { ICrusadeUnit, BattleHonourRank } from "../Constants";
import { CalculateTotalExperience } from "../Helpers/CrusadeUnitHelper";
import EditOutOfActions from "../CommonFields/EditOutOfActions";

interface IReportUnitProps {
    unit: ICrusadeUnit;
    updateUnit: (u: ICrusadeUnit) => void;
}

function ReportUnit(props: IReportUnitProps) {
    const totalExperience = CalculateTotalExperience(props.unit) + 1;
    const [initialExperience] = useState(totalExperience - 1);

    let crusadePoints = 0;
    let battleHonours = props.unit.battleHonours.map(battleHonour => {
        crusadePoints += battleHonour.crusadePoints;

        let effectField: React.ReactNode = battleHonour.effect;
        if (battleHonour.rank === BattleHonourRank.Blooded && initialExperience < 6
            || battleHonour.rank === BattleHonourRank.BattleHardened && initialExperience < 16
            || battleHonour.rank === BattleHonourRank.Heroic && initialExperience < 31
            || battleHonour.rank === BattleHonourRank.Legendary && initialExperience < 51) {
            effectField = (
                <input
                    type="text"
                    value={battleHonour.effect}
                    onChange={event => {
                        var u = { ...props.unit };
                        let bh = u.battleHonours.find(b => b.rank === battleHonour.rank)
                        bh!.effect = event.target.value;
                        props.updateUnit(u)
                    }}
                />
            )
        }

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
        <div>
            <table className="edittable-table">
                <tbody>
                    <tr>
                        <td>
                            <b>{props.unit.name}</b>
                        </td>
                        <td>Crusade Points: {" " + crusadePoints}</td>
                    </tr>
                    <tr>
                        <td>Battle Participation:</td>
                        <td>{`${props.unit.battleParticipation} + 1`}</td>
                    </tr>
                    <tr>
                        <td>Marked For Greatness:</td>
                        <td>
                            <input
                                type="number"
                                onChange={event => {
                                    var u = { ...props.unit };
                                    u.markedForGreatness = Number.parseInt(event.target.value)
                                    props.updateUnit(u)
                                }}
                                value={props.unit.markedForGreatness}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>Agenda:</td>
                        <td>
                            <input
                                type="number"
                                onChange={event => {
                                    var u = { ...props.unit };
                                    u.agendaXp = Number.parseInt(event.target.value)
                                    props.updateUnit(u)
                                }}
                                value={props.unit.agendaXp}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>Kills:</td>
                        <td>
                            <input
                                type="number"
                                onChange={event => {
                                    var u = { ...props.unit };
                                    u.kills = Number.parseInt(event.target.value)
                                    props.updateUnit(u)

                                }}
                                value={props.unit.kills}
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
                        unit={props.unit}
                        editUnit={(edit) => {
                            const u: ICrusadeUnit = {
                                ...props.unit,
                                outOfAction: [...(props.unit.outOfAction || [])]
                            };
                            edit(u)
                            props.updateUnit(u);
                        }
                        }
                    />
                </tbody>
            </table>
        </div>
    )
}

export default ReportUnit;