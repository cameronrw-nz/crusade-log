import { BattleHonourInput } from "src/Resolvers/Mutation";
import { PrismaClient, NameEffect, BattleHonour } from "@prisma/client";
import { PrismaClientOptions } from "@prisma/client/runtime";
import { SaveNameEffect } from "./SaveNameEffect";

export async function SaveBattleHonour(battleHonourInput: BattleHonourInput, prisma: PrismaClient<PrismaClientOptions, never>): Promise<NameEffect> {
    const existingBattleHonour = battleHonourInput.id && await prisma.battleHonour.findOne({ where: { id: battleHonourInput.id } });

    let battleHonour = undefined;
    if (existingBattleHonour) {
        battleHonour = await UpdateBattleHonour(existingBattleHonour, battleHonourInput, prisma)
    }
    else {
        battleHonour = await CreateBattleHonour(battleHonourInput, prisma)
    }

    return battleHonour;
}

async function UpdateBattleHonour(
    existingBattleHonour: BattleHonour,
    battleHonourInput: BattleHonourInput,
    prisma: PrismaClient<PrismaClientOptions, never>
): Promise<BattleHonour> {
    const { id, battleTraitId, crusadeUnitId, ...editableFields } = existingBattleHonour;

    let battleTrait = undefined;
    if (battleHonourInput.battleTrait) {
        if (battleTraitId && battleTraitId !== battleHonourInput.battleTrait.id) {
            throw new Error(`Incorrect battle honour battle trait id for this army. Expected ${battleTrait} and got ${battleHonourInput.battleTrait.id}.`)
        }
        else {
            battleTrait = await SaveNameEffect(battleHonourInput.battleTrait, prisma);
        }
    }

    return await prisma.battleHonour.update({
        where: { id: battleHonourInput.id },
        data: {
            ...editableFields,
            rank: battleHonourInput.rank,
            crusadePoints: battleHonourInput.crusadePoints,
            battleTrait: { connect: { id: battleTrait.id } }
        }
    })
}

async function CreateBattleHonour(battleHonourInput: BattleHonourInput, prisma: PrismaClient<PrismaClientOptions, never>): Promise<BattleHonour> {
    let battleTrait = undefined;
    if (battleHonourInput.battleTrait) {
        battleTrait = { name: battleHonourInput.battleTrait.name, effect: battleHonourInput.battleTrait.effect }
    }

    return await prisma.battleHonour.create({
        data: {
            rank: battleHonourInput.rank,
            crusadePoints: battleHonourInput.crusadePoints,
            battleTrait: { create: battleTrait }
        }
    })
}