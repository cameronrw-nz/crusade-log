import React, { useState } from "react";
import Header from "./CommonFields/Header";
import FormButtons from "./CommonFields/FormButtons";
import { ICrusadeArmy, INameEffect } from "./Constants";
import ReadOnlyRow from "./CommonFields/ReadOnlyRow";
import { Row, Col, Form } from "react-bootstrap";
import FormButton from "./CommonFields/FormButton";
import FormNameEffectInputs from "./CommonFields/FormNameEffectInputs";

interface IRequisitionPointSpendingProps {
    crusadeArmy: ICrusadeArmy;
    goBack: () => void
    updateArmy: (crusadeArmy: ICrusadeArmy) => void;
}

function RequisitionPointSpending(props: IRequisitionPointSpendingProps): JSX.Element {
    const [requisitionPoints, setRequisitionPoints] = useState<number>(props.crusadeArmy.requisitionPoints ?? 0)
    const [maximumPowerLevel, setMaximumPowerLevel] = useState<number>(props.crusadeArmy.maximumPowerLevel ?? 0)
    const [warlordTraits, setWarlordTraits] = useState<{ id: number, nameEffect: INameEffect }[]>([])

    function IncreasePowerLevel() {
        setMaximumPowerLevel(maximumPowerLevel + 5)
        setRequisitionPoints(requisitionPoints - 1)
    }

    function DecreasePowerLevel() {
        setMaximumPowerLevel(maximumPowerLevel - 5)
        setRequisitionPoints(requisitionPoints + 1)
    }

    function AddWarlordTrait() {
        const newWarlordTraits = [...warlordTraits, { id: -1, nameEffect: {} }]
        setRequisitionPoints(requisitionPoints - 1)
        setWarlordTraits(newWarlordTraits)
    }

    const warlordTraitOptions: JSX.Element[] = [(<option value={-1}></option>)]
    props.crusadeArmy.units.forEach(unit => {
        if (!unit.warlordTrait) {
            warlordTraitOptions.push(
                <option value={unit.id}>{unit.name}</option>
            )
        }
    })

    function save() {
        const crusadeArmy = { ...props.crusadeArmy }
        crusadeArmy.maximumPowerLevel = maximumPowerLevel
        crusadeArmy.requisitionPoints = requisitionPoints

        warlordTraits.forEach(warlordTrait => {
            const unit = crusadeArmy.units.find(u => u.id === warlordTrait.id)
            unit!.warlordTrait = warlordTrait.nameEffect;
        })

        props.updateArmy(crusadeArmy)
        props.goBack()
    }

    const warlordTraitsDisplay: JSX.Element[] = []
    warlordTraits?.forEach((warlordTrait, index) => {
        function onIdChange(e: React.ChangeEvent<HTMLInputElement>) {
            const newWarlordTraits = [...warlordTraits]
            newWarlordTraits?.splice(index, 1, { ...warlordTrait, id: Number.parseInt(e.target.value) });
            setWarlordTraits(newWarlordTraits)
        }
        warlordTraitsDisplay.push(
            <>
                <Row className="mb-2">
                    <Col className="pr-0">
                        <Form.Control onChange={onIdChange} value={warlordTrait.id} as="select">
                            {warlordTraitOptions}
                        </Form.Control>
                    </Col>
                    <Col>
                        <FormButton
                            name="Remove"
                            small
                            onClick={() => {
                                const newWarlordTraits = [...warlordTraits]
                                newWarlordTraits?.splice(index, 1);
                                setWarlordTraits(newWarlordTraits)
                                setRequisitionPoints(requisitionPoints + 1)
                            }}
                        />
                    </Col>
                </Row>
                <FormNameEffectInputs
                    onNameChange={e => {
                        const newWarlordTraits = [...warlordTraits]
                        warlordTrait.nameEffect.name = e.target.value
                        newWarlordTraits?.splice(index, 1, warlordTrait);
                        setWarlordTraits(newWarlordTraits)
                    }}
                    onEffectChange={e => {
                        const newWarlordTraits = [...warlordTraits]
                        warlordTrait.nameEffect.effect = e.target.value
                        newWarlordTraits?.splice(index, 1, warlordTrait);
                        setWarlordTraits(newWarlordTraits)
                    }}
                    nameEffect={warlordTrait.nameEffect}
                />
            </>
        )
    })

    return (
        <>
            <Header
                headerText="RP Spending"
            />
            <ReadOnlyRow
                firstColumn="Requisition Points"
                secondColumn={requisitionPoints}
            />
            <ReadOnlyRow
                firstColumn="Maximum Power Level"
                secondColumn={maximumPowerLevel}
            />
            <Row className="mb-2">
                <Col>
                    <FormButton
                        onClick={DecreasePowerLevel}
                        name="Undo"
                    />
                </Col>
                <Col>
                    <FormButton
                        onClick={IncreasePowerLevel}
                        name="Increase Supply Limit"
                    />
                </Col>
            </Row>
            <Row className="mb-2">
                <Col>
                    <FormButton
                        onClick={AddWarlordTrait}
                        name="Warlord Trait"
                    />
                </Col>
            </Row>
            {warlordTraitsDisplay}
            <FormButtons
                secondaryButtonName="Back"
                secondaryButtonOnClick={props.goBack}
                primaryButtonName="Save"
                primaryButtonOnClick={save}
            />
        </>
    )
}

export default RequisitionPointSpending