import React, { useState } from "react";
import { ICrusadeUnit, BattleHonourRank } from "../Constants";
import { CalculateTotalExperience } from "../Helpers/CrusadeUnitHelper";
import EditOutOfActions from "../CommonFields/EditOutOfActions";
import FormInput from "../CommonFields/FormInput";
import { Row, Col } from "react-bootstrap";
import { ThemeContext } from "../App";
import FormNameEffectInputs from "../CommonFields/FormNameEffectInputs";
import ReadOnlyRow from "../CommonFields/ReadOnlyRow";

interface IReportUnitProps {
    unit: ICrusadeUnit;
    updateUnit: (u: ICrusadeUnit) => void;
}

function ReportUnit(props: IReportUnitProps) {
    const totalExperience = CalculateTotalExperience(props.unit) + 1;
    const [initialExperience] = useState(totalExperience - 1);

    let crusadePoints = 0;
    let battleHonours = props.unit.battleHonours.map(battleHonour => {
        crusadePoints += battleHonour.crusadePoints;

        if (battleHonour.rank === BattleHonourRank.Blooded && initialExperience < 6
            || battleHonour.rank === BattleHonourRank.BattleHardened && initialExperience < 16
            || battleHonour.rank === BattleHonourRank.Heroic && initialExperience < 31
            || battleHonour.rank === BattleHonourRank.Legendary && initialExperience < 51) {
            return (
                <FormNameEffectInputs
                    nameEffect={battleHonour.battleTrait}
                    onEffectChange={event => {
                        var u = { ...props.unit };
                        let bh = u.battleHonours.find(b => b.rank === battleHonour.rank)
                        if (!bh?.battleTrait) {
                            bh!.battleTrait = {}
                        }
                        bh!.battleTrait.effect = event.target.value;
                        props.updateUnit(u)
                    }}
                    onNameChange={event => {
                        var u = { ...props.unit };
                        let bh = u.battleHonours.find(b => b.rank === battleHonour.rank)
                        if (!bh?.battleTrait) {
                            bh!.battleTrait = {}
                        }
                        bh!.battleTrait.name = event.target.value;
                        props.updateUnit(u)
                    }}
                    formName={battleHonour.rank}
                />
            )
        }

        return (
            <ReadOnlyRow
                firstColumn={battleHonour.rank}
                label
                secondColumn={battleHonour.battleTrait?.effect || ""}
            />
        )
    });

    return (
        <ThemeContext.Consumer>
            {value =>
                <Row>
                    <Col>
                        <h3 className="mt-3" style={{ borderTop: `1px solid ${value}` }}>
                            {props.unit.name}
                        </h3>
                        <ReadOnlyRow
                            firstColumn="Crusade Points"
                            label
                            secondColumn={crusadePoints}
                        />
                        <ReadOnlyRow
                            firstColumn="Battle Participation"
                            label
                            secondColumn={`${props.unit.battleParticipation} + 1`}
                        />
                        <FormInput
                            resetFirstColSpan
                            inputType="number"
                            onChange={event => {
                                var u = { ...props.unit };
                                u.markedForGreatness = Number.parseInt(event.target.value)
                                props.updateUnit(u)
                            }}
                            formName="Greatness"
                            value={props.unit.markedForGreatness}
                        />
                        <FormInput
                            resetFirstColSpan
                            inputType="number"
                            onChange={event => {
                                var u = { ...props.unit };
                                u.agendaXp = Number.parseInt(event.target.value)
                                props.updateUnit(u)
                            }}
                            formName="Agenda"
                            value={props.unit.agendaXp}
                        />
                        <FormInput
                            resetFirstColSpan
                            inputType="number"
                            onChange={event => {
                                var u = { ...props.unit };
                                u.kills = Number.parseInt(event.target.value)
                                props.updateUnit(u)
                            }}
                            formName="Kills"
                            value={props.unit.kills}
                        />
                        <ReadOnlyRow
                            firstColumn="Total Experience"
                            label
                            secondColumn={totalExperience}
                        />
                        {battleHonours}
                        <EditOutOfActions
                            unit={props.unit}
                            editUnit={(edit) => {
                                const u: ICrusadeUnit = {
                                    ...props.unit,
                                    outOfAction: [...(props.unit.outOfAction || [])]
                                };
                                edit(u)
                                props.updateUnit(u);
                            }}
                        />
                    </Col>
                </Row>
            }
        </ThemeContext.Consumer>
    )
}

export default ReportUnit;