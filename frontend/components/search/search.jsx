import React from 'react';

class Search extends React.Component {


    constructor(props) {
        super(props)

        this.state = {
            searchString: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.submitSearch = this.submitSearch.bind(this);

    }

    handleChange(e) {

        this.setState({
            searchString: e.target.value
        })

    }

    componentDidUpdate() {

    }

    submitSearch() {

    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     if (this.props.history != nextProps.history) {
    //         this.state.searchString = "";
    //     }
    // }

    render() {


        let searchClass;

        if (this.state.searchString == "") {
            searchClass = "search-hidden";
        } else {
            searchClass = "search-list";
        }



        return (
            <div>
                <div className="search-bar-div">
                    <button className="fas fa-search" onClick={() => { this.props.search(this.state.searchString) }}></button>
                    <input className="nav-bar-search-bar" autoComplete="off" onChange={this.handleChange} name="search" />

                </div>
                <ul className={`${searchClass}`}>
                    {
                        Object.values(this.props.allTracks).map(track => {
                            if (track.title.includes(`${this.state.searchString}`)) {
                                return <li className="search-result-title" key={`${track.title.toString()}`
                                } onClick={() => this.props.history.push(`/tracks/${track.id}`)}>{track.title}</li>
                            }
                        })
                    }
                </ul>
            </div>
        )
    }

}

export default Search;



