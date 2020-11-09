import { ServerContext } from ".."

export async function detachmentTrait(parent: any, args: any, context: ServerContext, info: any): Promise<any> {
    return context.prisma.nameEffect.findOne({ where: { id: parent.id } })
}

export async function units(parent: any, args: any, context: ServerContext, info: any): Promise<any> {
    return context.prisma.crusadeUnit.findMany({ where: { id: parent.id } })
}
