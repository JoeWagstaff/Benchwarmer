import React from 'react';

class ReviewBench extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    console.log(this.props)
    return(
      <div>
        {this.props.bench.name}
      </div>
    )
  }
}

export default ReviewBench;