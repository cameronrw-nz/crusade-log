import { ICrusadeUnit } from "../Constants";

export function CalculateTotalExperience(unit: ICrusadeUnit) {
    let experienceLossByOutOfAction = 0;
    unit.outOfAction && unit.outOfAction.forEach(ooa => {
        if (ooa.isActive && ooa.xp) {
            experienceLossByOutOfAction += ooa.xp
        }
    })

    const totalExperience = unit.battleParticipation
        + unit.markedForGreatness * 3
        + unit.agendaXp
        + Math.floor(unit.kills / 3)
        - experienceLossByOutOfAction;

    return totalExperience > 0 ? totalExperience : 0;
}


export function CalculateCrusadePoints(unit: ICrusadeUnit) {
    const warlordTraitCrusadePoints = unit.warlordTrait ? 1 : 0;
    const battleHonourCrusadePoints = unit.battleHonours && unit.battleHonours.length > 0 ?
        unit.battleHonours
            ?.map(bh => bh.crusadePoints)
            ?.reduce((total, newvalue) => {
                return (total ?? 0) + newvalue;
            })
        : 0;

    let outOfActionCrusadePoints = 0;
    unit.outOfAction && unit.outOfAction.forEach(ooa => {
        if (ooa.battleScar) {
            outOfActionCrusadePoints--;
        }
    });

    return warlordTraitCrusadePoints + battleHonourCrusadePoints + outOfActionCrusadePoints;
}