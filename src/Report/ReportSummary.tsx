import React, { useState } from "react";
import { ICrusadeArmy } from "../Constants";
import UnitSummaryRows from "../CommonFields/UnitSummary";
import ReportUnits from "./ReportUnits";

interface IReportSummaryProps {
    crusadeArmy: ICrusadeArmy;
    goBack: () => void;
    updateArmy: (crusadeArmy: ICrusadeArmy) => void;
}

function ReportSummary(props: IReportSummaryProps): JSX.Element | null {
    const [isContinuing, setIsContinuing] = useState<boolean>();

    const unitSummaries: JSX.Element[] = [];
    props.crusadeArmy.battleRosterUnitIds?.forEach(id => {
        const unit = props.crusadeArmy.units.find(u => u.id === id);
        if (unit) {
            unitSummaries.push(<tr><td><h3>{unit.name}</h3></td></tr>)
            unitSummaries.push(
                <UnitSummaryRows
                    unit={unit}
                    key={id}
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

    return (
        <>
            <h1>
                Battle Roster
            </h1>
            <div className="expand">
                <table className="edittable-table">
                    <tbody>
                        {unitSummaries}
                    </tbody>
                </table>
            </div>
            <div className="button-container">
                <button onClick={props.goBack}>
                    Back
                </button>
                <button className="primary" onClick={() => setIsContinuing(true)} >
                    Continue
                </button>
            </div>
        </>
    )
}

export default ReportSummary;