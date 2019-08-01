import React from "react"
import TimeSlot from "./TimeSlot";
import List from '@material-ui/core/List';

class AppointmentList extends React.Component {

    constructor(props) {
        super(props)
        this.createTimeSlots = this.createTimeSlots.bind(this);
    }

    createTimeSlots() {
        const appointments = [];
        for (let i = 9, len = 17; i < len; i++) {
            var stTime = '';
            var enTime = '';
            if (24 - i <= 11) {
                enTime = ((i + 1) - 12) + " PM"
                stTime = (i - 12) + " PM"
            } else {
                if (i === 12) {
                    stTime = i + " PM"
                    enTime = ((i + 1) - 12) + " PM"
                }
                else {
                    stTime = i + " AM"
                    if (i === 11)
                        enTime = (i + 1) + " PM"
                    else
                        enTime = (i + 1) + " AM"
                }
            }
            appointments.push({
                id: i - 8,
                timeInterval: stTime + ' to ' + enTime
            });
        }
        return appointments;
    }

    render() {
        const appointmentLst = this.createTimeSlots().map((appointment) => (
            <TimeSlot timeInterval={appointment.timeInterval} key={appointment.id} />
        ))
        return (
            <List className="appointment-list">
                {appointmentLst}
            </List>
        )
    }
}

export default AppointmentList