import { ServerContext } from ".."

export async function nameEffects(parent: any, args: any, context: ServerContext, info: any): Promise<any> {
    return context.prisma.nameEffect.findMany({ where: { otherTraitId: parent.id } })
}
