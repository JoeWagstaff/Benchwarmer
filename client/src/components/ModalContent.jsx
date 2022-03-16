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
  align-self: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AddForm = styled.form`
  grid-row-start: 2;
  grid-row-end: span 5;
  grid-column-start: 1;
  grid-column-end: span 4;
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  grid-template-rows: 25% 25% 25% 25%;
`;

const NextButton = styled.button`
  grid-row-start: 5;
  grid-column-start: 1;
  grid-column-end: 1;
  place-self: center;
  padding: 10px;
  color: white;
  background-color: #00994d;
  border: none;
  font-weight: bold;
  border-radius: 12px;
  &: hover {
    cursor: pointer;
  }
  &: active {
    -webkit-box-shadow: inset 0px 0px 15px #c1c1c1;
     -moz-box-shadow: inset 0px 0px 15px #c1c1c1;
          box-shadow: inset 0px 0px 15px #c1c1c1;
  }
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ButtonDiv = styled.div`
  grid-row-start: 3;
  grid-column-start: 1;
  grid-column-end: span 4;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InputDiv = styled.div`
  grid-row-start: 2;
  grid-column-start:1;
  grid-column-end: span 4;
  display: flex;
  align-items: center;
  justify-content: center;
`
const InputField = styled.input`
  height: 50px;
  width: 250px;
`;

const FinalDiv = styled.div`
grid-row-start: 2;
  grid-column-start:1;
  grid-column-end: span 4;
  display: flex;
  align-items: center;
  justify-content: center;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
`;

const FinalName = styled.div`
  grid-row-start: 1;
  grid-column-start: 1;
  grid-column-end: span 3;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const FinalDesc = styled.div`
  grid-row-start: 2;
  grid-column-start: 1;
  grid-column-end: span 3;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const FinalScore = styled.div`
  grid-row-start: 3;
  grid-column-start: 1;
  grid-column-end: span 3;
  display: flex;
  align-items: center;
  justify-content: center;
`;

class ModalContent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      step: 1,
      name: '',
      description: '',
      score: 0,
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.nextStep = this.nextStep.bind(this);
    this.previousStep = this.previousStep.bind(this);
    this.onValueChange = this.onValueChange.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    const target = event.target;
    const name = target.name;
    this.setState({
      [name]: event.target.value,
    });
  }

  onValueChange(event) {
    this.setState({
      score: event.target.value
    });
  }

   //Go back a step in modal process
   previousStep (e) {
    e.preventDefault();
    this.setState({
      step: this.state.step - 1
    });
  }

  //Go forward to the next step
  nextStep (e) {
    e.preventDefault();
    const target = event.target;
    const name = target.name;
    this.setState({
      step: this.state.step + 1,
      [name]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const newBench = {
      name: this.state.name,
      description: this.state.description,
      location: this.props.location,
      score: this.state.score,
    };
    this.props.handleAddBench(newBench);
    this.props.handleClose();
    this.setState({
      step: 1,
      name: '',
      description: '',
      score: 0,
    })
  }

  render() {
    const { name, description, step} = this.state;

    switch(step) {
      case 1:
        return (
            <Content>
              <CloseButton onClick={this.props.handleClose}>&times;</CloseButton>
              <AddForm>
                <BenchName>
                  What is this bench called?
                </BenchName>
                <InputDiv>
                  <InputField type="text" name="name" value={name} placeholder="Bench Name" onChange={this.handleChange} />
                </InputDiv>
                <ButtonDiv>
                  <NextButton type="submit" onClick={this.nextStep}>
                    Next
                  </NextButton>
                </ButtonDiv>
              </AddForm>
            </Content>
        )
      case 2:
        return (
          <Content>
          <CloseButton onClick={this.props.handleClose}>&times;</CloseButton>
          <AddForm>
            <BenchName>
              Describe this bench.
            </BenchName>
            <InputDiv>
              <InputField type="text" name="description" value={description} placeholder="Description" onChange={this.handleChange} />
            </InputDiv>
            <ButtonDiv>
            <NextButton type="submit" onClick={this.previousStep}>
                Prev
              </NextButton>
              <NextButton type="submit" onClick={this.nextStep}>
                Next
              </NextButton>
            </ButtonDiv>
          </AddForm>
        </Content>
        )
        case 3:
        return (
          <Content>
          <CloseButton onClick={this.props.handleClose}>&times;</CloseButton>
          <AddForm >
            <BenchName>
              Rate this bench. How is it?
            </BenchName>
            <InputDiv >
              <div className="radio">
                <label>
                    1
                    <input type="radio" value="1" name="score1"  onChange={this.onValueChange}/>
                  </label>
              </div>
              <div className="radio">
                <label>
                    2
                    <input type="radio" value="2" name="score2" onChange={this.onValueChange}/>
                  </label>
              </div>
              <div className="radio">
                <label>
                    3
                    <input type="radio" value="3" name="score3" onChange={this.onValueChange}/>
                  </label>
              </div>
              <div className="radio">
                <label>
                    4
                    <input type="radio" value="4" name="score4" onChange={this.onValueChange}/>
                  </label>
              </div>
              <div className="radio">
                <label>
                    5
                    <input type="radio" value="5" name="score5" onChange={this.onValueChange}/>
                  </label>
              </div>
            </InputDiv>
            <ButtonDiv>
            <NextButton type="submit" onClick={this.previousStep}>
                Prev
              </NextButton>
              <NextButton type="submit" onClick={this.nextStep}>
                Next
              </NextButton>
            </ButtonDiv>
          </AddForm>
        </Content>
        )
        case 4:
        return (
          <Content>
          <CloseButton onClick={this.props.handleClose}>&times;</CloseButton>
          <AddForm>
            <BenchName>
              Is this correct?
            </BenchName>
            <FinalDiv>
            <FinalName>
              {this.state.name}
            </FinalName>
            <FinalDesc>
              {this.state.description}
            </FinalDesc>
            <FinalScore>
              {this.state.score}
            </FinalScore>
            </FinalDiv>
            <ButtonDiv>
              <NextButton type="submit" onClick={this.nextStep}>
                Yes!
              </NextButton>
              <NextButton type="submit" onClick={this.previousStep}>
                No!
              </NextButton>
            </ButtonDiv>
          </AddForm>
        </Content>
        )
        case 5:
        return (
          <Content>
          <AddForm>
            <BenchName>
              We've added this new bench!
            </BenchName>
            <ButtonDiv>
              <NextButton type="submit" onClick={this.handleSubmit}>
                Ok!
              </NextButton>
            </ButtonDiv>
          </AddForm>
        </Content>
        )
    }
  }
}

export default ModalContent;