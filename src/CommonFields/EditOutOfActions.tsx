import React from "react";
import { ICrusadeUnit, IOutOfAction } from "../Constants";

interface IEditOutOfActionsProps {
    unit: ICrusadeUnit;
    editUnit: (edit: (u: ICrusadeUnit) => void) => void
}

function EditOutOfActions(props: IEditOutOfActionsProps): JSX.Element {
    function addOutOfAction(e: React.MouseEvent) {
        e.preventDefault()

        props.editUnit((u) => {
            let outOfActions = u.outOfAction
            if (!outOfActions) {
                outOfActions = [];
            }

            outOfActions.push({ isActive: true });
            u.outOfAction = outOfActions
        })
    }

    function editOutOfAction(edit: (o: IOutOfAction) => void, index: number): void {
        props.editUnit((u) => {
            const newOutOfAction = { ...u.outOfAction[index] };
            edit(newOutOfAction)
            u.outOfAction.splice(index, 1, newOutOfAction);
        })
    }

    const outOfActionDisplay: JSX.Element[] = []
    if (props.unit.outOfAction && props.unit.outOfAction.length > 0) {
        props.unit.outOfAction.forEach((outOfAction, index) => {
            if (!outOfAction.isActive) {
                return;
            }
            outOfActionDisplay.push(
                <tr>
                    <td>
                        <input
                            value={outOfAction.effect}
                            onChange={e => editOutOfAction((o) => o.effect = e.target.value, index)}
                            type="textbox"
                        />
                    </td>
                    <td>
                        <input
                            value={outOfAction.xp}
                            onChange={e => editOutOfAction((o) => o.xp = Number.parseInt(e.target.value), index)}
                            type="number"
                        />
                    </td>
                </tr>
            )
        })
    }

    return (
        <>
            <tr>
                <td>Out Of Action</td>
                <td><button onClick={addOutOfAction}>Add</button></td>
            </tr>
            <tr>
                <td>Battle Scar</td>
                <td>Experience Loss</td>
            </tr>
            {outOfActionDisplay}
        </>
    )
}

export default EditOutOfActions;