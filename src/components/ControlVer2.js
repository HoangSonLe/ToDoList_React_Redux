import React from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions/index';
import FormVer2 from './FormVer2';


class ControlVer2 extends React.Component {
    handleAdd = () => {
        this.props.onToggleForm();
        this.props.onClear({
            id: '',
            level: 0,
            name: ''
        });
    }
    render() {
        let elemAdd = <button type="button" className="btn btn-info btn-block" onClick={this.handleAdd}><i className="fas fa-plus-circle"></i> Add Task</button>;
        if (this.props.isShowForm === true) {
            elemAdd = <button type="button" className="btn btn-success btn-block" onClick={this.handleAdd}><i className="fas fa-times-circle"></i> Close Task</button>
        }
        return (
            <div className="row">
                <div className="col-4">
                    {elemAdd}
                </div>
                <div className="col-8">
                    <FormVer2/>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        isShowForm: state.control
    };
};
const mapDispatchToProps = (dispatch, props) => {
    return {
        onToggleForm: () => {
            dispatch(actions.toggleForm());
        },
        onClear: (task)=>{
            dispatch(actions.clearItemSelected(task));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ControlVer2);
