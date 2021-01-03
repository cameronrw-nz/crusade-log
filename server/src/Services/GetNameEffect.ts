import { NameEffect, PrismaClient, PrismaClientOptions } from "@prisma/client";

export async function GetNameEffect(nameEffectId: number, prisma: PrismaClient<PrismaClientOptions, never>): Promise<NameEffect> {
    return nameEffectId ? await prisma.nameEffect.findOne({ where: { id: nameEffectId } }) : undefined
}