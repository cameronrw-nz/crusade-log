import React, { useState } from "react";
import { ICrusadeArmy } from "./Constants";
import { CopyToClipboard } from "./Helpers/Clipboard";
import CopyIcon from "./Resources/Icons/CopyIcon.svg";
import DeleteIcon from "./Resources/Icons/DeleteIcon.svg";


interface IEditArmyProps {
    crusadeArmy: ICrusadeArmy;
    goBack: () => void;
    handleDeleteArmy: () => void;
    saveArmy: (unit: ICrusadeArmy) => void;
}

function EditArmy(props: IEditArmyProps) {
    const [isNewArmy] = useState<boolean>(props.crusadeArmy.name === "")
    const [army, setArmy] = useState<ICrusadeArmy>(props.crusadeArmy);

    function editArmy(func: (a: ICrusadeArmy) => void) {
        const newArmy = { ...army }
        func(newArmy)
        setArmy(newArmy)
    }

    function handleDelete(): void {
        if (window.confirm("Are you sure you wish to delete this army?")) {
            props.handleDeleteArmy();
        }
    }

    return (
        <>
            <form onSubmit={() => props.saveArmy(army)} id="edit-army">
                <div className="header">
                    <h1>
                        {(isNewArmy ? "Add Army: " : "Edit Army: ") + army.name}
                        <img
                            className="icon"
                            src={DeleteIcon}
                            alt="Edit Links"
                            onClick={handleDelete}
                        />
                    </h1>
                </div>
                <div className="expand">
                    <table className="edittable-table">
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
                        <tr>
                            <td>
                                Copy from Clipboard:
                            </td>
                            <td>
                                <img
                                    className="icon"
                                    src={CopyIcon}
                                    alt="Edit Links"
                                    onClick={() => CopyToClipboard(props.crusadeArmy)}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <textarea
                                    style={{ width: "calc(100% - 8px)" }}
                                    onChange={e => {
                                        const newArmy = JSON.parse(e.target.value)
                                        newArmy.id = army.id;
                                        setArmy(newArmy)
                                    }}
                                    value={JSON.stringify(army)}
                                />
                            </td>
                        </tr>
                    </table>
                </div>
                <div className="button-container">
                    <button onClick={props.goBack} type="button">
                        Back
                    </button>
                    <button className="primary" onClick={() => props.saveArmy(army)} type="submit">
                        Save
                    </button>
                </div>
            </form>
        </>
    )
}

export default EditArmy;