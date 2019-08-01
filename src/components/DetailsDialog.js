import React from "react"
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Cancel';


class DetailsDialog extends React.Component {

    constructor(props) {
        super(props)
        this.onSubmit = props.onSubmit;
        this.timeInterval = props.timeInterval;
        this.handleOpenDialog = this.handleOpenDialog.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.buttonLabel = 'BOOK THIS SLOT'
        this.state = {
            isFormFilled: false,
            open: false,
            errorText: '',
            timeSlotData: {
                name: '',
                phoneNumber: ''
            }
        }
        this.oldTimeSlotData = this.state.timeSlotData;
    }

    render() {
        const dataButton = this.buttonLabel === 'UPDATE' ?
            <Button color="primary" onClick={this.handleOpenDialog}><EditIcon /></Button> :
            <Button color='white' onClick={this.handleOpenDialog}>{this.buttonLabel}</Button>
        return (
            <div>
                {
                    this.state.isFormFilled
                        ? <Button color="primary"><DeleteIcon onClick={this.handleDelete} /> </Button>
                        : null
                }
                {dataButton}
                <Dialog
                    open={this.state.open}
                    onClose={this.handleSave}>
                    <DialogTitle>Book Appointment for the {this.timeInterval} Time Slot</DialogTitle>
                    <DialogContent>
                        <TextField
                            autoFocus={true}
                            id="name"
                            label="Name"
                            type="test"
                            fullWidth={true}
                            value={this.state.timeSlotData.name}
                            onChange={this.handleNameChange} />
                        <TextField
                            error ={this.state.errorText.length === 0 ? false : true }
                            id="phone"
                            label="Phone Number (Format 10 digit: xxxxxxxxxx)"
                            type="phone"
                            fullWidth={true}
                            helperText={this.state.errorText}
                            value={this.state.timeSlotData.phoneNumber}
                            onChange={this.handlePhoneNumberChange} />
                    </DialogContent>
                    <DialogActions>
                        <Button color="primary" onClick={this.handleSave}>
                            <SaveIcon />
                            Save
                        </Button>
                        <Button onClick={this.handleCancel} color="secondary">
                            <CancelIcon />
                            Cancel
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }

    

    handleDelete() {
        this.buttonLabel = 'BOOK THIS SLOT';
        const timeSlotData = {
            name: '',
            phoneNumber: ''
        };
        this.setState({
            isFormFilled: false,
            open: false,
            timeSlotData
        });
        this.onSubmit(timeSlotData);
    }

    handleOpenDialog() {
        this.setState({ open: true });
    }

    handleSave() {
        if (!(this.state.timeSlotData.name.trim() === "")
            && !(this.state.timeSlotData.phoneNumber.trim() === "")
            && !(isNaN(this.state.timeSlotData.phoneNumber.trim()))
            && (this.state.timeSlotData.phoneNumber.trim().length===10)) {
            this.setState({
                isFormFilled: true,
                open: false,
                timeSlotData: {
                    name: this.state.timeSlotData.name.trim(),
                    phoneNumber: this.state.timeSlotData.phoneNumber.trim()
                }
            });
            this.oldTimeSlotData = this.state.timeSlotData;
            this.buttonLabel = 'UPDATE';
            this.onSubmit(this.state.timeSlotData);
        }
        else{
            this.setState({
                errorText: "Invalid Phone Number"
            })
        }
    }

    handleNameChange = event => {
        this.setState({
            open: this.state.open,
            timeSlotData: {
                name: event.target.value,
                phoneNumber: this.state.timeSlotData.phoneNumber
            }
        });
    }
    handlePhoneNumberChange = event => {
        this.setState({
            errorText: '',
            open: this.state.open,
            timeSlotData: {
                name: this.state.timeSlotData.name,
                phoneNumber: event.target.value
            }
        });
    }
    
    handleCancel() {
        this.setState({
            open: false,
            timeSlotData: this.oldTimeSlotData
        });
    }
}

export default DetailsDialog