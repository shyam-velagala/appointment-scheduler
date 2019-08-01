import React from "react"
import ListItem from '@material-ui/core/ListItem';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DetailsDialog from './DetailsDialog'

const styledBy = (property, mapping) => props => mapping[props[property]];

const StyledButton = withStyles({
    root: {
        background: styledBy('color', {
            red: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
            default: 'linear-gradient(45deg, #0097a7 30%, #26c6da 90%)',
        }),
         borderRadius: 3,
         border: 10,
         color: 'white',
         height: 48,
         padding: '0 50px',
        boxShadow: styledBy('color', {
            red: '0 3px 5px 2px rgba(255, 105, 135, .3)',
            default: '0 3px 5px 2px rgba(11, 103, 10, .10)',
        }),
    },
})(({ classes, color, ...other }) => <Button className={classes.root} {...other} />);

class TimeSlot extends React.Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.state = {
            color: 'default',
            isActive: false
        }
    }
    render() {
        return (
            <ListItem>
                <div className={"container"}>
                    <div>{this.props.timeInterval}</div>
                    <div>
                    <StyledButton color={this.state.color} onClick={this.handleChange} >
                        <DetailsDialog onSubmit={this.onSubmit} timeInterval={this.props.timeInterval} timeSlotData={this.currentTimeSlotData} />
                    </StyledButton>
                    </div>
                </div>
            </ListItem>
        )
    }

    handleChange() {
        this.setState({
            isActive: true
        })
    }

    onSubmit(timeSlotData) {
        this.setState({
            color: !(timeSlotData.name.trim() === "")
                && !(timeSlotData.phoneNumber.trim() === "") ? 'red' : 'default',
            isActive: false
        });
    }
}

export default TimeSlot