import React, { useState, useEffect } from "react";
import CrusadeArmyRoster from "./CrusadeArmyRoster";
import { ICrusadeArmy, CRUSADE_ARMIES_STORAGE_KEY } from "./Constants";
import EditArmy from "./EditArmy";
import { CalculateCrusadePoints, GetArmyName } from "./Helpers/CrusadeUnitHelper";
import { Button, Row, Col, Card } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeContext } from "./App";

function ArmiesList() {
    const [edittingArmy, setEdittingArmy] = useState<ICrusadeArmy>()
    const [crusadeArmies, setCrusadeArmies] = useState<ICrusadeArmy[]>();
    const [selectedCrusadeArmy, setSelectedCrusadeArmy] = useState<ICrusadeArmy>();
    const [crusadeArmiesDisplay, setCrusadeArmiesDisplay] = useState<JSX.Element[]>();

    useEffect(() => {
        const storageCrusadeArmies: ICrusadeArmy[] = JSON.parse(window.localStorage.getItem(CRUSADE_ARMIES_STORAGE_KEY) || "[]");
        setCrusadeArmies(storageCrusadeArmies);
    }, [])

    useEffect(() => {
        if (!crusadeArmies) {
            return;
        }

        const display = crusadeArmies.map((crusadeArmy, index) => {
            let crusadePoints = 0;
            let powerLevel = 0;
            crusadeArmy.units.forEach(unit => {
                crusadePoints += CalculateCrusadePoints(unit);
                powerLevel += unit.powerLevel;
            })

            return (
                <Card
                    className="mb-3"
                    key={index}
                    onClick={() => setSelectedCrusadeArmy(crusadeArmy)}
                    style={{ border: `1px solid ${crusadeArmy.traitColor || "rgb(0, 123, 255)"}` }} >
                    <Card.Body>
                        <Card.Title as="h2">
                            {GetArmyName(crusadeArmy)}
                        </Card.Title>
                        <Card.Text>
                            {powerLevel + " PL "}
                            {crusadePoints + " CP "}
                            {crusadeArmy.requisitionPoints + " RP"}
                        </Card.Text>
                    </Card.Body>
                </Card>
            )
        });

        setCrusadeArmiesDisplay(display);
    }, [crusadeArmies])

    function updateArmy(crusadeArmy: ICrusadeArmy) {
        const storageCrusadeArmies: ICrusadeArmy[] = JSON.parse(window.localStorage.getItem(CRUSADE_ARMIES_STORAGE_KEY) || "[]");
        const crusadeArmyIndex = storageCrusadeArmies.findIndex(army => army.id === crusadeArmy.id)
        if (crusadeArmyIndex >= 0) {
            storageCrusadeArmies.splice(crusadeArmyIndex, 1, crusadeArmy)
        }
        else {
            storageCrusadeArmies.push(crusadeArmy);
        }

        window.localStorage.setItem(CRUSADE_ARMIES_STORAGE_KEY, JSON.stringify(storageCrusadeArmies));
        setCrusadeArmies(storageCrusadeArmies)

        const selectedArmy = storageCrusadeArmies.find(sca => sca.id === crusadeArmy.id);
        setSelectedCrusadeArmy(selectedArmy)
    }

    function addArmy() {
        const newArmy: ICrusadeArmy = {
            name: "",
            id: crusadeArmies?.length ?? 0,
            maximumPowerLevel: 50,
            requisitionPoints: 5,
            units: []
        }
        setEdittingArmy(newArmy)
    }

    function deleteArmy(deletingArmy: ICrusadeArmy) {
        const storageCrusadeArmies: ICrusadeArmy[] = JSON.parse(window.localStorage.getItem(CRUSADE_ARMIES_STORAGE_KEY) || "[]");
        const crusadeArmyIndex = storageCrusadeArmies.findIndex(army => army.id === deletingArmy.id)
        if (crusadeArmyIndex >= 0) {
            storageCrusadeArmies.splice(crusadeArmyIndex, 1)
        }

        window.localStorage.setItem(CRUSADE_ARMIES_STORAGE_KEY, JSON.stringify(storageCrusadeArmies));
        setCrusadeArmies(storageCrusadeArmies)
        setSelectedCrusadeArmy(undefined)
    }

    function toggleIsUsingAlternateName() {
        if (!selectedCrusadeArmy) {
            return
        }

        const army = { ...selectedCrusadeArmy }
        army.isUsingAlternateName = selectedCrusadeArmy.isUsingAlternateName !== undefined
            ? !selectedCrusadeArmy.isUsingAlternateName
            : true
        updateArmy(army)
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
            isUsingAlternateName: selectedCrusadeArmy.isUsingAlternateName,
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