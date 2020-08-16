import React, { useState, useEffect } from "react";
import CrusadeArmyRoster from "./CrusadeArmyRoster";
import { ICrusadeArmy, CRUSADE_ARMIES_STORAGE_KEY } from "./Constants";
import EditArmy from "./EditArmy";

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

        const display = crusadeArmies.map(crusadeArmy => {
            let crusadePoints = 0;
            let powerLevel = 0;
            crusadeArmy.units.forEach(unit => {
                unit.battleHonours.forEach(bh => {
                    crusadePoints += bh.crusadePoints
                })
                powerLevel += unit.powerLevel;
            })

            return (
                <div className="armies-list-display" onClick={() => setSelectedCrusadeArmy(crusadeArmy)}>
                    <h2>
                        {crusadeArmy.name}
                    </h2>
                    <span>{powerLevel + " PL"}</span>
                    <span>{crusadePoints + " CP"}</span>
                </div>
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
        const newArmy: ICrusadeArmy = { name: "", id: crusadeArmies?.length ?? 0, units: [] }
        setEdittingArmy(newArmy)
    }

    if (edittingArmy) {
        return (
            <EditArmy
                crusadeArmy={edittingArmy}
                goBack={() => setEdittingArmy(undefined)}
                saveArmy={updateArmy}
            />
        )
    }

    if (selectedCrusadeArmy) {
        return (
            <CrusadeArmyRoster
                crusadeArmy={selectedCrusadeArmy}
                goBack={() => setSelectedCrusadeArmy(undefined)}
                updateArmy={updateArmy}
            />
        )
    }

    return (
        <>
            <h1>
                Crusade Armies
        </h1>
            <div className="expand">

                {crusadeArmiesDisplay}
            </div>
            <div>
                <button onClick={addArmy}>
                    Add
            </button>
            </div>
        </>
    )
}

export default ArmiesList;