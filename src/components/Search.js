import React from 'react';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            strSearch: ''
        }
    }
    handleOnChange=(event) => {
        this.setState({ strSearch: event.target.value });
        this.props.onClickGo(event.target.value);
    }
    handleClear=()=> {
        this.setState({ strSearch: '' });
    }
    handleSearch=()=> {
        this.props.onClickGo(this.state.strSearch);
    }
    render() {
        return (
            <div className="col-4">
                <div className="input-group mb-3">
                    <input value={this.state.strSearch} onChange={this.handleOnChange} type="text" className="form-control" placeholder="Search for..." aria-label="Recipient's username" aria-describedby="basic-addon2" />
                    <div className="input-group-append">
                        <button className="btn btn-success" type="button" onClick={this.handleSearch}><i className="fas fa-search"></i> Go !</button>
                        <button className="btn btn-warning" type="button" onClick={this.handleClear}><i className="fas fa-eraser"></i> Clear</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Search;
