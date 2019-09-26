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
            search: e.target.value
        })

    }

    componentDidUpdate() {

    }

    submitSearch() {
        // debugger
        this.props.search(this.state.search.toString());
    }

    render() {

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
                    <input className="nav-bar-search-bar" onChange={this.handleChange} />

                </div>
            </div>
        )
    }

}

export default Search;



