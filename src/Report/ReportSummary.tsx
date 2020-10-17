import React, { useState } from "react";
import { ICrusadeArmy } from "../Constants";
import UnitSummaryRows from "../CommonFields/UnitSummary";
import ReportUnits from "./ReportUnits";
import { Row } from "react-bootstrap";
import FormButtons from "../CommonFields/FormButtons";
import { ThemeContext } from "../App";

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
            unitSummaries.push(
                <ThemeContext.Consumer>
                    {value =>
                        <h3 className="mt-3" style={{ borderTop: `1px solid ${value}` }}>{unit.name}</h3>
                    }
                </ThemeContext.Consumer>
            )
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
            <Row className="my-2 mx-1 header">
                <h2>
                    Battle Roster
                </h2>
            </Row>
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