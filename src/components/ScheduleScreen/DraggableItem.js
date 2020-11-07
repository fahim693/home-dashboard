import React from 'react';
import { useDrag } from 'react-dnd';
import { ItemTypes } from './Constants';
const style = {
    border: '1px dashed gray',
    backgroundColor: 'white',
    padding: '0.5rem 1rem',
    marginRight: '1.5rem',
    marginBottom: '1.5rem',
    cursor: 'move',
    float: 'left',
};
export const Box = ({ name, arr, setArr }) => {
    const [{ isDragging }, drag] = useDrag({
        item: { name, type: ItemTypes.USER },
        end: (item, monitor) => {
            const dropResult = monitor.getDropResult();
            if (item && dropResult) {
                let temp = arr;
                if (item.name === 'Glass') {
                    temp[dropResult.index].bgcolor = 'darkgreen'
                    setArr([...temp])
                }
                else if (item.name === 'Banana') {
                    temp[dropResult.index].bgcolor = 'darkkhaki'
                    setArr([...temp])
                }
                else
                    temp[dropResult.index].bgcolor = '#000'
                setArr([...temp])

            }
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });
    const opacity = isDragging ? 0.4 : 1;
    return (<div ref={drag} style={{ ...style, opacity }}>
        {name}
    </div>);
};
