import React from 'react';
import Item from './Item';
import { connect } from 'react-redux';
import * as actions from './../actions/index';

class List extends React.Component {
    UNSAFE_componentWillReceiveProps(nextProps) {
        localStorage.setItem('task', JSON.stringify(nextProps.items));
    }
    constructor(props) {
        super(props);
        this.state = {
            strSearch: '',
            orderBy: 'Name',
            orderDir: 'ASC',
        }
    }
    handleOnChange = (event) => {
        this.setState({ strSearch: event.target.value });
    }

    handleSort = (e, orderBy, orderDir) => {
        e.preventDefault();
        this.setState({
            orderBy: orderBy,
            orderDir: orderDir
        });
    }
    sortFunction(orderBy, orderDir, items) {
        if (orderBy === 'Name') {
            //sort không phân biệt hoa thường
            items = items.sort((a, b) => (a.name.toLowerCase().charAt(0) > b.name.toLowerCase().charAt(0)) ? 1 : -1)
            if (orderDir === 'DESC') items = items.reverse();
        }
        else if (orderBy === 'Level') {
            items = items.sort((a, b) => (a.level > b.level) ? 1 : -1)
            if (orderDir === 'DESC') items = items.reverse();
            // else items = items.sort((a, b) => (a.level < b.level) ? 1 : -1);
        }
        return items;
    }
    render() {
        let { orderBy, orderDir } = this.state;
        let strSort = orderBy + "-" + orderDir;
        let items = this.props.items;

        // filter theo search
        items = items.filter(item => {
            return item.name.toLowerCase().indexOf(this.state.strSearch.toLowerCase()) !== -1;
        });

        // sort
        items = this.sortFunction(orderBy, orderDir, items);

        const elemItem = items.map((item, index) => {
            return <Item key={index} item={item} index={index}></Item>;
        })
        return (
            <div className="col-12 mt-3">
                <div className="card mb-3">
                    <div className="card-body">
                        <h3 className="card-title">List Task</h3>
                        <table className="table  table-hover text-center">
                            <thead className="thead-dark">
                                <tr>
                                    <th scope="col" className="text-center" style={{ width: '10%' }}>#</th>
                                    <th scope="col" className="text-center" style={{ width: '50%' }}>Task</th>
                                    <th scope="col" className="text-center" style={{ width: '20%' }}>Level</th>
                                    <th scope="col" className="text-center" style={{ width: '20%' }}>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">Filter</th>
                                    <td><input
                                        value={this.state.strSearch}
                                        onChange={this.handleOnChange}
                                        type="text" className="form-control" placeholder="Search"
                                        aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                    </td>
                                    <td>
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                {strSort}<span className="carvet" />
                                            </button>
                                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                <li><a onClick={(e) => this.handleSort(e, 'Name', 'ASC')} href="true" className="dropdown-item" role="button"> <i className="fas fa-sort-alpha-down"></i> NAME ACS</a></li>
                                                <li><a onClick={(e) => this.handleSort(e, 'Name', 'DESC')} href="true" className="dropdown-item" role="button"> <i className="fas fa-sort-alpha-up-alt"></i> NAME DESC</a></li>
                                                <div className="dropdown-divider"></div>
                                                <li><a onClick={(e) => this.handleSort(e, 'Level', 'ASC')} href="true" className="dropdown-item" role="button"><i className="fas fa-sort-numeric-down"></i> LEVEL ACS</a></li>
                                                <li><a onClick={(e) => this.handleSort(e, 'Level', 'DESC')} href="true" className="dropdown-item" role="button"><i className="fas fa-sort-numeric-down-alt"></i> LEVEL DESC</a></li>
                                            </ul>
                                        </div>
                                    </td>
                                    <td></td>
                                </tr>
                                {elemItem}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}
var mapStateToProps = (state) => {
    return {
        items: state.tasks
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
 
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(List);
