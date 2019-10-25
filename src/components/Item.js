import React from 'react';
import * as actions from './../actions/index';
import { connect } from 'react-redux';

class Item extends React.Component {

    showElementLevel(level) {
        let elemLevel = <h5><span className="badge badge-pill badge-warning">Small</span></h5>;
        if (level === 1) {
            elemLevel = <h5><span className="badge badge-pill badge-success">Medium</span></h5>;
        }
        else if (level === 2) {
            elemLevel = <h5><span className="badge badge-pill badge-danger">High</span></h5>;
        }
        return elemLevel;
    }
    handleDelete = (id) => {
        this.props.onClickDelete(id);
    }
    handleEdit = (task) => {
        this.props.onEditForm();
        this.props.onEditTask(task)
    }
    render() {
        const item = this.props.item;
        return (
            <tr>
                <th scope="row">{this.props.index + 1}</th>
                <td>{item.name}</td>
                <td>{this.showElementLevel(item.level)}</td>
                <td>
                    <a style={{ marginRight: 10 }}
                        onClick={(e) => {
                            e.preventDefault();
                            this.handleEdit(item);
                        }}
                        href="/" role="button" className="btn btn-warning"><i className="fas fa-edit"></i> Edit</a>
                    <a onClick={(e) => {
                        e.preventDefault();
                        this.handleDelete(item.id);
                    }}
                        href="/" role="button" className="btn btn-danger"><i className="fas fa-trash-alt"></i> Delete</a>
                </td>
            </tr>
        );
    }
}
const mapStateToProps = state => {
    return {
        itemSelected: state.itemEditing
    };
};
const mapDispatchToProps = (dispatch, props) => {
    return {
        onEditForm: () => {
            dispatch(actions.openForm());
        },
        onClickDelete: (id) => {
            dispatch(actions.deleteTask(id));
        },
        onEditTask: (task) => {
            dispatch(actions.editTask(task));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Item);

