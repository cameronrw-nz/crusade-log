import React, { useState } from "react";
import { ICrusadeUnit, BattleHonourRank } from "../Constants";
import { CalculateTotalExperience, GetName } from "../Helpers/CrusadeUnitHelper";
import EditBattleScars from "../CommonFields/EditBattleScars";
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

    let battleHonours = props.unit.battleHonours.map((battleHonour, index) => {

        if ((battleHonour.rank === BattleHonourRank.Blooded && initialExperience < 6)
            || (battleHonour.rank === BattleHonourRank.BattleHardened && initialExperience < 16)
            || (battleHonour.rank === BattleHonourRank.Heroic && initialExperience < 31)
            || (battleHonour.rank === BattleHonourRank.Legendary && initialExperience < 51)) {
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
                key={index}
                firstColumn={battleHonour.battleTrait?.name || ""}
                label
                secondColumn={battleHonour.battleTrait?.effect || ""}
            />
        )
    });

    return (
        <ThemeContext.Consumer>
            {context =>
                <Row>
                    <Col>
                        <h3 className="mt-3" style={{ borderTop: `1px solid ${context.color}` }}>
                            {GetName(props.unit, context.isUsingAlternateName)}
                        </h3>
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
                        <EditBattleScars
                            unit={props.unit}
                            editUnit={(edit) => {
                                const u: ICrusadeUnit = {
                                    ...props.unit,
                                    battleScars: [...(props.unit.battleScars || [])]
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