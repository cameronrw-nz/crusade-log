import { ICrusadeArmy } from "../Constants";

export function CopyToClipboard(army: ICrusadeArmy) {
    if (!navigator.clipboard) {
        window.alert("Can't copy to clipboard")
        return;
    }

    const jsonCrusadeArmy = JSON.stringify(army);
    navigator.clipboard.writeText(jsonCrusadeArmy).then(() => {
        window.alert("Copied to clipboard")
    }).catch(() => {
        window.alert("Can't copy to clipboard")
    })
}