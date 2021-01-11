import React, { useContext } from "react";

import EditIcon from "../Resources/Icons/EditIcon.svg";
import { Row, Col, Form } from "react-bootstrap";
import { GetClassName } from "../Helpers/ClassNameHelper";
import { ThemeContext } from "../App";

interface IHeaderProps {
    headerText: string;
    onEdit?: () => void;
    subHeaderInfo?: { value?: number, name: string }[]
}

function Header(props: IHeaderProps): JSX.Element | null {
    const context = useContext(ThemeContext);

    let editIcon: JSX.Element | undefined = undefined;
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
            <Col xs={2} className="p-0 pt-2">
                <Form.Check
                    type="switch"
                    id="custom-switch"
                    className={GetClassName(context.color)}
                    label=""
                    checked={context.isUsingAlternateName || false}
                    onClick={context.toggleIsUsingAlternateName}
                />
            </Col>
            <Col xs={1} className="pl-0">
                {subHeaderInfos}
            </Col>
        </Row>
    )
}

export default Header;