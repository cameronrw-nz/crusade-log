import { ServerContext } from ".."
import { CrusadeArmy } from "@prisma/client"
import { GetNameEffect } from "../Services/GetNameEffect"

export async function detachmentTrait(parent: CrusadeArmy, args: any, context: ServerContext, info: any): Promise<any> {
    return await GetNameEffect(parent.detachmentTraitId, context.prisma)
}

export async function units(parent: CrusadeArmy, args: any, context: ServerContext, info: any): Promise<any> {
    return context.prisma.crusadeUnit.findMany({ where: { crusadeArmyId: parent.id } })
}
