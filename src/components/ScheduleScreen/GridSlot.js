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

    const closeDateSelection = () => {
        props.setSelectedRow('')
        props.setSelectedCell('')
    }

    return (
        <React.Fragment>
            {
                props.row < props.employees.length ?
                    <React.Fragment>
                        <div ref={drop} style={{ width: 54, border: props.idx >= props.employees[props.row].startIdx && props.idx < props.employees[props.row].endIdx ? '1px solid ' + props.employees[props.row].boxColor : '1px solid #F1F1F1', backgroundColor: isOver || (props.row === props.selectedRow && props.idx === props.selectedCell) ? '#F3D06D' : props.idx >= props.employees[props.row].startIdx && props.idx < props.employees[props.row].endIdx ? props.employees[props.row].boxColor : '#fff' }}>
                            {
                                props.row === props.selectedRow && props.idx === props.selectedCell ?
                                    <div style={{ position: 'relative', marginTop: 60 }}>
                                        <DateSelection
                                            cancel={closeDateSelection}
                                            confirm={props.confirmSelection}
                                            setSchedule={props.setEmployees}
                                            schedule={props.employees}
                                            row={props.row}
                                        />
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