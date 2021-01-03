import { ServerContext } from ".."
import { GetNameEffect } from "../Services/GetNameEffect"
import { CrusadeUnit } from "@prisma/client"

export async function warlordTrait(parent: CrusadeUnit, args: any, context: ServerContext, info: any): Promise<any> {
    return await GetNameEffect(parent.warlordTraitId, context.prisma)
}

export async function relic(parent: CrusadeUnit, args: any, context: ServerContext, info: any): Promise<any> {
    return await GetNameEffect(parent.relicId, context.prisma)
}

export async function otherTraits(parent: CrusadeUnit, args: any, context: ServerContext, info: any): Promise<any> {
    return await context.prisma.otherTrait.findMany({ where: { id: parent.id } })
}

export async function battleHonours(parent: CrusadeUnit, args: any, context: ServerContext, info: any): Promise<any> {
    const battleHonours = await context.prisma.battleHonour.findMany({ where: { crusadeUnitId: parent.id } })
    console.log(parent.id + " " + parent.name)
    return battleHonours
}
