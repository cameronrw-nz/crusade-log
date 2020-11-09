import { ServerContext } from ".."

export async function armies(parent: any, args: any, context: ServerContext, info: any): Promise<any> {
    const armies = await context.prisma.crusadeArmy.findMany({
        skip: args.skip,
        take: args.take,
        orderBy: args.orderBy,
    })


    //onst detachmentTraitIds = armies.map(army => {
    //   return army.nameEffectId
    //);

    //
    //   const detachmentTraits = context.prisma.nameEffect.findMany({
    //       where:
    //       {
    //           OR: detachmentTraitIds.map(detachmentTraitId => {return { id: detachmentTraitId } })
    //       }
    //   })

    //   armies.forEach(army => army.)

    return armies
}
