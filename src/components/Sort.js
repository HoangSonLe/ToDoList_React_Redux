import React from 'react';

class Sort extends React.Component {
    handleSort=(e, orderBy, orderDir)=> {
        e.preventDefault();
        this.props.onClickSort(orderBy, orderDir);
    }
    render() {
        let { orderBy, orderDir } = this.props;
        let strSort = orderBy + "-" + orderDir;
        return (
            <div className="col-3">
                <div className="dropdown">
                    <div className="btn-group">
                        <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Sort By<span className="carvet" />
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <li><a onClick={(e) => this.handleSort(e, 'Name', 'ASC')} href="true" className="dropdown-item" role="button"> <i className="fas fa-sort-alpha-down"></i> NAME ACS</a></li>
                            <li><a onClick={(e) => this.handleSort(e, 'Name', 'DESC')} href="true" className="dropdown-item" role="button"> <i className="fas fa-sort-alpha-up-alt"></i> NAME DESC</a></li>
                            <div className="dropdown-divider"></div>
                            <li><a onClick={(e) => this.handleSort(e, 'Level', 'ASC')} href="true" className="dropdown-item" role="button"><i className="fas fa-sort-numeric-down"></i> LEVEL ACS</a></li>
                            <li><a onClick={(e) => this.handleSort(e, 'Level', 'DESC')} href="true" className="dropdown-item" role="button"><i className="fas fa-sort-numeric-down-alt"></i> LEVEL DESC</a></li>
                        </ul>
                        <span className="badge badge-success">{strSort}</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Sort;
