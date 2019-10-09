import React from 'react';

class Search extends React.Component {


    constructor(props) {
        super(props)

        this.state = {
            searchString: "water"
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
        // let filteredTracks = this.props.tracks.filter(
        //     track => {
        //         return track.name.toLowerCase()
        //             .indexOf(this.state.search.toLowerCase()) !== -1;
        //     }
        // );

        return (
            <div>
                {/* <ul>
                    {this.props.tracks.map(track => {
                        return <li>{track.title}</li>
                    })}
                </ul> */}
                <div>
                    <button className="fas fa-search" onClick={() => { this.props.search(this.state.searchString) }}></button>
                    <input className="nav-bar-search-bar" onChange={this.handleChange} name="search" />

                </div>
            </div>
        )
    }

}

export default Search;



