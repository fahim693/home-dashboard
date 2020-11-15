import React from 'react'
import { useDrag } from 'react-dnd';
import { ItemTypes } from './Constants';

const UnassignedUser = (props) => {
    const [{ isDragging }, drag] = useDrag({
        item: { type: ItemTypes.USER },
        end: (item, monitor) => {
            const dropResult = monitor.getDropResult();
            if (item && dropResult) {
                props.handleSelectedRow(dropResult.row)
                props.handleSelectedCell(dropResult.cell)
            }
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    return (
        <div
            ref={drag}
            style={{
                minWidth: 160,
                padding: '0 10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: 42,
                marginRight: 14,
                borderRadius: 6,
                fontSize: 18,
                backgroundColor: '#F3D06D',
                opacity: isDragging ? 0.4 : 1,
                cursor: 'pointer'
            }}>{props.item.name}</div>
    )
}

export default UnassignedUser;