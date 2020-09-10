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
}

interface IBattleHonour {
    crusadePoints: number;
    effect: string;
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
    effect?: string;
    xp?: number;
    isActive: boolean;
}

export interface ICrusadeArmy {
    id: number;
    name: string;
    units: ICrusadeUnit[]
}

