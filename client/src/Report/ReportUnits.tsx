import React, { useState } from "react";
import ReportUnit from "./ReportUnit";
import { ICrusadeArmy, ICrusadeUnit, BattleHonourRank } from "../Constants";
import { CalculateTotalExperience, CalculateCrusadePoints } from "../Helpers/CrusadeUnitHelper";
import { Row, Form } from "react-bootstrap";
import FormInput from "../CommonFields/FormInput";
import FormButtons from "../CommonFields/FormButtons";
import Header from "../CommonFields/Header";

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
                <ReportUnit unit={unit} key={unit.id} updateUnit={(u) => updateUnit(u, index)} />
            );
        }
    })

    function done() {
        const crusadeArmy = { ...props.crusadeArmy }
        crusadeArmy.units = units;
        units.forEach(u => crusadeArmy.battleRosterUnitIds && crusadeArmy.battleRosterUnitIds.includes(u.id) && u.battleParticipation++);
        crusadeArmy.battleRosterUnitIds = undefined;
        crusadeArmy.requisitionPoints = requisitionPoints
        props.updateArmy(crusadeArmy)
    }

    let selectedPowerLevel = 0;
    let selectedCrusadePoints = 0;
    props.crusadeArmy.units.forEach(unit => {
        if (props.crusadeArmy.battleRosterUnitIds?.includes(unit.id)) {
            selectedPowerLevel += unit.powerLevel
            selectedCrusadePoints += CalculateCrusadePoints(unit)
        }
    })


    return (
        <>
            <Header
                subHeaderInfo={[
                    { name: "PL", value: selectedPowerLevel },
                    { name: "CP", value: selectedCrusadePoints },
                    { name: "RP", value: props.crusadeArmy.requisitionPoints },
                ]}
                headerText="Fill Unit Stats"
            />
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