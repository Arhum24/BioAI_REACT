import React, { Component } from 'react';
import FilterResults from 'react-filter-search';

export default class Show_Appointment extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            value: ''
        };
    }
    componentWillMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => this.setState({ data: json }));
    }
    handleChange = event => {
        const { value } = event.target;
        this.setState({ value });
    };
    render() {
        const { data, value } = this.state;
        return (
            <div>
                <input type="text" value={value} onChange={this.handleChange} />
                <FilterResults
                    value={value}
                    data={data}
                    renderResults={results => (
                        <div>
                            {results.map(el => (
                                <div>
                                    <span>{el.name}</span>
                                    <span>{el.phone_number}</span>
                                    <span>{el.date}</span>
                                </div>
                            ))}
                        </div>
                    )}
                />
            </div>
        );
    }
}