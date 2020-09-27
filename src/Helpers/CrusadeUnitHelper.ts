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

