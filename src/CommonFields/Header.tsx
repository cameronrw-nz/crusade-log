import React from "react";

import EditIcon from "../Resources/Icons/EditIcon.svg";
import { Row, Col } from "react-bootstrap";

interface IHeaderProps {
    headerText: string;
    onEdit?: () => void;
    subHeaderInfo?: { value?: number, name: string }[]
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
    const subHeaderInfos = props.subHeaderInfo?.map(subHeaderInfo => {
        return (
            <Row>
                <b>{subHeaderInfo.value + " "}</b>{subHeaderInfo.name}
            </Row>
        )
    })

    return (
        <Row className="my-2 mx-1 header">
            <h2>
                {props.headerText}
                {editIcon}
            </h2>
            <Row>
                <Col>
                    {subHeaderInfos}
                </Col>
            </Row>
        </Row>
    )
}

export default Header;