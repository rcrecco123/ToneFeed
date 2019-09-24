import React from 'react';

class Search extends React.Component {


    constructor(props) {
        super(props)

        this.state = {
            search: ""
        }

        this.handleChange = this.handleChange.bind(this);

    }

    handleChange(e) {
        this.setState({
            search: e.target.value
        })

    }

    componentDidUpdate() {

    }

    submitSearch() {
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
                    <button className="fas fa-search" onClick={this.props.search}></button>
                    <input className="nav-bar-search-bar" onChange={this.handleChange} />

                </div>
            </div>
        )
    }

}

export default Search;



