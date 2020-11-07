import React from 'react';
import { useDrop } from 'react-dnd';
import { ItemTypes } from './Constants';
const style = {
    height: '12rem',
    width: '12rem',
    marginRight: '1.5rem',
    marginBottom: '1.5rem',
    color: 'white',
    padding: '1rem',
    textAlign: 'center',
    fontSize: '1rem',
    lineHeight: 'normal',
    float: 'left',
    border: '1px solid #000'
};
export const Dustbin = (props) => {
    const [{ canDrop, isOver }, drop] = useDrop({
        accept: ItemTypes.USER,
        drop: () => ({ index: props.idx }),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    });
    const isActive = canDrop && isOver;
    // let backgroundColor = '#222';
    // if (isActive) {
    //     backgroundColor = 'darkgreen';
    // }
    // else if (canDrop) {
    //     backgroundColor = 'darkkhaki';
    // }
    return (<div ref={drop} style={{ ...style, backgroundColor: props.background }}>
        {isActive ? 'Release to drop' : 'Drag a box here'}
    </div>);
};
