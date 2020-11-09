export function GetClassName(color?: string) {
    switch (color) {
        case "#FF0000":
            return "red";
        case "#0000FF":
            return "blue";
        case "#ebdb00":
            return "yellow";
        case "#6b6b6b":
            return "dark-grey";
        case "#00a00d":
            return "green";
        case "#a00097":
            return "purple";
        case "#00a7a2":
            return "teal";
        case "#996401":
            return "brown";
        default:
            return "grey"
    }
}