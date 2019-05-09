import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "Components/Loader";

const Container = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  padding: 50px;
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.bgImage});
  background-position: center center;
  background-size: cover;
  filter: blur(3px);
  opacity: 0.5;
  z-index: 0;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  z-index: 1;
  height: 100%;
`;
const Cover = styled.div`
  @media (max-width: 768px) {
    width: 100%;
    height: 200px;
    background-size: small;
  }
  @media (min-width: 768px) {
    width: 30%;
    height: 100%;
    border-radius: 5px;
  }
  background-image: url(${props => props.bgImage});
  background-position: center center;
  background-size: cover;
`;

const Data = styled.div`
  @media (max-width: 768px) {
    width: 70%;
  }
  width: 70%;
  margin-left: 10px;
`;

const Title = styled.h3`
  font-size: 32px;
  font-weight: 800;
  text-shadow: 4px 2px 2px gray;
  letter-spacing: 1px;
  margin-bottom: 20px;
`;

const ItemContainer = styled.div``;

const Item = styled.span`
  @media (max-width: 768px) {
    font-size: 9px;
  }
`;

const ReviewBtn = styled.div`
  margin-top: 15px;
  width: 150px;
  height: 40px;
  border: 1px solid gray;
  border-radius: 5px;
  display: grid;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  font-size: 16px;
  letter-spacing: 2px;
  font-weight: 700;
  opacity: 0.5;
  cursor: pointer;
  &:hover {
    background-color: white;
    color: black;
    opacity: 0.5;
  }
`;

const Divider = styled.span`
  @media (max-width: 768px) {
    margin: 0 2px;
  }
  margin: 0 10px;
`;

const Overview = styled.div`
  margin-top: 10px;
  font-size: 10px;
  color: white;
  opacity: 0.8;
  height: 100px;
  width: 100%;
  text-shadow: 4px 2px 2px black;
`;

const DetailPresenter = ({ result, error, loading, isMovie }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      <Backdrop
        bgImage={`https://image.tmdb.org/t/p/w300${result.backdrop_path}`}
      />
      <Content>
        <Cover
          bgImage={
            result.poster_path
              ? `https://image.tmdb.org/t/p/original${result.poster_path}`
              : require("../../assets/noPosterSmall.jpg")
          }
        />
        <Data>
          <Title>
            {result.original_title
              ? result.original_title
              : result.original_name}
          </Title>
          <ItemContainer>
            <Item>{result.genres[0].name}</Item>
            <Divider />
            <Item>
              <i className="fas fa-calendar-alt" />
              {result.release_date
                ? `${result.release_date.substring(0, 4)}`
                : `${result.first_air_date.substring(0, 4)}`}
            </Item>
            <Divider />
            <Item>
              <i className="far fa-clock" />
              {result.runtime
                ? `${result.runtime} min`
                : `${result.episode_run_time[0]} min`}
            </Item>
            <Divider />
          </ItemContainer>
          <ReviewBtn>
            <a
              href={`https://cinemaone.net/title/${result.imdb_id}`}
              target="_blank"
            >
              Read Review
            </a>
          </ReviewBtn>
          <Overview>{result.overview}</Overview>
        </Data>
      </Content>
    </Container>
  );

DetailPresenter.propTypes = {
  result: PropTypes.object,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  isMovie: PropTypes.bool.isRequired
};

export default DetailPresenter;
