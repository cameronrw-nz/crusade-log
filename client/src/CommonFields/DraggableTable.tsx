import React, { useMemo, useContext } from 'react'
import { useTable, Column, Row } from 'react-table'
import { DndProvider, useDrag, useDrop } from 'react-dnd'
import { TouchBackend } from "react-dnd-touch-backend"
import { ICrusadeUnit, ICrusadeArmy } from '../Constants'
import ThreeDotsVerticalIcon from "../Resources/Icons/ThreeDotsVerticalIcon.svg";
import { CalculateCrusadePoints, GetName } from '../Helpers/CrusadeUnitHelper'
import { ThemeContext } from '../App'

const DND_ITEM_TYPE = 'row'

interface IRowProps {
    index: number,
    moveRow: (dragIndex: number, hoverIndex: number) => void;
    onRowClick: () => void;
    row: Row<ICrusadeUnit>;
    updateRowPosition?: (id: number, index: number) => void;
}

function DraggableTableRow(props: IRowProps): JSX.Element {
    const dropRef = React.useRef<HTMLTableRowElement>(null)
    const dragRef = React.useRef<HTMLTableDataCellElement>(null)

    const [, drop] = useDrop({
        accept: DND_ITEM_TYPE,
        hover(item, monitor) {
            if (!dropRef.current) {
                return
            }
            const dragIndex = (item as any).index
            const hoverIndex = props.index
            // Don't replace items with themselves
            if (dragIndex === hoverIndex) {
                return
            }
            // Determine rectangle on screen
            const hoverBoundingRect = dropRef.current.getBoundingClientRect()
            // Get vertical middle
            const hoverMiddleY =
                (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
            // Determine mouse position
            const clientOffset = monitor.getClientOffset()
            // Get pixels to the top
            const hoverClientY = (clientOffset?.y ?? 0) - hoverBoundingRect.top
            // Only perform the move when the mouse has crossed half of the items height
            // When dragging downwards, only move when the cursor is below 50%
            // When dragging upwards, only move when the cursor is above 50%
            // Dragging downwards
            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return
            }
            // Dragging upwards
            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return
            }
            // Time to actually perform the action
            props.moveRow && props.moveRow(dragIndex, hoverIndex);
            // Note: we're mutating the monitor item here!
            // Generally it's better to avoid mutations,
            // but it's good here for the sake of performance
            // to avoid expensive index searches.
            (item as any).index = hoverIndex
        },
    })
    const index = props.index

    const [{ isDragging }, drag, preview] = useDrag({
        item: { type: DND_ITEM_TYPE, index },
        collect: monitor => ({
            isDragging: monitor.isDragging(),
        }),
    })

    const opacity = isDragging ? 0 : 1

    preview(drop(dropRef))
    drag(dragRef)

    return (
        <tr ref={dropRef} style={{ opacity }}>
            <td ref={dragRef} style={{ width: "36px" }}>
                <img
                    className="icon"
                    src={ThreeDotsVerticalIcon}
                    alt="Move Unit"
                />
            </td>
            {props.row.cells.map((cell: any) => {
                return <td {...cell.getCellProps()} onClick={props.onRowClick}>{cell.render('Cell')}</td>
            })}
        </tr>
    )
}

export interface ICrusadeUnitTableProps {
    name: string
    crusadePoints: number;
    id: number;
    powerLevel: number;
}

interface IDraggableTableProps {
    columns: Column<ICrusadeUnitTableProps>[];
    onRowClick: (id: number) => void;
    crusadeArmy: ICrusadeArmy;
    updateRowPosition?: (id: number, index: number) => void;
}

function DraggableTable(props: IDraggableTableProps) {
    const columns = useMemo<Column<ICrusadeUnitTableProps>[]>(() => props.columns, [props.columns])
    const context = useContext(ThemeContext);

    const crusadeUnits = props.crusadeArmy.units.map(unit => {
        return {
            ...unit, crusadePoints: CalculateCrusadePoints(unit), name: GetName(unit, context.isUsingAlternateName)
        }
    })

    const getRowId = React.useCallback(row => { return row.id }, []);

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
    } = useTable({
        data: crusadeUnits,
        columns,
        getRowId,
    })

    function moveRow(dragIndex: number, hoverIndex: number): void {
        const dragRecord = props.crusadeArmy.units[dragIndex]
        props.updateRowPosition && props.updateRowPosition(dragRecord.id, hoverIndex)
    }

    return (
        <DndProvider backend={TouchBackend} options={{ enableMouseEvents: true }}>
            <table {...getTableProps()} className="table table-striped table-bordered table-hover">
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            <th></th>
                            {headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map(
                        (row, index) => {
                            prepareRow(row)
                            return (
                                <DraggableTableRow
                                    index={index}
                                    row={row as any}
                                    onRowClick={() => props.onRowClick(row.original.id)}
                                    moveRow={moveRow}
                                    updateRowPosition={props.updateRowPosition}
                                    {...row.getRowProps()}
                                />
                            )
                        }
                    )}
                </tbody>
            </table>
        </DndProvider>
    )
}

export default DraggableTable
