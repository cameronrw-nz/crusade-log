import { ServerContext } from ".."

export async function battleTrait(parent: any, args: any, context: ServerContext, info: any): Promise<any> {
    return parent.battleTraitId ? await context.prisma.nameEffect.findOne({ where: { id: parent.battleTraitId } }) : undefined
}
