import React from 'react'
import { useDrag } from 'react-dnd';
import { ItemTypes } from './Constants';

const UnassignedUser = (props) => {
    const [{ isDragging }, drag] = useDrag({
        item: { type: ItemTypes.USER },
        end: (item, monitor) => {
            const dropResult = monitor.getDropResult();
            if (item && dropResult) {
                console.log('cell/row', dropResult.cell, dropResult.row);
                //     let temp = arr;
                //     if (item.name === 'Glass') {
                //         temp[dropResult.index].bgcolor = 'darkgreen'
                //         setArr([...temp])
                //     }
                //     else if (item.name === 'Banana') {
                //         temp[dropResult.index].bgcolor = 'darkkhaki'
                //         setArr([...temp])
                //     }
                //     else
                //         temp[dropResult.index].bgcolor = '#000'
                //     setArr([...temp])

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