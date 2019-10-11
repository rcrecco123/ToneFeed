import React from 'react';

class Search extends React.Component {


    constructor(props) {
        super(props)

        this.state = {
            searchString: ""
        }
        // debugger
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

    render() {
        debugger
        // if (this.props.allTracks != undefined) {

        //     let trackArr = Object.values(this.props.allTracks)
        //     debugger
        //     let filteredTracks = this.props.trackArr.filter(
        //         track => {
        //             return track.name.toLowerCase()
        //                 .indexOf(this.state.search.toLowerCase()) !== -1;
        //         }
        //     );

        // }


        return (
            <div>
                <div>
                    <button className="fas fa-search" onClick={() => { this.props.search(this.state.searchString) }}></button>
                    <input className="nav-bar-search-bar" onChange={this.handleChange} name="search" />

                </div>
                <ul className="search-list">
                    {Object.values(this.props.allTracks).map(track => {
                        if (track.title.includes(`${this.state.searchString}`)) {
                            return <li key={`${track.title.toString()}`}>{track.title}</li>
                        }
                    })}
                </ul>
            </div>
        )
    }

}

export default Search;



