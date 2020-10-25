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
    const subHeaderInfos = props.subHeaderInfo?.map((subHeaderInfo, index) => {
        return (
            <Row key={index}>
                <b>{subHeaderInfo.value + " "}</b>{subHeaderInfo.name}
            </Row>
        )
    })

    return (
        <Row className="my-2 mx-1 header">
            <Col as="h2" className="p-0" xs={9}>
                {props.headerText}
                {editIcon}

            </Col>
            <Col xs={2} className="pl-0">
                {subHeaderInfos}
            </Col>
        </Row>
    )
}

export default Header;