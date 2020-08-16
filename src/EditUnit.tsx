import React, { useState } from "react";
import { ICrusadeUnit } from "./Constants";

interface IEditUnitProps {
    goBack: () => void;
    saveUnit: (unit: ICrusadeUnit) => void;
    unit: ICrusadeUnit;
}

function EditUnit(props: IEditUnitProps) {
    const [isNewUnit] = useState<boolean>(props.unit.name === "")
    const [unit, setUnit] = useState<ICrusadeUnit>(props.unit);

    function editUnit(func: (u: ICrusadeUnit) => void) {
        const newUnit = { ...unit }
        func(newUnit)
        setUnit(newUnit)
    }

    return (
        <form onSubmit={() => props.saveUnit(unit)}>
            <h2>
                {(isNewUnit ? "Add Unit:" : "Edit Unit: ") + unit.name}
            </h2>
            <div className="expand">
                <table>
                    <tr>
                        <td>Name:</td>
                        <td>
                            <input
                                onChange={e => editUnit((u) => u.name = e.target.value)}
                                type="textbox"
                                value={unit.name}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>Power Level</td>
                        <td>
                            <input
                                onChange={e => editUnit((u) => u.powerLevel = Number.parseInt(e.target.value))}
                                type="number"
                                value={unit.powerLevel}
                            />
                        </td>
                    </tr>
                </table>
            </div>
            <div>
                <button onClick={props.goBack}>
                    Back
                </button>
                <button onClick={() => props.saveUnit(unit)}>
                    Done
                </button>
            </div>
        </form>
    )
}

export default EditUnit