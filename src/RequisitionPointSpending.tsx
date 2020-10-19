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
    const [relics, setRelics] = useState<{ id: number, nameEffect: INameEffect }[]>([])
    const [removedBattleScars, setRemovedBattleScars] = useState<{ id: number, name?: string }[]>([])

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

    function AddRelic() {
        const newRelics = [...relics, { id: -1, nameEffect: {} }]
        setRequisitionPoints(requisitionPoints - 1)
        setRelics(newRelics)
    }

    function RemoveBattleScars() {
        const newRemovedBattleScars = [...removedBattleScars, { id: -1 }]
        setRequisitionPoints(requisitionPoints - 1)
        setRemovedBattleScars(newRemovedBattleScars);
    }

    const warlordTraitOptions: JSX.Element[] = [(<option value={-1}></option>)]
    const relicOptions: JSX.Element[] = [(<option value={-1}></option>)]
    const battleScarUnitOptions: JSX.Element[] = [(<option value={-1}></option>)]
    props.crusadeArmy.units.forEach(unit => {
        if (!unit.warlordTrait) {
            warlordTraitOptions.push(<option value={unit.id}>{unit.name}</option>)
        }
        if (!unit.relic) {
            relicOptions.push(<option value={unit.id}>{unit.name}</option>)
        }
        if (unit.outOfAction.find(ooa => ooa.battleScar !== undefined)) {
            battleScarUnitOptions.push(<option value={unit.id}>{unit.name}</option>)
        }
    })

    function save() {
        const crusadeArmy = { ...props.crusadeArmy }
        crusadeArmy.maximumPowerLevel = maximumPowerLevel
        crusadeArmy.requisitionPoints = requisitionPoints

        warlordTraits.forEach(warlordTrait => {
            const unit = crusadeArmy.units.find(u => u.id === warlordTrait.id)
            if (unit) {
                unit.warlordTrait = warlordTrait.nameEffect;
            }
        })

        relics.forEach(relic => {
            const unit = crusadeArmy.units.find(u => u.id === relic.id)
            if (unit) {
                unit.relic = relic.nameEffect;
            }
        })

        removedBattleScars.forEach(removedBattleScar => {
            const unit = crusadeArmy.units.find(u => u.id === removedBattleScar.id)
            if (unit) {
                unit.outOfAction = unit.outOfAction.filter(ooa => ooa.battleScar?.name === removedBattleScar.name)
            }
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

    const relicsDisplay: JSX.Element[] = []
    relics?.forEach((relic, index) => {
        function onIdChange(e: React.ChangeEvent<HTMLInputElement>) {
            const newRelics = [...relics]
            newRelics?.splice(index, 1, { ...relic, id: Number.parseInt(e.target.value) });
            setRelics(newRelics)
        }
        relicsDisplay.push(
            <>
                <Row className="mb-2">
                    <Col className="pr-0">
                        <Form.Control onChange={onIdChange} value={relic.id} as="select">
                            {relicOptions}
                        </Form.Control>
                    </Col>
                    <Col>
                        <FormButton
                            name="Remove"
                            small
                            onClick={() => {
                                const newRelics = [...relics]
                                newRelics?.splice(index, 1);
                                setRelics(newRelics)
                                setRequisitionPoints(requisitionPoints + 1)
                            }}
                        />
                    </Col>
                </Row>
                <FormNameEffectInputs
                    onNameChange={e => {
                        const newRelics = [...warlordTraits]
                        relic.nameEffect.name = e.target.value
                        newRelics?.splice(index, 1, relic);
                        setRelics(newRelics)
                    }}
                    onEffectChange={e => {
                        const newRelics = [...relics]
                        relic.nameEffect.effect = e.target.value
                        newRelics?.splice(index, 1, relic);
                        setRelics(newRelics)
                    }}
                    nameEffect={relic.nameEffect}
                />
            </>
        )
    })


    const battleScarsDisplay: JSX.Element[] = []
    removedBattleScars?.forEach((battleScar, index) => {
        function onIdChange(e: React.ChangeEvent<HTMLInputElement>) {
            const newRemovedBattleScars = [...removedBattleScars]
            newRemovedBattleScars?.splice(index, 1, { ...battleScar, id: Number.parseInt(e.target.value) });
            setRemovedBattleScars(newRemovedBattleScars)
        }

        function onBattleScarChanged(e: React.ChangeEvent<HTMLInputElement>) {
            const newRemovedBattleScars = [...removedBattleScars]
            newRemovedBattleScars?.splice(index, 1, { ...battleScar, name: e.target.value });
            setRemovedBattleScars(newRemovedBattleScars)
        }

        const battleScarSelector: JSX.Element[] = []
        if (battleScar.id !== undefined && battleScar.id !== -1) {
            const selectedUnit = props.crusadeArmy.units.find(u => u.id === battleScar.id)
            const battleScarsOptions: JSX.Element[] = []
            selectedUnit?.outOfAction.forEach(ooa => {
                if (ooa.battleScar) {
                    battleScarsOptions.push(<option value={ooa.battleScar.name}>{ooa.battleScar.name}</option>)
                }
            })

            battleScarSelector.push(
                <Row className="mb-2">
                    <Col>
                        <Form.Control onChange={onBattleScarChanged} value={battleScar.name} as="select">
                            {battleScarsOptions}
                        </Form.Control>
                    </Col>
                </Row>
            )
        }

        battleScarsDisplay.push(
            <>
                <Row className="mb-2">
                    <Col className="pr-0">
                        <Form.Control onChange={onIdChange} value={battleScar.id} as="select">
                            {battleScarUnitOptions}
                        </Form.Control>
                    </Col>
                    <Col>
                        <FormButton
                            name="Remove"
                            small
                            onClick={() => {
                                const newRemovedBattleScars = [...removedBattleScars]
                                newRemovedBattleScars?.splice(index, 1);
                                setRemovedBattleScars(newRemovedBattleScars)
                                setRequisitionPoints(requisitionPoints + 1)
                            }}
                        />
                    </Col>
                </Row>
                {battleScarSelector}
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
            <Row className="mb-2">
                <Col>
                    <FormButton
                        onClick={AddRelic}
                        name="Relic"
                    />
                </Col>
            </Row>
            {relicsDisplay}
            <Row className="mb-2">
                <Col>
                    <FormButton
                        name="Repair and Recuperate"
                        onClick={RemoveBattleScars}
                    />
                </Col>
            </Row>
            {battleScarsDisplay}
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