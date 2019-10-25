import React from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions/index';
import * as types from './../constants/ActionTypes';
import swal from 'sweetalert';

class FormVer2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            level: 0,
            name: '',
            buttonForm: 'Submit'
        }
    }
    UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps.itemSelected === null) {
            this.handleReset();
        }
        else if (nextProps.itemSelected.type === types.EDIT_TASK) {
            this.updateItem(nextProps.itemSelected.task);
        }
        if (nextProps.itemSelected.type === types.CLEAR_ITEM) {
            this.onResetState();
        };

    }
    updateItem = (item) => {
        this.setState({
            buttonForm: 'Edit',
            id: item.id,
            level: item.level,
            name: item.name
        })
    }
    onResetState = () => {
        this.setState({
            id: '',
            name: '',
            level: 0,
            buttonForm: 'Submit'
        });
    }
    handleReset = () => {
        this.props.onClear({
            id: '',
            level: 0,
            name: ''
        });
        this.onResetState();

    }
    handleCancle = () => {
        this.props.onClickCancle();
    }
    handleChange = (event) => {
        // this.setState({level : event.target.value});
        const target = event.target;
        // const value = target.type === 'checkbox' ? target.checked : target.value;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        let item = {
            id: this.state.id,
            name: this.state.name,
            level: this.state.level
        }
        this.props.onSaveTask(item);
        swal({
            title: "Success!",
            text: "Item's updated!",
            icon: "success",
            timer: 800,
            buttons: false,
        });
    }

    render() {
        if (!this.props.isShowForm) return null;
        return (
            <div className="row">
                <div >
                    <form onSubmit={this.handleSubmit} onReset={this.handleReset} className="form-inline">
                        <div className="form-group" style={{ marginRight: 10 }}>
                            <div className="sr-only" htmlFor="task_name">Label</div>
                            <input value={this.state.name} type="text" name="name" onChange={this.handleChange} className="form-control" placeholder="Task Name" required />
                        </div>
                        <div className="form-group" style={{ marginRight: 10 }}>
                            <div className="sr-only" htmlFor="inputDs">Label</div>
                            <select value={this.state.level} name="level" onChange={this.handleChange} className="form-control" required >
                                <option value={0}>Small</option>
                                <option value={1}>Medium</option>
                                <option value={2}>High</option>
                            </select>
                        </div>
                        <button style={{ marginRight: 10 }} className="btn btn-primary" type="submit"><i className="fas fa-edit"></i> {this.state.buttonForm}</button>
                        <button className="btn btn-secondary" type="reset"><i className="fas fa-eraser"></i> Clear</button>
                    </form>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        isShowForm: state.control,
        itemSelected: state.itemEditing
    };
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onSaveTask: (task) => {
            dispatch(actions.saveTask(task));
        },
        onClear: (task) => {
            dispatch(actions.clearItemSelected(task));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(FormVer2);
