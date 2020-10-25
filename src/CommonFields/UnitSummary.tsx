import React, { useState } from "react";
import { CalculateTotalExperience } from "../Helpers/CrusadeUnitHelper";
import { ICrusadeUnit, INameEffect } from "../Constants";
import { Row, Col } from "react-bootstrap";
import NameEffectsCard from "./UnitSummaryCard";

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
            <NameEffectsCard
                header="Warlord Trait"
                nameEffects={[props.unit.warlordTrait]}
            />
        )
    }

    let relicDisplay = null
    if (props.unit.relic) {
        relicDisplay = (
            <NameEffectsCard
                header="Relic"
                nameEffects={[props.unit.relic]}
            />
        )
    }

    let battleHonourDisplay = undefined
    if (props.unit.battleHonours && props.unit.battleHonours.length > 0) {
        const battleHonours: INameEffect[] = []
        props.unit.battleHonours.forEach(battleHonour => {
            battleHonour.battleTrait && battleHonours.push(battleHonour.battleTrait)
        });

        battleHonourDisplay = (
            <NameEffectsCard
                header="Battle Honours"
                nameEffects={battleHonours}
            />
        )
    }


    let battleScarsDisplay: JSX.Element | undefined = undefined
    if (props.unit.battleScars && props.unit.battleScars.length > 0) {
        const battleScars: INameEffect[] = []
        props.unit.battleScars.forEach(battleScar => {
            battleScars.push(battleScar)
        })

        battleScarsDisplay = (
            <NameEffectsCard
                header="Battle Scars"
                nameEffects={battleScars}
            />
        )
    }

    let experienceDetails = null;
    if (isShowingExperience) {
        experienceDetails = (
            <>
                <Row className="mb-2">
                    <Col>
                        Battle Participation
                    </Col>
                    <Col>
                        {props.unit.battleParticipation}
                    </Col>
                </Row>
                <Row className="mb-2">
                    <Col>
                        Marked For Greatness
                    </Col>
                    <Col>
                        {props.unit.markedForGreatness}
                    </Col>
                </Row>
                <Row className="mb-2">
                    <Col>
                        Agenda
                    </Col>
                    <Col>
                        {props.unit.agendaXp}
                    </Col>
                </Row>
                <Row className="mb-2">
                    <Col>
                        Kills
                    </Col>
                    <Col>
                        {props.unit.kills}
                    </Col>
                </Row>
            </>
        )
    }

    return (
        <>
            {warlordTraitDisplay}
            {relicDisplay}
            {battleHonourDisplay}
            {battleScarsDisplay}
            <Row className="mb-2" onClick={toggleShowExperience}>
                <Col>
                    Total Experience
                </Col>
                <Col>
                    {totalExperience}
                </Col>
            </Row>
            {experienceDetails}
        </>
    )
}

export default UnitSummaryRows;