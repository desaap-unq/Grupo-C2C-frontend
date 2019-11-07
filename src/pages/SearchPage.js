import React, { Component } from 'react';

import axios from 'axios';

// const INSTRUCTOR = 'in28minutes'
// const COURSE_API_URL = 'http://localhost:8080'
// const INSTRUCTOR_API_URL = `${COURSE_API_URL}/business`

class CourseDataService extends React.Component {

    componentDidMount() {
        // const { match: { params } } = this.props;

        axios.get(`http://localhost:8080/business/1`)
        .then(( data ) => {
            console.log(data);

            // this.setState({ user });
        });
    }

    render() {
        return( <h1>
        hola mundo!
        </h1>
        );
    }
}
    
export default CourseDataService;