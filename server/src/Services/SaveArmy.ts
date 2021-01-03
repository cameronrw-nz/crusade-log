import { CrusadeArmyInput } from "src/Resolvers/Mutation";
import { PrismaClient, CrusadeArmy, Enumerable, CrusadeUnitCreateWithoutCrusadeArmyInput, NameEffect } from "@prisma/client";
import { PrismaClientOptions } from "@prisma/client/runtime";
import { SaveNameEffect } from "./SaveNameEffect";

export async function SaveArmy(crusadeArmyInput: CrusadeArmyInput, prisma: PrismaClient<PrismaClientOptions, never>): Promise<any> {
    const existingArmy = await prisma.crusadeArmy.findOne({ where: { id: crusadeArmyInput.id } });

    let crusadeArmy = undefined;
    if (existingArmy) {
        crusadeArmy = await UpdateArmy(existingArmy, crusadeArmyInput, prisma)
    }
    else {
        crusadeArmy = await CreateArmy(crusadeArmyInput, prisma)
    }

    return crusadeArmy;
}

async function UpdateArmy(existingArmy: CrusadeArmy, crusadeArmyInput: CrusadeArmyInput, prisma: PrismaClient<PrismaClientOptions, never>) {
    const { id, detachmentTraitId, ...editableFields } = existingArmy;

    let detachmentTrait: NameEffect | undefined = undefined;
    if (crusadeArmyInput.detachmentTrait) {
        if (detachmentTraitId && detachmentTraitId !== crusadeArmyInput.detachmentTrait.id) {
            throw new Error("Incorrect detachment trait id for this army.")
        }
        else {
            detachmentTrait = await SaveNameEffect(crusadeArmyInput.detachmentTrait, prisma);
        }
    }

    return await prisma.crusadeArmy.update({
        where: { id: crusadeArmyInput.id },
        data: {
            ...editableFields,
            name: crusadeArmyInput.name,
            requisitionPoints: crusadeArmyInput.requisitionPoints,
            maximumPowerLevel: crusadeArmyInput.maximumPowerLevel,
            traitColor: crusadeArmyInput.traitColor,
            detachmentTrait: detachmentTrait ? { connect: { id: detachmentTrait.id } } : undefined
        }
    })
}

async function CreateArmy(crusadeArmyInput: CrusadeArmyInput, prisma: PrismaClient<PrismaClientOptions, never>) {
    let detachmentTrait = undefined;
    if (crusadeArmyInput.detachmentTrait) {
        detachmentTrait = { name: crusadeArmyInput.detachmentTrait.name, effect: crusadeArmyInput.detachmentTrait.effect }
    }

    const units: Enumerable<CrusadeUnitCreateWithoutCrusadeArmyInput> = crusadeArmyInput.units.map(unit => {
        let relic = undefined;
        if (unit.relic) {
            relic = { name: unit.relic.name, effect: unit.relic.effect }
        }

        let warlordTrait = undefined
        if (unit.warlordTrait) {
            warlordTrait = { name: unit.warlordTrait.name, effect: unit.warlordTrait.effect }
        }

        let battleHonours = undefined;
        if (unit.battleHonours) {
            battleHonours = unit.battleHonours.map(bh => {
                return {
                    crusadePoints: bh.crusadePoints,
                    rank: bh.rank,
                    battleTrait: { name: bh.battleTrait.name, effect: bh.battleTrait.effect }
                }
            });
        }

        const { id, ...u } = unit;
        return {
            ...u,
            relic: relic ? { create: relic } : undefined,
            warlordTrait: warlordTrait ? { create: warlordTrait } : undefined,
            battleHonours: battleHonours ? { create: battleHonours } : undefined
        }
    })

    return await prisma.crusadeArmy.create({
        data: {
            name: crusadeArmyInput.name,
            requisitionPoints: crusadeArmyInput.requisitionPoints,
            maximumPowerLevel: crusadeArmyInput.maximumPowerLevel,
            traitColor: crusadeArmyInput.traitColor,
            detachmentTrait: crusadeArmyInput.detachmentTrait
                ? { create: detachmentTrait }
                : undefined,
            units: { create: units }
        }
    })
}