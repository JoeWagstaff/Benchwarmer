import React from 'react';
import styled from 'styled-components';
import ReviewModalContent from './ReviewModalContent.jsx';

const Modal = styled.div`
display: block;
position: fixed;
z-index: 3;
padding-top: 100px;
left: 0;
top: 0;
width: 100%;
height: 70%;
overflow: auto;
background-color: rgb(0,0,0);
background-color: rgba(0,0,0,0.4);
`;

class ReviewModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.handleClose = this.handleClose.bind(this);
  }

  handleClose() {
    this.props.handleClose();
  }

  render() {
    return (
      <ReviewModalContent handleAddReview={this.props.handleAddReview} handleClose={this.handleClose} bench={this.props.bench}/>
    )
  }
}

export default ReviewModal;