import React from 'react'
import { useDrop } from 'react-dnd';
import { ItemTypes } from './Constants';

const GridSlot = (props) => {
    const [{ isOver }, drop] = useDrop({
        accept: ItemTypes.USER,
        drop: () => ({ cell: props.idx, row: props.row }),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    });

    return (
        <React.Fragment>
            {
                props.row < props.employees.length ?
                    < div ref={drop} style={{ width: 54, border: '1px solid #F1F1F1', backgroundColor: isOver ? '#F3D06D' : '#fff' }}></div>
                    : < div style={{ width: 54, border: '1px solid #F1F1F1', backgroundColor: isOver ? '#F3D06D' : '#fff' }}></div>
            }
        </React.Fragment>
    )
}

export default GridSlot;