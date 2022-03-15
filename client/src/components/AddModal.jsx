import React from 'react';
import styled from 'styled-components';
import ModalContent from './ModalContent.jsx';

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

class AddModal extends React.Component {
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
      <Modal>
        <ModalContent handleClose={this.handleClose} location={this.props.location} handleAddBench={this.props.handleAddBench}/>
      </Modal>
    )
  }
}

export default AddModal;