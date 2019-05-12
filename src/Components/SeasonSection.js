import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div``;

const Title = styled.div``;

const Contents = styled.div``;

const SeasonSection = ({ title, children }) => (
  <Container>
    <Title>{title}</Title>
    <Contents>{children}</Contents>
  </Container>
);
