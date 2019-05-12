import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
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

const TVPresenter = ({ tvPresent, title, error, loading }) => (
  <>
    <Helmet>
      <title>TV | Nomflix</title>
    </Helmet>
    <List>
      <MenuItem>
        <Anchor href="/filter/tv/popular">
          <MenuTitle>인기 TV</MenuTitle>
        </Anchor>
      </MenuItem>
      <MenuItem>
        <Anchor href="/filter/tv/top_rated">
          <MenuTitle>높은 평점</MenuTitle>
        </Anchor>
      </MenuItem>
      <MenuItem>
        <Anchor href="/filter/tv/airing_today">
          <MenuTitle>오늘 방영</MenuTitle>
        </Anchor>
      </MenuItem>
    </List>
    {loading ? (
      <Loader />
    ) : (
      <Container>
        {tvPresent && tvPresent.length > 0 && (
          <Section title={`${title}`}>
            {tvPresent.map(show => (
              <Poster
                key={show.id}
                id={show.id}
                imageUrl={show.poster_path}
                title={show.original_name}
                rating={show.vote_average}
                year={show.first_air_date.substring(0, 4)}
                isMovie={false}
              />
            ))}
          </Section>
        )}
        {error && <Message color="#e74c3c" text={error} />}
      </Container>
    )}
    ;
  </>
);

TVPresenter.propTypes = {
  tvPresent: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired
};

export default TVPresenter;
