import React, { useState } from "react";
import { ICrusadeArmy } from "../Constants";
import UnitSummaryRows from "../CommonFields/UnitSummary";
import ReportUnits from "./ReportUnits";
import { Row, Col, Button } from "react-bootstrap";

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
            unitSummaries.push(<h3 className="border-top border-primary mt-3">{unit.name}</h3>)
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
            <Row className="mb-2">
                <Col>
                    <Button block size="lg" className="mr-2" variant="outline-primary" onClick={props.goBack}>
                        Back
                    </Button>
                </Col>
                <Col>
                    <Button block size="lg" variant="primary" onClick={() => setIsContinuing(true)}>
                        Continue
                    </Button>
                </Col>
            </Row>
        </>
    )
}

export default ReportSummary;