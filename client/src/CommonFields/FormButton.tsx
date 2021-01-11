import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { ThemeContext } from "../App";

interface IFormButtonProps {
    color?: string;
    name: string;
    onClick: (e: React.FormEvent | React.MouseEvent) => void;
    primary?: boolean;
    small?: boolean
    submit?: boolean
}

function FormButton(props: IFormButtonProps): JSX.Element {
    const context = useContext(ThemeContext);

    return (
        <Button
            variant={props.primary ? "primary" : "outline-primary"}
            onClick={props.onClick}
            type={props.submit ? "submit" : "button"}
            block
            style={{
                borderColor: props.color || context.color,
                color: props.primary ? "white" : props.color || context.color,
                backgroundColor: props.primary ? props.color || context.color : "white"
            }}
            size={props.small ? undefined : "lg"}
        >
            {props.name}
        </Button>
    )
}

export default FormButton