import React from "react";
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
    return (
        <ThemeContext.Consumer>
            {color =>
                <Button
                    variant={props.primary ? "primary" : "outline-primary"}
                    onClick={props.onClick}
                    type={props.submit ? "submit" : "button"}
                    block
                    style={{
                        borderColor: props.color || color,
                        color: props.primary ? "white" : props.color || color,
                        backgroundColor: props.primary ? props.color || color : "white"
                    }}
                    size={props.small ? undefined : "lg"}
                >
                    {props.name}
                </Button>
            }
        </ThemeContext.Consumer>
    )
}

export default FormButton