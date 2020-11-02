import { ICrusadeUnit, IEntity, ICrusadeArmy } from "../Constants";

export function CalculateTotalExperience(unit: ICrusadeUnit) {
    const totalExperience = unit.battleParticipation
        + unit.markedForGreatness * 3
        + unit.agendaXp
        + Math.floor(unit.kills / 3)
        - (unit.experienceLoss ?? 0);

    return totalExperience > 0 ? totalExperience : 0;
}


export function CalculateCrusadePoints(unit: ICrusadeUnit) {
    const warlordTraitCrusadePoints = unit.warlordTrait ? 1 : 0;
    const relicCrusadePoints = unit.relic ? 1 : 0;
    const battleHonourCrusadePoints = unit.battleHonours && unit.battleHonours.length > 0 ?
        unit.battleHonours
            ?.map(bh => bh.crusadePoints)
            ?.reduce((total, newvalue) => {
                return (total ?? 0) + newvalue;
            })
        : 0;

    let outOfActionCrusadePoints = 0 - (unit.battleScars?.length ?? 0);

    return warlordTraitCrusadePoints + relicCrusadePoints + battleHonourCrusadePoints + outOfActionCrusadePoints;
}

export function GetArmyName(crusadeArmy: ICrusadeArmy) {
    return GetName(crusadeArmy, crusadeArmy.isUsingAlternateName)
}

export function GetName(entity: IEntity, isUsingAlternateName?: boolean) {
    return isUsingAlternateName ? entity.alternateName || entity.name : entity.name
}