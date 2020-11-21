import React, { useState } from 'react'
import { useDrop } from 'react-dnd';
import { ItemTypes } from './Constants';
import DateSelection from './DateSelection';
import './gridSlot.css'
import Modal from './Modal';
import ScheduleDetails from './ScheduleDetails';

const GridSlot = (props) => {
    const [{ isOver }, drop] = useDrop({
        accept: ItemTypes.USER,
        drop: () => ({ cell: props.idx, row: props.row, startIdx: props.employees[props.row].startIdx, endIdx: props.employees[props.row].endIdx, timeOff: props.timeOff }),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
        }),
    });
    const [open, setOpen] = useState(false)
    const [click, setClick] = useState(false)

    const closeDateSelection = () => {
        props.setSelectedRow('')
        props.setSelectedCell('')
    }

    const handleEdit = () => {
        props.removeIdx('');
        props.handleSelected(props.row, props.idx)
    }

    const handleDelete = () => {
        let temp = props.employees;
        temp[props.row].startTime = ''
        temp[props.row].startIdx = ''
        temp[props.row].endTime = ''
        temp[props.row].endIdx = ''

        props.setEmployees([...temp])
        setOpen(false)

    }

    const handleClick = () => {
        if (props.viewModal && !click) {
            if (props.idx >= props.employees[props.row].startIdx && props.idx < props.employees[props.row].endIdx) {
                props.modal(0, '', props.row, props.idx);
            } else if (props.timeOff.includes(props.idx)) {
                props.modal(1, '', props.row, props.idx);
            } else {
                props.removeIdx('');
                props.handleSelected(props.row, props.idx)
            }
        }
        setClick(true);
    }

    return (
        <React.Fragment>
            {
                props.row < props.employees.length ?
                    <React.Fragment>
                        <div
                            ref={drop}
                            onClick={handleClick}
                            className={props.row === props.selectedRow && props.idx === props.selectedCell ? '' : "show-schedule-info"}
                            style={{
                                width: 54,
                                border: props.idx >= props.employees[props.row].startIdx && props.idx < props.employees[props.row].endIdx ?
                                    '1px solid ' + props.employees[props.row].boxColor : props.timeOff.includes(props.idx) ?
                                        '1px solid #E0E0E0' : '1px solid #F1F1F1',
                                backgroundColor: isOver || (props.row === props.selectedRow && props.idx === props.selectedCell) ?
                                    '#F3D06D' : props.idx >= props.employees[props.row].startIdx && props.idx < props.employees[props.row].endIdx ?
                                        props.employees[props.row].boxColor : props.timeOff.includes(props.idx) ? '#F2F2F2' : '#fff'
                            }}>
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
                            {
                                props.idx >= props.employees[props.row].startIdx && props.idx < props.employees[props.row].endIdx ?
                                    props.viewModal ? '' :
                                        <div style={{ position: 'relative', marginTop: 60 }} className="schedule-info">
                                            <ScheduleDetails
                                                edit={handleEdit}
                                                delete={() => setOpen(true)}
                                            />
                                        </div>
                                    : ''
                            }
                        </div>
                    </React.Fragment>
                    : < div style={{ width: 54, border: '1px solid #F1F1F1', backgroundColor: '#fff' }}></div>
            }
            <Modal
                open={open}
                setOpen={setOpen}
                modalText="Would you like to delete this appointment?"
                showDatePicker={handleDelete}
            />
        </React.Fragment >
    )
}

export default GridSlot;