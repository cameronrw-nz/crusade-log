import { ICrusadeUnit } from "../Constants";

export function CalculateTotalExperience(unit: ICrusadeUnit) {
    return unit.battleParticipation
        + unit.markedForGreatness * 3
        + unit.agendaXp
        + Math.floor(unit.kills / 3);
}