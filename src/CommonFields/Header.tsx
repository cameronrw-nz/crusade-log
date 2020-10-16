import React from "react";

import EditIcon from "../Resources/Icons/EditIcon.svg";
import { Row } from "react-bootstrap";

interface IHeaderProps {
    crusadePoints: number;
    headerText: string;
    onEdit?: () => void;
    powerLevel: number;
}

function Header(props: IHeaderProps): JSX.Element | null {
    let editIcon = undefined;
    if (props.onEdit) {
        editIcon = (
            <img
                className="icon"
                src={EditIcon}
                alt="Edit Links"
                onClick={props.onEdit}
            />
        )
    }
    return (
        <Row className="my-2 mx-1 header">
            <h2>
                {props.headerText}
                {editIcon}
            </h2>
            <div>
                <div className="heading-sub-header">
                    <b>{props.powerLevel + " "}</b>PL
                </div>
                <div className="heading-sub-header">
                    <b>{props.crusadePoints + " "}</b>CP
                </div>
            </div>
        </Row>
    )
}

export default Header;