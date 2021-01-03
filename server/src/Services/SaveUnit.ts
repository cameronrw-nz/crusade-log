import { CrusadeUnitInput } from "src/Resolvers/Mutation";
import { PrismaClient, CrusadeUnit } from "@prisma/client";
import { PrismaClientOptions } from "@prisma/client/runtime";
import { SaveNameEffect } from "./SaveNameEffect";
import { SaveBattleHonour } from "./SaveBattleHonour";

export async function SaveUnit(crusadeUnitInput: CrusadeUnitInput, crusadeArmyId: number, prisma: PrismaClient<PrismaClientOptions, never>): Promise<any> {
    const existingUnit = crusadeUnitInput.id > 0 && await prisma.crusadeUnit.findOne({ where: { id: crusadeUnitInput.id } });

    let crusadeUnit = undefined;
    if (existingUnit) {
        crusadeUnit = await UpdateUnit(existingUnit, crusadeUnitInput, prisma)
    }
    else {
        crusadeUnit = await CreateUnit(crusadeUnitInput, crusadeArmyId, prisma)
    }

    return crusadeUnit;
}

async function UpdateUnit(existingUnit: CrusadeUnit, crusadeUnitInput: CrusadeUnitInput, prisma: PrismaClient<PrismaClientOptions, never>) {
    const { id, warlordTraitId, relicId, crusadeArmyId, ...editableFields } = existingUnit;

    let warlordTrait = undefined;
    if (crusadeUnitInput.warlordTrait) {
        if (warlordTraitId && warlordTraitId !== crusadeUnitInput.warlordTrait.id) {
            throw new Error(`Incorrect warlord trait id for this army. Expected ${warlordTraitId} and got ${crusadeUnitInput.warlordTrait.id}.`)
        }
        else {
            warlordTrait = await SaveNameEffect(crusadeUnitInput.warlordTrait, prisma);
        }
    }

    let relic = undefined;
    if (crusadeUnitInput.relic) {
        if (relicId && relicId !== crusadeUnitInput.relic.id) {
            throw new Error(`Incorrect relic id for this army. Expected ${relicId} and got ${crusadeUnitInput.relic.id}.`)
        }
        else {
            relic = await SaveNameEffect(crusadeUnitInput.relic, prisma);
        }
    }

    let battleHonours = undefined;
    if (crusadeUnitInput.battleHonours) {
        battleHonours = [];
        for (let index = 0; index < crusadeUnitInput.battleHonours.length; index++) {
            const battleHonour = crusadeUnitInput.battleHonours[index];
            battleHonours.push(await SaveBattleHonour(battleHonour, prisma));
        }
    }

    return await prisma.crusadeUnit.update({
        where: { id: crusadeUnitInput.id },
        data: {
            ...editableFields,
            name: crusadeUnitInput.name,
            alternateName: crusadeUnitInput.alternateName,
            agendaXp: crusadeUnitInput.agendaXp,
            battleParticipation: crusadeUnitInput.battleParticipation,
            experienceLoss: crusadeUnitInput.experienceLoss,
            kills: crusadeUnitInput.kills,
            markedForGreatness: crusadeUnitInput.markedForGreatness,
            notes: crusadeUnitInput.notes,
            powerLevel: crusadeUnitInput.powerLevel,
            sequenceNumber: crusadeUnitInput.sequenceNumber,
            warlordTrait: warlordTrait ? { connect: { id: warlordTrait.id } } : undefined,
            relic: relic ? { connect: { id: relic.id } } : undefined,
            battleHonours: battleHonours ? { connect: battleHonours.map(bh => { return { id: bh.id } }) } : undefined,
            CrusadeArmy: { connect: { id: existingUnit.crusadeArmyId } }
        }
    })
}

async function CreateUnit(crusadeUnitInput: CrusadeUnitInput, crusadeArmyId: number, prisma: PrismaClient<PrismaClientOptions, never>) {
    let relic = undefined;
    if (crusadeUnitInput.relic) {
        relic = { name: crusadeUnitInput.relic.name, effect: crusadeUnitInput.relic.effect }
    }

    let warlordTrait = undefined
    if (crusadeUnitInput.warlordTrait) {
        warlordTrait = { name: crusadeUnitInput.warlordTrait.name, effect: crusadeUnitInput.warlordTrait.effect }
    }

    let battleHonours = undefined;
    if (crusadeUnitInput.battleHonours) {
        battleHonours = crusadeUnitInput.battleHonours.map(bh => {
            return {
                rank: bh.rank,
                crusadePoints: bh.crusadePoints,
                battleTrait: { name: bh.battleTrait.name, effect: bh.battleTrait.effect }
            }
        })
    }

    return await prisma.crusadeUnit.create({
        data: {
            name: crusadeUnitInput.name,
            alternateName: crusadeUnitInput.alternateName,
            agendaXp: crusadeUnitInput.agendaXp,
            battleParticipation: crusadeUnitInput.battleParticipation,
            experienceLoss: crusadeUnitInput.experienceLoss,
            kills: crusadeUnitInput.kills,
            markedForGreatness: crusadeUnitInput.markedForGreatness,
            notes: crusadeUnitInput.notes,
            powerLevel: crusadeUnitInput.powerLevel,
            sequenceNumber: crusadeUnitInput.sequenceNumber,
            relic: relic
                ? { create: relic }
                : undefined,
            warlordTrait: warlordTrait
                ? { create: warlordTrait }
                : undefined,
            battleHonours: battleHonours
                ? { create: battleHonours }
                : undefined,
            CrusadeArmy: { connect: { id: crusadeArmyId } }
        }
    })
}