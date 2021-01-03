import { gql } from "@apollo/client";

export const SAVE_UNIT = gql`
mutation unit($crusadeUnit: CrusadeUnitInput!, $crusadeArmyId: Int!) {
  unit(crusadeUnit: $crusadeUnit, crusadeArmyId: $crusadeArmyId) {
    id
    name
    agendaXp
    battleParticipation
    experienceLoss
    kills
    markedForGreatness
    notes
    powerLevel
    warlordTrait {
        ...nameEffect
    }
    relic {
        ...nameEffect
    }
    battleHonours {
        id
        battleTrait {
            ...nameEffect
        }
        rank
    }
    otherTraits {
        id
        name
        nameEffects {
            ...nameEffect
        }
    }
  }
}

fragment nameEffect on NameEffect {
  id
  name
  effect
}
`