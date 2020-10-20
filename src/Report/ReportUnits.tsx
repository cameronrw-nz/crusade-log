import React, { useState } from "react";
import ReportUnit from "./ReportUnit";
import { ICrusadeArmy, ICrusadeUnit, BattleHonourRank } from "../Constants";
import { CalculateTotalExperience } from "../Helpers/CrusadeUnitHelper";
import { Row, Form } from "react-bootstrap";
import FormInput from "../CommonFields/FormInput";
import FormButtons from "../CommonFields/FormButtons";

interface IReportUnitsProps {
    crusadeArmy: ICrusadeArmy;
    goBack: () => void;
    updateArmy: (crusadeArmy: ICrusadeArmy) => void;
}

function ReportUnits(props: IReportUnitsProps) {
    const [units, setUnits] = useState<ICrusadeUnit[]>(props.crusadeArmy.units);
    const [requisitionPoints, setRequisitionPoints] = useState<number>(props.crusadeArmy.requisitionPoints ? props.crusadeArmy.requisitionPoints + 1 : 1)

    const unitsDisplay: JSX.Element[] = []
    units.forEach((unit, index) => {
        function updateUnit(u: ICrusadeUnit, i: number) {
            const newUnits = [...units]
            const totalExperience = CalculateTotalExperience(u) + 1;

            if (u.battleHonours.findIndex(bh => bh.rank === BattleHonourRank.Blooded) < 0 && totalExperience >= 6) {
                u.battleHonours.push({ crusadePoints: u.powerLevel >= 11 ? 2 : 1, battleTrait: { effect: "" }, rank: BattleHonourRank.Blooded })
            }
            else if (u.battleHonours.findIndex(bh => bh.rank === BattleHonourRank.BattleHardened) < 0 && totalExperience >= 16) {
                u.battleHonours.push({ crusadePoints: u.powerLevel >= 11 ? 2 : 1, battleTrait: { effect: "" }, rank: BattleHonourRank.BattleHardened })
            }
            else if (u.battleHonours.findIndex(bh => bh.rank === BattleHonourRank.Heroic) < 0 && totalExperience >= 31) {
                u.battleHonours.push({ crusadePoints: u.powerLevel >= 11 ? 2 : 1, battleTrait: { effect: "" }, rank: BattleHonourRank.Heroic })
            }
            else if (u.battleHonours.findIndex(bh => bh.rank === BattleHonourRank.Legendary) < 0 && totalExperience >= 51) {
                u.battleHonours.push({ crusadePoints: u.powerLevel >= 11 ? 2 : 1, battleTrait: { effect: "" }, rank: BattleHonourRank.Legendary })
            }

            newUnits.splice(i, 1, u)

            setUnits(newUnits);
        }
        if (props.crusadeArmy.battleRosterUnitIds?.includes(unit.id)) {
            unitsDisplay.push(
                <ReportUnit unit={unit} updateUnit={(u) => updateUnit(u, index)} />
            );
        }
    })

    function done() {
        const crusadeArmy = { ...props.crusadeArmy }
        crusadeArmy.units = units;
        units.forEach(u => u.battleParticipation++);
        crusadeArmy.battleRosterUnitIds = undefined;
        crusadeArmy.requisitionPoints = requisitionPoints
        props.updateArmy(crusadeArmy)
    }

    return (
        <>
            <Row className="my-2 mx-1 header">
                <h2>
                    Fill Unit Stats
                </h2>
            </Row>
            <Form>
                <FormInput
                    resetFirstColSpan
                    formName="RP"
                    inputType="number"
                    onChange={event => setRequisitionPoints(Number.parseInt(event.target.value))}
                    value={requisitionPoints}
                />
                {unitsDisplay}
                <FormButtons
                    primaryButtonName="Save"
                    primaryButtonOnClick={done}
                    secondaryButtonName="Back"
                    secondaryButtonOnClick={props.goBack}
                />
            </Form>
        </>
    )
}

export default ReportUnits;