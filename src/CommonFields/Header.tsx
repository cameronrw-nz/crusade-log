import React from "react";

import EditIcon from "../Resources/Icons/EditIcon.svg";

interface IHeaderProps {
    crusadePoints: number;
    headerText: string;
    onEdit: () => void;
    powerLevel: number;
}

function Header(props: IHeaderProps): JSX.Element | null {
    return (
        <div className="header">
            <h1>
                {props.headerText}
                <img
                    className="icon"
                    src={EditIcon}
                    alt="Edit Links"
                    onClick={props.onEdit}
                />
            </h1>
            <div>
                <div className="heading-sub-header">
                    <b>{props.powerLevel + " "}</b>PL
                </div>
                <div className="heading-sub-header">
                    <b>{props.crusadePoints + " "}</b>CP
                </div>
            </div>
        </div>
    )
}

export default Header;