import React, { useState } from "react";
import { ICrusadeArmy } from "../Constants";
import UnitSummaryRows from "../CommonFields/UnitSummary";
import ReportUnits from "./ReportUnits";
import FormButtons from "../CommonFields/FormButtons";
import { ThemeContext } from "../App";
import NameEffectsCard from "../CommonFields/UnitSummaryCard";
import Header from "../CommonFields/Header";
import { CalculateCrusadePoints, GetName } from "../Helpers/CrusadeUnitHelper";

interface IReportSummaryProps {
    crusadeArmy: ICrusadeArmy;
    goBack: () => void;
    updateArmy: (crusadeArmy: ICrusadeArmy) => void;
}

function ReportSummary(props: IReportSummaryProps): JSX.Element | null {
    const [isContinuing, setIsContinuing] = useState<boolean>();

    const unitSummaries: JSX.Element[] = [];
    props.crusadeArmy.units.forEach(unit => {
        if (props.crusadeArmy.battleRosterUnitIds
            && props.crusadeArmy.battleRosterUnitIds.includes(unit.id)
        ) {
            unitSummaries.push(
                <ThemeContext.Consumer key={unit.id + " Header"}>
                    {context =>
                        <h3 className="mt-3" style={{ borderTop: `1px solid ${context.color}` }}>
                            {GetName(unit, context.isUsingAlternateName)}
                        </h3>
                    }
                </ThemeContext.Consumer>
            )
            unitSummaries.push(
                <UnitSummaryRows
                    unit={unit}
                    key={unit.id}
                />
            )
        }
    })

    if (isContinuing) {
        return (
            <ReportUnits
                crusadeArmy={props.crusadeArmy}
                goBack={() => setIsContinuing(false)}
                updateArmy={props.updateArmy}
            />
        )
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
                headerText="Battle Roster"
            />
            {props.crusadeArmy.detachmentTrait && (
                <NameEffectsCard
                    nameEffects={[props.crusadeArmy.detachmentTrait]}
                    header="Detachment Trait"
                />
            )}
            {unitSummaries}
            <FormButtons
                primaryButtonName="Continue"
                primaryButtonOnClick={() => setIsContinuing(true)}
                secondaryButtonName="Back"
                secondaryButtonOnClick={props.goBack}
            />
        </>
    )
}

export default ReportSummary;