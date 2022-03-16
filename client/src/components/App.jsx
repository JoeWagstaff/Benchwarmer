import React from 'react';
import styled from 'styled-components';
import Map from './Map.jsx';
import AddBench from './AddBench.jsx';

const UnderMapBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
`
const StartBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 25% 50% 25%;
`
const StartButton = styled.button`
  width: 50px;
  height: 50px;
  grid-row-start: 3;
  grid-column-start: 2;
  place-self: center;
  margin-top: 175px;
  border-radius: 50%;
  background: url('https://i.ibb.co/Vmx2kh5/bench.png');
  border: 2px solid black;
  height: 200px;
  width: 200px;
  &: hover {
    cursor: pointer;
  }
`
const StartText = styled.p`
  color: #CC7000;
  font-size: 50px;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: black;
  text-align: center;
  margin:auto;
`
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false,
      benches: [
        {
          name: "Sand Point Bench",
          description: "This is a great bench. It's comfy and looks at Lake Tahoe!",
          location: {
            lat: 39.196730,
            lng: -119.933442
          },
          score: 4,
          photos: [
            "https://i.ibb.co/z2s2PFH/beachbench.jpg"
          ]
        },
      ],
      startingLoc: {
        lat: 39.197594,
        lng: -119.933764
      }
    };

    this.handleAddBench = this.handleAddBench.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleAddBench(bench){
    const updatedBenches = this.state.benches;
    updatedBenches.push(bench);
    console.log('at app', bench);
    this.setState({
      benches: updatedBenches,
    })
  }

  handleClick(event) {
    event.preventDefault();
    this.setState({
      clicked: true
    });
  }

  render() {
    // if(this.state.clicked) {
      return(
        <div>
          <Map benches={this.state.benches}/>
          <UnderMapBox>
            <AddBench location={this.state.startingLoc} benches={this.state.benches} handleAddBench={this.handleAddBench}/>
          </UnderMapBox>
        </div>
      )
    // }
    // return (
    //   <StartBox>
    //     <StartButton onClick={this.handleClick}>
    //       <StartText>Bench Warmer</StartText>
    //     </StartButton>
    //   </StartBox>
    // )
  }
}

export default App;