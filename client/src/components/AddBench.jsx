import React from 'react';
import styled from 'styled-components';
import AddModal from './AddModal.jsx';

const AddDiv = styled.div`
  grid-row-start: 2;
  grid-row-end: span 3;
  grid-column-start: 2;
  grid-column-end: 3;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ButtonsDiv = styled.div`
  grid-row-start: 3;
  grid-row-end: span 3;
  grid-column-start: 2;
  grid-column-end: 3;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const AddButton = styled.button`
  padding: 10px;
  color: #00994d;
  background-color: white;
  border: none;
  font-weight: bold;
  border-radius: 12px;
  &: hover {
    cursor: pointer;
  };
  &: active {
    -webkit-box-shadow: inset 0px 0px 15px #c1c1c1;
     -moz-box-shadow: inset 0px 0px 15px #c1c1c1;
          box-shadow: inset 0px 0px 15px #c1c1c1;
  };
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