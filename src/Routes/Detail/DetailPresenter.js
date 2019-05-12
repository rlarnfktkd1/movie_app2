import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "Components/Loader";
import Helmet from "react-helmet";
import Message from "Components/Message";
import { Link } from "react-router-dom";

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
    height: 300px;
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

const AddInfo = styled.div`
  /* height: 83px; */
  overflow: hidden;
  width: 70%;
  margin-top: 20px;
  font-weight: 600;
  font-size: 10px;
`;

const ListItem = styled.li`
  margin-bottom: 10px;
  &:not(:last-child) {
    margin-right: 5px;
  }
  &:hover {
    color: blue;
  }
`;

const ItemContainer = styled.div`
  margin: 20px 0;
`;

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
  margin-bottom: 15px;
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
  font-size: 12px;
  opacity: 0.7;
  width: 50%;
  line-height: 1.5;
`;

const ExternalLink = styled.a.attrs({
  target: "_blank"
})``;

const LogoTitle = styled.h1`
  margin-top: 20px;
  font-size: 13px;
  font-weight: 600;
  margin-bottom: 5px;
`;

const CompanyLogo = styled.img`
  height: 30px;
  width: 80px;
  display: block;
  margin-top: 10px;
  border: none;
`;

const Collection = styled.img`
  height: 150px;
  width: 150px;
  display: block;
  margin-top: 15px;
`;

const NoneImage = styled.div`
  display: none;
`;

const CountryName = styled.h1`
  margin-top: 10px;
  font-size: 16px;
`;

const Network = styled.img`
  width: 50px;
  height: 50px;
`;

const SeasonList = styled.ul`
  display: flex;
`;

const DetailPresenter = ({ result, error, loading, isMovie }) =>
  loading ? (
    <>
      <Helmet>
        <title>Loading | nomflix</title>
      </Helmet>
      <Loader />
    </>
  ) : error ? (
    <Message />
  ) : (
    <Container>
      <Helmet>
        <title>
          {result.original_title ? result.original_title : result.original_name}{" "}
          | Nomflix
        </title>
      </Helmet>
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
            <Item>
              {result.genres &&
                result.genres.map((genre, index) =>
                  index === result.genres.length - 1
                    ? genre.name
                    : `${genre.name} / `
                )}
            </Item>
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
              {result.runtime || result.episode_run_time
                ? `${result.runtime} min`
                : `${result.episode_run_time[0]} min`}
            </Item>
            <Divider />
          </ItemContainer>
          <ReviewBtn>
            <ExternalLink
              href={`https://cinemaone.net/title/${result.imdb_id}`}
            >
              Read Review
            </ExternalLink>
          </ReviewBtn>
          <Overview>{result.overview}</Overview>
          <AddInfo>
            <h3>
              <i className="fab fa-youtube" /> Youtube Link
            </h3>
            {result.videos &&
              result.videos.results.slice(0, 3).map((video, index) =>
                index === result.videos.results.length - 1 ? (
                  <ExternalLink
                    key={video.key}
                    href={`https://www.youtube.com/watch?v=${video.key}`}
                  >
                    {`🎥 ${video.name}`}
                  </ExternalLink>
                ) : (
                  <ul>
                    <ExternalLink
                      key={video.key}
                      href={`https://www.youtube.com/watch?v=${video.key}`}
                    >
                      <ListItem>{`🎥 ${video.name}`}</ListItem>
                    </ExternalLink>
                  </ul>
                )
              )}
            <LogoTitle>Production Company</LogoTitle>
            <CompanyLogo
              src={
                result.production_companies[0]
                  ? `https://image.tmdb.org/t/p/original${
                      result.production_companies[0].logo_path
                    }`
                  : "data:image/jpeg;base64,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"
              }
            />
            {result.production_countries ? (
              <CountryName>
                제조국 : {result.production_countries[0].name}
              </CountryName>
            ) : null}
            {result.belongs_to_collection &&
            result.belongs_to_collection.poster_path ? (
              <Collection
                src={`https://image.tmdb.org/t/p/original${
                  result.belongs_to_collection.poster_path
                }`}
              />
            ) : (
              <NoneImage />
            )}
            {result.networks && result.networks[0].logo_path ? (
              <>
                <LogoTitle>Network</LogoTitle>
                <Network
                  src={`https://image.tmdb.org/t/p/original${
                    result.networks[0].logo_path
                  }`}
                />
              </>
            ) : (
              <NoneImage />
            )}
            <LogoTitle>Seasons</LogoTitle>
            <SeasonList>
              {result.seasons &&
                result.seasons.map((season, index) =>
                  season ? (
                    <>
                      <ListItem key={season.id}>
                        <Link to={`/${index}`}>{season.name}</Link>
                      </ListItem>
                    </>
                  ) : (
                    <NoneImage />
                  )
                )}
            </SeasonList>
          </AddInfo>
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
