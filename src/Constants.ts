export const CRUSADE_ARMIES_STORAGE_KEY = "crusadeArmies";

export interface ICrusadeUnit {
    id: number,
    name: string;
    crusadePoints: number;
    powerLevel: number;
    markedForGreatness: number;
    kills: number;
    battleParticipation: number;
    agendaXp: number;
    notes: string;
    battleHonours: IBattleHonour[];
    outOfAction: IOutOfAction[];
    warlordTrait?: INameEffect;
}

interface IBattleHonour {
    crusadePoints: number;
    battleTrait?: INameEffect;
    rank: BattleHonourRank;
}

export enum BattleHonourRank {
    BattleReady = "Battle-Ready",
    Blooded = "Blooded",
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
    id: number;
    name: string;
    units: ICrusadeUnit[]
    battleRosterUnitIds?: number[]
}

