import { ServerContext } from ".."
import { CrusadeArmy } from "@prisma/client"

export async function army(parent: any, args: { crusadeArmy: CrusadeArmy }, context: ServerContext, info: any): Promise<any> {
    const crusadeArmy = context.prisma.crusadeArmy.create({
        data: {
            name: args.crusadeArmy.name,
            requisitionPoints: args.crusadeArmy.requisitionPoints,
            maximumPowerLevel: args.crusadeArmy.maximumPowerLevel,
            traitColor: args.crusadeArmy.traitColor
        }
    })
    return crusadeArmy
}
