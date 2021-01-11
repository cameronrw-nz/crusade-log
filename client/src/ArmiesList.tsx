import React, { useState, useEffect } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { Button, Row, Col, Card } from "react-bootstrap";

import CrusadeArmyRoster from "./CrusadeArmyRoster";
import { ICrusadeArmy, ARMIES_ARE_USING_ALTERNATE_NAME, INameEffect, ICrusadeUnit, IBattleHonour, IArmiesUsingAlternateName } from "./Constants";
import EditArmy from "./EditArmy";
import { CalculateCrusadePoints, GetName } from "./Helpers/CrusadeUnitHelper";
import { ThemeContext } from "./App";
import { FETCH_ARMIES } from "./GraphQLOperations/FetchArmies";

import 'bootstrap/dist/css/bootstrap.min.css';
import { SAVE_ARMIES } from "./GraphQLOperations/SaveArmies";

function ArmiesList() {
    const [edittingArmy, setEdittingArmy] = useState<ICrusadeArmy>()
    const { loading, error, data } = useQuery(FETCH_ARMIES);
    const [saveArmy] = useMutation(SAVE_ARMIES)
    const [selectedCrusadeArmy, setSelectedCrusadeArmy] = useState<ICrusadeArmy>();
    const [crusadeArmiesDisplay, setCrusadeArmiesDisplay] = useState<JSX.Element[]>();
    const [armiesAreUsingAlternateName, setArmiesAreUsingAlternateName] =
        useState<IArmiesUsingAlternateName[]>(JSON.parse(window.localStorage.getItem(ARMIES_ARE_USING_ALTERNATE_NAME) || "[]"));

    useEffect(() => {
        if (loading || !data) {
            return;
        }

        const armies: ICrusadeArmy[] = [];

        const display = data.armies.map((crusadeArmy: ICrusadeArmy & { __typename: any }, index: number) => {
            const { __typename: b, ...army } = crusadeArmy;
            if (army.detachmentTrait) {
                const { __typename: a, ...detachmentTrait } = army.detachmentTrait as INameEffect & { __typename: any }
                army.detachmentTrait = detachmentTrait
            }
            army.units = crusadeArmy.units.map(u => {
                const { __typename: c, ...unit } = u as ICrusadeUnit & { __typename: any };
                if (u.warlordTrait) {
                    const { __typename: a, ...warlordTrait } = u.warlordTrait as INameEffect & { __typename: any }
                    unit.warlordTrait = warlordTrait
                }
                if (u.relic) {
                    const { __typename: a, ...relic } = u.relic as INameEffect & { __typename: any }
                    unit.relic = relic
                }
                if (u.battleHonours) {
                    const battleHonours = u.battleHonours.map(bh => {
                        const { __typename: d, ...battleHonour } = (bh as IBattleHonour & { __typename: any })
                        const { __typename: e, ...battleTrait } = battleHonour.battleTrait as INameEffect & { __typename: any }
                        battleHonour.battleTrait = battleTrait;

                        return battleHonour
                    })

                    unit.battleHonours = battleHonours
                }
                if (u.battleScars) {
                    const battleScars = u.battleScars.map(bs => {
                        const { __typename: e, ...battleScar } = bs as INameEffect & { __typename: any }
                        return battleScar
                    })

                    unit.battleScars = battleScars
                }
                return unit
            })

            let crusadePoints = 0;
            let powerLevel = 0;
            army.units.forEach(unit => {
                crusadePoints += CalculateCrusadePoints(unit);
                powerLevel += unit.powerLevel;
            })

            armies.push(army);
            const isUsingAlternateName =
                armiesAreUsingAlternateName.find(a => a.armyId === army.id)?.isUsingAlternateName ?? false

            return (
                <Card
                    className="mb-3"
                    key={index}
                    onClick={() => setSelectedCrusadeArmy(army)}
                    style={{ border: `1px solid ${army.traitColor || "rgb(0, 123, 255)"}` }} >
                    <Card.Body>
                        <Card.Title as="h2">
                            {GetName(army, isUsingAlternateName)}
                        </Card.Title>
                        <Card.Text>
                            {powerLevel + " PL "}
                            {crusadePoints + " CP "}
                            {army.requisitionPoints + " RP"}
                        </Card.Text>
                    </Card.Body>
                </Card>
            )
        });

        setCrusadeArmiesDisplay(display);
    }, [loading, data])

    useEffect(() => {

    }, [selectedCrusadeArmy])

    async function updateArmy(crusadeArmy: ICrusadeArmy) {
        console.log("updating army")

        const response = await saveArmy({ variables: { crusadeArmy: crusadeArmy } })
        let updatedCrusadeArmy: ICrusadeArmy | undefined = undefined;
        if (response.data) {
            updatedCrusadeArmy = response.data.army as ICrusadeArmy
        }

        if (!updatedCrusadeArmy) {
            return;
        }

        setEdittingArmy(undefined)
        setSelectedCrusadeArmy(updatedCrusadeArmy)
    }

    function addArmy() {
        const newArmy: ICrusadeArmy = {
            name: "",
            id: 0,
            maximumPowerLevel: 50,
            requisitionPoints: 5,
            units: [],
            traitColor: "blue"
        }
        setEdittingArmy(newArmy)
    }

    function deleteArmy(deletingArmy: ICrusadeArmy) {
        throw new Error("Not implemented.")
    }

    function toggleIsUsingAlternateName() {
        const storageCrusadeArmies: IArmiesUsingAlternateName[] = JSON.parse(window.localStorage.getItem(ARMIES_ARE_USING_ALTERNATE_NAME) || "[]");
        if (!selectedCrusadeArmy) {
            return
        }

        let newValue = false;
        let armyIsUsingAlternateName = storageCrusadeArmies.find(army => army.armyId === selectedCrusadeArmy.id)
        if (armyIsUsingAlternateName) {
            armyIsUsingAlternateName.isUsingAlternateName = !armyIsUsingAlternateName.isUsingAlternateName
        }
        else {
            armyIsUsingAlternateName = {
                armyId: selectedCrusadeArmy.id,
                isUsingAlternateName: false
            }
            storageCrusadeArmies.push(armyIsUsingAlternateName)
        }

        window.localStorage.setItem(ARMIES_ARE_USING_ALTERNATE_NAME, JSON.stringify(storageCrusadeArmies));
        setArmiesAreUsingAlternateName(storageCrusadeArmies)
    }

    if (edittingArmy) {
        return (
            <EditArmy
                crusadeArmy={edittingArmy}
                handleDeleteArmy={() => deleteArmy(edittingArmy)}
                goBack={() => setEdittingArmy(undefined)}
                saveArmy={updateArmy}
            />
        )
    }

    if (selectedCrusadeArmy) {
        const context = {
            color: selectedCrusadeArmy.traitColor || "blue",
            isUsingAlternateName: armiesAreUsingAlternateName?.find(army => army.armyId === selectedCrusadeArmy.id)?.isUsingAlternateName ?? false,
            toggleIsUsingAlternateName: toggleIsUsingAlternateName
        }

        return (
            <ThemeContext.Provider value={context}>
                <CrusadeArmyRoster
                    deleteArmy={deleteArmy}
                    crusadeArmy={selectedCrusadeArmy}
                    goBack={() => setSelectedCrusadeArmy(undefined)}
                    updateArmy={updateArmy}
                />
            </ThemeContext.Provider>
        )
    }

    return (
        <>
            <Row className="my-2 mx-1 header">
                <h2>
                    Crusade Armies
                </h2>
            </Row>
            <Row className="flex-grow-1" style={{ overflow: "auto" }}>
                <Col >
                    {crusadeArmiesDisplay}
                </Col>
            </Row>
            <Row md="2">
                <Col xs={4}>
                    <Button
                        block
                        size="lg"
                        variant="primary"
                        onClick={addArmy}
                    >
                        Add
                    </Button>
                </Col>
            </Row>
        </>
    )
}

export default ArmiesList;