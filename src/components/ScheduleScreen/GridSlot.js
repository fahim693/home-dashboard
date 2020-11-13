import React from 'react'
import { useDrop } from 'react-dnd';
import { ItemTypes } from './Constants';
import DateSelection from './DateSelection';

const GridSlot = (props) => {
    const [{ isOver }, drop] = useDrop({
        accept: ItemTypes.USER,
        drop: () => ({ cell: props.idx, row: props.row }),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
        }),
    });

    return (
        <React.Fragment>
            {
                props.row < props.employees.length ?
                    <React.Fragment>
                        <div ref={drop} style={{ width: 54, border: '1px solid #F1F1F1', backgroundColor: isOver ? '#F3D06D' : '#fff' }}>
                            {
                                props.row === 0 && props.idx === 4 ?
                                    <div style={{ position: 'absolute', zIndex: 100, marginTop: 60, marginLeft: -20 }}>
                                        <DateSelection />
                                    </div>
                                    : ''
                            }
                        </div>

                    </React.Fragment>
                    : < div style={{ width: 54, border: '1px solid #F1F1F1', backgroundColor: '#fff' }}></div>
            }
        </React.Fragment>
    )
}

export default GridSlot;