import React, { useState } from "react";
import ReportUnit from "./ReportUnit";
import { CRUSADE_ARMIES_STORAGE_KEY, ICrusadeArmy, ICrusadeUnit, BattleHonourRank } from "./Constants";

interface IReportUnitsProps {
    crusadeArmy: ICrusadeArmy;
    selectedUnitIndexes: number[];
    goBack: () => void;
    updateArmy: (crusadeArmy: ICrusadeArmy) => void;
}

function ReportUnits(props: IReportUnitsProps) {
    const [units, setUnits] = useState<ICrusadeUnit[]>(props.crusadeArmy.units);
    const [requisitionPoints, setRequisitionPoints] = useState<number>(1)

    const unitsDisplay = units.map((unit, index) => {
        function updateUnit(u: ICrusadeUnit, i: number) {
            const newUnits = [...units]
            const totalExperience = u.battleParticipation + 1
                + u.markedForGreatness * 3
                + u.agendaXp
                + Math.floor(u.kills / 3);

            if (u.battleHonours.findIndex(bh => bh.rank === BattleHonourRank.Blooded) < 0 && totalExperience >= 6) {
                u.battleHonours.push({ crusadePoints: u.powerLevel >= 11 ? 2 : 1, effect: "", rank: BattleHonourRank.Blooded })
            }
            else if (u.battleHonours.findIndex(bh => bh.rank === BattleHonourRank.BattleHardened) < 0 && totalExperience >= 16) {
                u.battleHonours.push({ crusadePoints: u.powerLevel >= 11 ? 2 : 1, effect: "", rank: BattleHonourRank.BattleHardened })
            }
            else if (u.battleHonours.findIndex(bh => bh.rank === BattleHonourRank.Heroic) < 0 && totalExperience >= 31) {
                u.battleHonours.push({ crusadePoints: u.powerLevel >= 11 ? 2 : 1, effect: "", rank: BattleHonourRank.Heroic })
            }
            else if (u.battleHonours.findIndex(bh => bh.rank === BattleHonourRank.Legendary) < 0 && totalExperience >= 51) {
                u.battleHonours.push({ crusadePoints: u.powerLevel >= 11 ? 2 : 1, effect: "", rank: BattleHonourRank.Legendary })
            }

            newUnits.splice(i, 1, u)

            setUnits(newUnits);
        }
        if (props.selectedUnitIndexes.includes(index)) {
            return (
                <ReportUnit unit={unit} updateUnit={(u) => updateUnit(u, index)} />
            );
        }
    })

    function done() {
        const crusadeArmy = { ...props.crusadeArmy }
        crusadeArmy.units = units;
        units.forEach(u => u.battleParticipation++);

        props.updateArmy(crusadeArmy)
    }

    return (
        <>
            <h1>
                Fill Post Game Stats
            </h1>
            <div className="expand">
                <div>
                    Additional Requisition Points:
                <input
                        type="number"
                        onChange={event => setRequisitionPoints(Number.parseInt(event.target.value))}
                        value={requisitionPoints}
                    />
                </div>
                {unitsDisplay}
            </div>
            <div>
                <button onClick={props.goBack}>
                    Back
                </button>
                <button onClick={done}>
                    Save
                </button>
            </div>
        </>
    )
}

export default ReportUnits;