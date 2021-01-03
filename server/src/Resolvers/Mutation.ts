import { ServerContext } from ".."
import { SaveArmy } from "../Services/SaveArmy";
import { SaveUnit } from "../Services/SaveUnit";

export interface CrusadeArmyInput {
    id: number
    requisitionPoints: number
    traitColor: string
    maximumPowerLevel: number
    createdAt: Date
    name: string | null
    detachmentTrait: NameEffectInput | null
    units: CrusadeUnitInput[]
}

export interface NameEffectInput {
    id: number
    name: string | null
    effect: string | null
}

export async function army(parent: any, args: { crusadeArmy: CrusadeArmyInput }, context: ServerContext, info: any): Promise<any> {
    return await SaveArmy(args.crusadeArmy, context.prisma)
}

export interface CrusadeUnitInput {
    id?: number
    name: string
    alternateName?: string
    agendaXp: number
    battleParticipation: number
    experienceLoss: number
    kills: number
    markedForGreatness: number
    notes?: string
    powerLevel: number
    sequenceNumber: number
    relic: NameEffectInput | null
    warlordTrait: NameEffectInput | null
    battleHonours: BattleHonourInput[] | null
}

export interface BattleHonourInput {
    id?: number
    crusadePoints: number
    battleTrait: NameEffectInput
    rank: string
}

interface UnitResolverProps {
    crusadeUnit: CrusadeUnitInput;
    crusadeArmyId: number;
}

export async function unit(parent: any, args: UnitResolverProps, context: ServerContext, info: any): Promise<any> {
    return await SaveUnit(args.crusadeUnit, args.crusadeArmyId, context.prisma)

}