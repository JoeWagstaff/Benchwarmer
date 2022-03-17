import React from 'react';
import styled from 'styled-components';
import ReviewModal from './ReviewModal.jsx';
import axios from 'axios';

const InfoDiv = styled.div`
  display: grid;
  grid-template-rows: 1f 1fr 1fr 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
`;
const NameDiv = styled.div`
  grid-row-start: 1;
  grid-column-start: 1;
  grid-column-end: span 3;
  display: flex;
  align-items: justify;
  justify-content: center;
  text-align: justify;
  margin: 1%;
`;

const DescDiv = styled.div`
  grid-row-start: 2;
  grid-column-start: 1;
  grid-column-end: span 3;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1%;
`;

const PhotoDiv = styled.div`
  grid-row-start: 3;
  grid-column-start: 1;
  grid-column-end: span 3;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1%;
`;

const ScoreDiv = styled.div`
  grid-row-start: 4;
  grid-column-start: 1;
  grid-column-end: span 3;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1%;
`;

const ButtonDiv = styled.div`
  grid-row-start: 6;
  grid-column-start: 1;
  grid-column-end: span 3;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1%;
`;

const ReviewDiv = styled.div`
  grid-row-start: 5;
  grid-column-start: 1;
  grid-column-end: span 3;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1%;
`;

const ReviewButton = styled.button`
  place-self: center;
  padding: 10px;
  color: white;
  background-color: #00994d;
  border: none;
  font-weight: bold;
  border-radius: 12px;
  border: none;
  &: hover {
    cursor: pointer;
  }
`;

const ReviewText = styled.p`
  font-size: 20px;
  text-align: center;
`;

const ReviewImage = styled.img`
  max-width: 100px;
  height: 100px;
`;

class ReviewBench extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleAddReview = this.handleAddReview.bind(this);
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

  handleAddReview(review) {
    axios({
      method: 'post',
      url: '/api/reviews',
      data: {
        bench: review.bench,
        review: review.review,
        score: review.score
      }
    });
  }

  render() {
    const { showModal } = this.state;
    if (showModal) {
      return(
        <InfoDiv>
          <ReviewModal bench={this.props.bench} handleClose={this.handleClose} handleAddReview={this.handleAddReview} />
      </InfoDiv>
      )
    }
    return(
      <InfoDiv>
        <NameDiv>
          <ReviewText>{this.props.bench.name}</ReviewText>
        </NameDiv>
        <DescDiv>
          <ReviewText>{this.props.bench.description}</ReviewText>
        </DescDiv>
        <PhotoDiv>
          <ReviewImage src={this.props.bench.photo_url} />
        </PhotoDiv>
        <ScoreDiv>
         <ReviewText> Rating:&nbsp;{this.props.bench.score}</ReviewText>
        </ScoreDiv>
        <ReviewDiv>
          <ReviewText>Top Review:&nbsp;{this.props.bench.review}</ReviewText>
        </ReviewDiv>
        <ButtonDiv>
          <ReviewButton type="submit" onClick={this.handleClick} >
            Review me!
          </ReviewButton>
        </ButtonDiv>
      </InfoDiv>
    )
  }
}

export default ReviewBench;