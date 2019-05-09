import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";
import Loader from "Components/Loader";
import Message from "Components/Message";
import Poster from "Components/Poster";
const Container = styled.div`
  padding: 20px;
  margin-left: 50px;
`;

const List = styled.ul`
  display: flex;
  margin-bottom: 15px;
  font-size: 10px;
`;

const Item = styled.button`
  &:not(:last-child) {
    margin-right: 5px;
  }
`;

const HomePresenter = ({
  nowPlaying,
  upComing,
  popular,
  topRated,
  error,
  loading,
  handleClick,
  filter
}) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      <List>
        <Item onclick={() => handleClick("nowPlaying")}>Now Playing</Item>
        <Item onclick={() => handleClick("upComing")}>Upcoming</Item>
        <Item onclick={() => handleClick("popular")}>Popular</Item>
        <Item onclick={() => handleClick("topRated")}>topRated Movie</Item>
      </List>
      {filter && filter.length > 0 && (
        <Section title="Now Playing">
          {filter.map(movie => (
            <Poster
              key={movie.id}
              id={movie.id}
              imageUrl={movie.poster_path}
              title={movie.original_title}
              rating={movie.vote_average}
              year={movie.release_date && movie.release_date.substring(0, 4)}
              isMovie={true}
            />
          ))}
        </Section>
      )}
      {upComing && upComing.length > 0 && (
        <Section title="upComing Movie">
          {upComing.map(movie => (
            <Poster
              key={movie.id}
              id={movie.id}
              imageUrl={movie.poster_path}
              title={movie.original_title}
              rating={movie.vote_average}
              year={movie.release_date && movie.release_date.substring(0, 4)}
              isMovie={true}
            />
          ))}
        </Section>
      )}
      {popular && popular.length > 0 && (
        <Section title="popular Movie">
          {popular.map(movie => (
            <Poster
              key={movie.id}
              id={movie.id}
              imageUrl={movie.poster_path}
              title={movie.original_title}
              rating={movie.vote_average}
              year={movie.release_date && movie.release_date.substring(0, 4)}
              isMovie={true}
            />
          ))}
        </Section>
      )}
      {topRated && topRated.length > 0 && (
        <Section title="topRated Movie">
          {topRated.map(movie => (
            <Poster
              key={movie.id}
              id={movie.id}
              imageUrl={movie.poster_path}
              title={movie.original_title}
              rating={movie.vote_average}
              year={movie.release_date && movie.release_date.substring(0, 4)}
              isMovie={true}
            />
          ))}
        </Section>
      )}
      {error && <Message color="#e74c3c" text={error} />}
    </Container>
  );

HomePresenter.propTypes = {
  nowPlaying: PropTypes.array,
  upComing: PropTypes.array,
  popular: PropTypes.array,
  topRated: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired
};

export default HomePresenter;
