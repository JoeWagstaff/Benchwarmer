import React from 'react';
import styled from 'styled-components';

const Content = styled.div`
  background-color: white;
  margin: auto;
  border: 1px solid black;
  width: 75%;
  height: 75%;
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  grid-template-rows: 20% 20% 20% 20% 20%;
  color:black;
`;
const CloseButton = styled.span`
  color: #aaaaaa;
  grid-row-start: 1;
  grid-column-start: 4;
  justify-self: end;
  padding-right: 10px;
  font-size: 28px;
  font-weight: bold;
  &: hover {
    cursor: pointer;
    color: black;
  }
`;

const BenchName = styled.div`
  grid-row-start: 1;
  grid-column-start: 1;
  grid-column-end: span 4;
  align-self: start;
`;

const AddForm = styled.form`
  grid-row-start: 2;
  grid-column-start: 1;
  grid-column-end: span 4;
`;

const NextButton = styled.button`
  grid-row-start: 4;
  grid-column-start: 2;
  grid-column-end: 3;
`;

class ModalContent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      step: 1,
      benchName: '',
      description: '',
      submitName: '',
      submitDesc: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.nextStep = this.nextStep.bind(this);
    this.previousStep = this.previousStep.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    const target = event.target;
    const name = target.name;
    this.setState({
      [name]: event.target.value,
    });
  }

   //Go back a step in modal process
   previousStep () {
    this.setState({
      step: this.state.step - 1
    });
  }

  //Go forward to the next step
  nextStep (e) {
    e.preventDefault();
    this.setState({
      step: this.state.step + 1,
      submitName: this.state.benchName,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const newBench = {
      name: this.state.benchName,
      description: this.state.description,
      location: this.props.location
    };
    this.props.handleAddBench(newBench);
    this.props.handleClose();
    this.setState({
      step: 1,
      benchName: '',
      description: '',
      submitName: '',
      submitDesc: '',
    })
  }

  render() {
    const { benchName, description, step} = this.state;

    switch(step) {
      case 1:
        return (
            <Content>
              <CloseButton onClick={this.props.handleClose}>&times;</CloseButton>
              <AddForm>
                <BenchName>
                  Bench name:
                </BenchName>
                <input type="text" name="benchName" value={benchName} placeholder="Bench Name" onChange={this.handleChange} />
                <NextButton type="submit" onClick={this.nextStep}>
                  Next
                </NextButton>
              </AddForm>
            </Content>
        )
      case 2:
        return (
            <Content>
              <CloseButton onClick={this.props.handleClose}>&times;</CloseButton>
              <form>
                <label>
                  Description:
                </label>
                <input type="text" name="description" value={description} placeholder="Bench Description" onChange={this.handleChange} />
                <button type="submit" onClick={this.handleSubmit}>
                  Submit Bench
                </button>
              </form>
            </Content>
        )
    }
  }
}

export default ModalContent;