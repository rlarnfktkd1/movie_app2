import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const List = styled.ul`
  display: flex;
  transform: rotate(90deg);
  position: fixed;
  top: 120px;
  left: -55px;
`;

const Header = styled.header`
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 70px;
  height: 100vh;
  display: flex;
  align-items: start;
  padding: 0px 10px;
  background-color: rgba(20, 20, 20, 0.8);
  z-index: 10;
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
  justify-content: center;
`;

const Item = styled.li`
  width: 60px;
  height: 50px;
  transform: rotate(270deg);
  text-align: center;
  border-bottom: 3px solid
    ${props => (props.current ? "#3498db" : "transparent")};
  transition: border-bottom 0.5s ease-in-out;
`;

const SLink = styled(Link)`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default withRouter(({ location: { pathname } }) => (
  <Header>
    {console.log(pathname)}
    <List>
      <Item current={pathname === "/"}>
        <SLink to="/">영화</SLink>
      </Item>
      <Item current={pathname === "/tv"}>
        <SLink to="/tv">TV</SLink>
      </Item>
      <Item current={pathname === "/search"}>
        <SLink to="/search">Search</SLink>
      </Item>
    </List>
  </Header>
));
// export default withRouter(({ location: { pathname } })
