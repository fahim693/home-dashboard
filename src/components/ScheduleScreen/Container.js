import React, { useState } from 'react';
import { Dustbin } from './DropableArea';
import { Box } from './DraggableItem';


const Container = () => {
    const [arr, setArr] = useState([
        {
            bgcolor: '#fff'
        },
        {
            bgcolor: '#fff'
        },
    ])
    // const [bgcolor, setBgColor] = useState('#fff')
    return (<div>
        <div style={{ overflow: 'hidden', clear: 'both' }}>
            {arr.map((item, idx) => {
                return (
                    <Dustbin background={item.bgcolor} idx={idx} />
                )
            })}
        </div>
        <div style={{ overflow: 'hidden', clear: 'both' }}>
            <Box name="Glass" arr={arr} setArr={setArr} />
            <Box name="Banana" arr={arr} setArr={setArr} />
            <Box name="Paper" arr={arr} setArr={setArr} />
        </div>
    </div>);
}

export default Container;
