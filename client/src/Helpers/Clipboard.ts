import { ICrusadeArmy, ICrusadeUnit } from "../Constants";

export function CopyToClipboard(entity: ICrusadeArmy | ICrusadeUnit) {
    if (!navigator.clipboard) {
        window.alert("Can't copy to clipboard")
        return;
    }

    const jsonEntity = JSON.stringify(entity);
    navigator.clipboard.writeText(jsonEntity).then(() => {
        window.alert("Copied to clipboard")
    }).catch(() => {
        window.alert("Can't copy to clipboard")
    })
}