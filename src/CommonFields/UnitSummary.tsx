import React, { useState } from "react";
import { CalculateTotalExperience } from "../Helpers/CrusadeUnitHelper";
import { ICrusadeUnit } from "../Constants";

interface IUnitSummaryRowsProps {
    unit: ICrusadeUnit;
}

function UnitSummaryRows(props: IUnitSummaryRowsProps): JSX.Element | null {
    const [isShowingExperience, setIsShowingExperience] = useState<boolean>(false);

    function toggleShowExperience(): void {
        setIsShowingExperience(!isShowingExperience);
    }

    const totalExperience = CalculateTotalExperience(props.unit);

    let warlordTraitDisplay = null
    if (props.unit.warlordTrait) {
        warlordTraitDisplay = (
            <>
                <tr><td><b>Warlord Trait</b></td></tr>
                <tr>
                    <td>{props.unit.warlordTrait.name}</td>
                    <td>{props.unit.warlordTrait.effect}</td>
                </tr>
            </>
        )
    }

    const battleHonourDisplay = []
    if (props.unit.battleHonours && props.unit.battleHonours.length > 0) {
        battleHonourDisplay.push(<tr><td><b>Battle Honours</b></td></tr>)
        props.unit.battleHonours.forEach(battleHonour => {
            battleHonourDisplay.push(
                <tr>
                    <td>{battleHonour.battleTrait?.name}</td>
                    <td>{battleHonour.battleTrait?.effect}</td>
                </tr>
            )
        });
    }


    const battleScarsDisplay: JSX.Element[] = []
    if (props.unit.outOfAction && props.unit.outOfAction.length > 0) {
        battleScarsDisplay.push(<tr><td><b>Battle Scars</b></td><td /></tr>)
        props.unit.outOfAction.forEach(outOfAction => {
            if (!outOfAction.isActive || !outOfAction.battleScar) {
                return;
            }
            battleScarsDisplay.push(
                <tr>
                    <td>{outOfAction.battleScar.name}</td>
                    <td>{outOfAction.battleScar.effect}</td>
                </tr>
            )
        })
    }

    let experienceDetails = null;
    if (isShowingExperience) {
        experienceDetails = (
            <>
                <tr>
                    <td>Battle Participation:</td>
                    <td>{props.unit.battleParticipation}</td>
                </tr>
                <tr>
                    <td>Marked For Greatness:</td>
                    <td>{props.unit.markedForGreatness}</td>
                </tr>
                <tr>
                    <td>Agenda:</td>
                    <td>{props.unit.agendaXp}</td>
                </tr>
                <tr>
                    <td>Kills:</td>
                    <td>{props.unit.kills}</td>
                </tr>
            </>
        )
    }

    return (
        <>
            {warlordTraitDisplay}
            {battleHonourDisplay}
            {battleScarsDisplay}
            <tr onClick={toggleShowExperience}>
                <td>
                    Total Experience:
                        </td>
                <td>
                    {totalExperience}
                </td>
            </tr>
            {experienceDetails}
        </>
    )
}

export default UnitSummaryRows;