import React from "react";
import { INameEffect } from "../Constants";
import { Card, Row, Col } from "react-bootstrap";

interface IUnitSummaryCardProps {
    header: string;
    nameEffects: INameEffect[];
}

function UnitSummaryCard(props: IUnitSummaryCardProps): JSX.Element | null {
    const cardContent: JSX.Element[] = [];

    props.nameEffects.forEach(nameEffect => {
        cardContent.push(
            <>
                <Card.Subtitle className="mt-1 ml-2">{nameEffect.name}</Card.Subtitle>
                <Card.Text className="ml-2">{nameEffect.effect}</Card.Text>
            </>
        )
    })

    return (
        <Row className="mb-3">
            <Col>
                <Card>
                    <Card.Header className="py-1">
                        {props.header}
                    </Card.Header>
                    {cardContent}
                </Card>
            </Col>
        </Row>
    )
}

export default UnitSummaryCard