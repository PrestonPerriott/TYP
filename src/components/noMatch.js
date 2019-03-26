import React, {Component} from 'react'


class NoMatch extends Component {

    componentWillReceiveProps(nextProps) {

    }

    componentWillMount() {
        print('Could not find')
    }

    render() { 
    <div>
      <h3>Route not Found</h3>
    </div>
    }

}
export default NoMatch;