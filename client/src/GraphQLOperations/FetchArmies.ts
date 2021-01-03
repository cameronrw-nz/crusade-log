import { gql } from "@apollo/client";

export const FETCH_ARMIES = gql`
query {
  armies {
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
        crusadePoints
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