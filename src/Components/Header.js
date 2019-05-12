import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Logo = styled.div`
  width: 70px;
  font-size: 15px;
  font-weight: 800;
  text-align: center;
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
  margin-right: 20px;
`;

const List = styled.ul`
  display: flex;
`;

const Header = styled.header`
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0px 10px;
  background-color: rgba(20, 20, 20, 0.8);
  z-index: 10;
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;

const Item = styled.li`
  width: 60px;
  height: 50px;
  text-align: center;
  border-bottom: 3px solid
    ${props => (props.current ? "#f1c40f" : "transparent")};
  transition: border-bottom 0.5s ease-in-out;
  font-weight: 600;
  text-shadow: ${props =>
    props.current
      ? "rgb(34, 141, 255) 0px 0px 5px, rgb(34, 141, 255) 0px 0px 10px, rgb(34, 141, 255) 0px 0px 15px, rgb(255, 255, 255) 0px 0px 20px, rgb(255, 255, 255) 0px 0px 35px, rgb(34, 141, 255) 0px 0px 40px, rgb(34, 141, 255) 0px 0px 50px, rgb(34, 141, 255) 0px 0px 75px"
      : "transparent"};
`;

const SLink = styled(Link)`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export default withRouter(({ location: { pathname } }) => (
  <Header>
    <SLink to="/">
      <Logo>Sangheon Movie</Logo>
    </SLink>
    <List>
      <Item
        current={
          pathname === "/" ||
          pathname === "filter/movie/now_playing" ||
          pathname === "filter/movie/popular" ||
          pathname === "filter/movie/top_rated" ||
          pathname === "filter/movie/upcoming"
        }
      >
        <SLink to="/">
          <i className="fas fa-film" />
          Movies
        </SLink>
      </Item>
      <Item
        current={
          pathname === "/tv" ||
          pathname === "filter/tv/popular" ||
          pathname === "filter/tv/top_rated" ||
          pathname === "filter/tv/airing_today"
        }
      >
        <SLink to="/tv">
          <i className="fas fa-tv" />
          TV
        </SLink>
      </Item>
      <Item current={pathname === "/search"}>
        <SLink to="/search">
          <i className="fas fa-search" />
          Search
        </SLink>
      </Item>
    </List>
  </Header>
));

//Link 함수는 router안에서 정의 해야함 router.js에 정의해줄 것.
//with Router 덕분에 props를 전달 받을 수 있다.
