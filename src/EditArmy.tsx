import React, { useState } from "react";
import { ICrusadeArmy } from "./Constants";

interface IEditArmyProps {
    goBack: () => void;
    saveArmy: (unit: ICrusadeArmy) => void;
    crusadeArmy: ICrusadeArmy;
}

function EditArmy(props: IEditArmyProps) {
    const [isNewArmy] = useState<boolean>(props.crusadeArmy.name === "")
    const [army, setArmy] = useState<ICrusadeArmy>(props.crusadeArmy);

    function editArmy(func: (a: ICrusadeArmy) => void) {
        const newArmy = { ...army }
        func(newArmy)
        setArmy(newArmy)
    }

    return (
        <>
            <form onSubmit={() => props.saveArmy(army)} id="edit-army">
                <h2>
                    {(isNewArmy ? "Add Army: " : "Edit Army: ") + army.name}
                </h2>
                <div className="expand">
                    <table>
                        <tr>
                            <td>Name:</td>
                            <td>
                                <input
                                    onChange={e => editArmy((a) => a.name = e.target.value)}
                                    type="textbox"
                                    value={army.name}
                                />
                            </td>
                        </tr>
                    </table>
                </div>
                <div>
                    <button onClick={props.goBack} type="button">
                        Back
                    </button>
                    <button onClick={() => props.saveArmy(army)} type="submit">
                        Save
                    </button>
                </div>
            </form>
        </>
    )
}

export default EditArmy;