import { ServerContext } from ".."

export async function warlordTrait(parent: any, args: any, context: ServerContext, info: any): Promise<any> {
    return context.prisma.nameEffect.findOne({ where: { id: parent.warlordTraitId } })
}

export async function relic(parent: any, args: any, context: ServerContext, info: any): Promise<any> {
    return context.prisma.nameEffect.findOne({ where: { id: parent.relicId } })
}
