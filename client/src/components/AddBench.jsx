import React from 'react';
import styled from 'styled-components';
import AddModal from './AddModal.jsx';

const AddDiv = styled.div`
  grid-row-start: 2;
  grid-row-end: span 3;
  grid-column-start: 2;
  grid-column-end: 3;
`
const AddButton = styled.button`
  padding: 10px;
  background-color: #00994d;
  border-color: orange;
  font-weight: bold;
`
class AddBench extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      showModal: false,
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  //Click on add bench button opens modal
  handleClick(event) {
    event.preventDefault();
    this.setState({
      showModal: true,
    });
  }

 //Click on x closes modal
  handleClose() {
    this.setState({
      showModal: false,
    });
  }

  render() {
    const { showModal } = this.state;
    if (showModal) {
      return (
        <AddDiv>
          <AddButton onClick={this.handleClick}>
            There's a bench here!
          </AddButton>
          <AddModal location={this.props.location} handleAddBench={this.props.handleAddBench} handleClose={this.handleClose}/>
        </AddDiv>
      )
    }
    return (
      <AddDiv>
        <AddButton onClick={this.handleClick}>
          There's a bench here!
        </AddButton>
      </AddDiv>
    )
  }
}

export default AddBench;