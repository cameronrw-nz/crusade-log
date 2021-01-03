import { NameEffectInput } from "src/Resolvers/Mutation";
import { PrismaClient, NameEffect } from "@prisma/client";
import { PrismaClientOptions } from "@prisma/client/runtime";

export async function SaveNameEffect(nameEffectInput: NameEffectInput, prisma: PrismaClient<PrismaClientOptions, never>): Promise<NameEffect> {
    const existingNameEffect = nameEffectInput.id && await prisma.nameEffect.findOne({ where: { id: nameEffectInput.id } });

    let nameEffect = undefined;
    if (existingNameEffect) {
        nameEffect = await UpdateNameEffect(existingNameEffect, nameEffectInput, prisma)
    }
    else {
        nameEffect = await CreateNameEffect(nameEffectInput, prisma)
    }

    return nameEffect;
}

async function UpdateNameEffect(existingNameEffect: NameEffect, nameEffectInput: NameEffectInput, prisma: PrismaClient<PrismaClientOptions, never>): Promise<NameEffect> {
    const { id, otherTraitId, ...editableFields } = existingNameEffect;
    return await prisma.nameEffect.update({
        where: { id: nameEffectInput.id },
        data: {
            ...editableFields,
            name: nameEffectInput.name,
            effect: nameEffectInput.effect
        }
    })
}

async function CreateNameEffect(nameEffectInput: NameEffectInput, prisma: PrismaClient<PrismaClientOptions, never>): Promise<NameEffect> {
    return await prisma.nameEffect.create({
        data: {
            name: nameEffectInput.name,
            effect: nameEffectInput.effect
        }
    })
}