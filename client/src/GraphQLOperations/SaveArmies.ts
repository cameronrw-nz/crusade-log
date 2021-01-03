import { gql } from "@apollo/client";

export const SAVE_ARMIES = gql`
mutation army($crusadeArmy: CrusadeArmyInput!) {
  army(crusadeArmy: $crusadeArmy) {
    name
    alternateName
    id
    requisitionPoints
    traitColor
    maximumPowerLevel
    detachmentTrait {
      ...nameEffect
    }
    units {
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
}

fragment nameEffect on NameEffect {
  id
  name
  effect
}
`