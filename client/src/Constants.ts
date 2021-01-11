export const ARMIES_ARE_USING_ALTERNATE_NAME = "armiesAreUsingAlternateName";
export const AUTH_TOKEN = 'auth-token'

export interface ICrusadeUnit extends IEntity {
    agendaXp: number;
    battleHonours: IBattleHonour[];
    battleParticipation: number;
    battleScars: INameEffect[];
    experienceLoss?: number;
    id: number,
    kills: number;
    markedForGreatness: number;
    notes: string;
    powerLevel: number;
    relic?: INameEffect;
    sequenceNumber?: number;
    warlordTrait?: INameEffect;
    otherTraits?: IOtherTrait[]
}

export interface IBattleHonour {
    crusadePoints: number;
    battleTrait?: INameEffect;
    rank: BattleHonourRank;
}

interface IOtherTrait {
    name: string;
    nameEffects: INameEffect[];
}

export enum BattleHonourRank {
    BattleReady = "Battle-Ready",
    Blooded = "Blooded",
    Custom = "Custom Battle Trait",
    BattleHardened = "Battle-Hardened",
    Heroic = "Heroic",
    Legendary = "Legendary"
}

export interface INameEffect {
    name?: string;
    effect?: string;
}

export interface ICrusadeArmy extends IEntity {
    battleRosterUnitIds?: number[]
    detachmentTrait?: INameEffect;
    id: number;
    requisitionPoints?: number;
    traitColor?: string;
    units: ICrusadeUnit[];
    maximumPowerLevel?: number;
}

export interface IEntity {
    name: string;
    alternateName?: string;
}

export interface IArmiesUsingAlternateName {
    armyId: number;
    isUsingAlternateName: boolean;
}