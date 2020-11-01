export const CRUSADE_ARMIES_STORAGE_KEY = "crusadeArmies";

export interface ICrusadeUnit {
    agendaXp: number;
    alternateName?: string;
    battleHonours: IBattleHonour[];
    battleParticipation: number;
    battleScars: INameEffect[];
    crusadePoints: number;
    experienceLoss?: number;
    id: number,
    kills: number;
    markedForGreatness: number;
    name: string;
    notes: string;
    powerLevel: number;
    relic?: INameEffect;
    sequenceNumber?: number;
    warlordTrait?: INameEffect;
    otherTraits?: IOtherTrait[]
}

interface IBattleHonour {
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

export interface IOutOfAction {
    battleScar?: INameEffect;
    xp?: number;
    isActive: boolean;
}

export interface INameEffect {
    name?: string;
    effect?: string;
}

export interface ICrusadeArmy {
    battleRosterUnitIds?: number[]
    detachmentTrait?: INameEffect;
    id: number;
    name: string;
    alternateName?: string;
    isAlternateNameEnabled?: boolean;
    requisitionPoints?: number;
    traitColor?: string;
    units: ICrusadeUnit[];
    maximumPowerLevel?: number;
}

