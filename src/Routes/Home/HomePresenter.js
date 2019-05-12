import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";

// import { Link } from "react-router-dom";
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
  margin-top: 30px;
  margin-left: 50px;
  margin-bottom: 20px;
`;

const MenuItem = styled.li`
  margin-right: 15px;
  padding: 20px;
  border-radius: 20px;
  border-bottom-right-radius: 0px;
  border: 3px solid gray;
  font-weight: 700;
  &:hover {
    color: blue;
    background-color: white;
    opacity: 0.3;
  }
`;

const MenuTitle = styled.span``;
const Anchor = styled.a``;

const HomePresenter = ({
  title,
  moviePresent,
  // nowPlaying,
  // upComing,
  // popular,
  // topRated,
  handleClick,
  error,
  loading
}) => (
  <>
    <Helmet>
      <title>Movies | Nomflix</title>
    </Helmet>
    <List>
      <MenuItem>
        <Anchor href="/filter/movie/now_playing">
          <MenuTitle>현재 상영중</MenuTitle>
        </Anchor>
      </MenuItem>
      <MenuItem>
        <Anchor href="/filter/movie/popular">
          <MenuTitle>인기 영화</MenuTitle>
        </Anchor>
      </MenuItem>
      <MenuItem>
        <Anchor href="/filter/movie/upcoming">
          <MenuTitle>개봉 예정</MenuTitle>
        </Anchor>
      </MenuItem>
      <MenuItem>
        <Anchor href="/filter/movie/top_rated">
          <MenuTitle>높은 평점</MenuTitle>
        </Anchor>
      </MenuItem>
    </List>
    {loading ? (
      <Loader />
    ) : (
      <Container>
        {moviePresent && moviePresent.length > 0 && (
          <Section title={`${title}`}>
            {moviePresent.map(movie => (
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
        {/* {nowPlaying && nowPlaying.length > 0 && (
          <Section title={title}>
            {nowPlaying.map(movie => (
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
        )} */}
        {error && <Message color="#e74c3c" text={error} />}
      </Container>
    )}
  </>
);

HomePresenter.propTypes = {
  moviePresent: PropTypes.array,
  nowPlaying: PropTypes.array,
  upComing: PropTypes.array,
  popular: PropTypes.array,
  topRated: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired
};

export default HomePresenter;
