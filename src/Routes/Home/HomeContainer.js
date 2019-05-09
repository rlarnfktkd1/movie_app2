import React from "react";
import HomePresenter from "./HomePresenter";
import { moviesApi } from "api";

export default class extends React.Component {
  state = {
    nowPlaying: null,
    upComing: null,
    popular: null,
    topRated: null,
    filter: "",
    error: null,
    loading: true
  };
  handleClick = value => {
    this.setState({
      filter: value
    });
  };
  async componentDidMount() {
    try {
      const {
        data: { results: nowPlaying }
      } = await moviesApi.nowPlaying();
      const {
        data: { results: upComing }
      } = await moviesApi.upcoming();
      const {
        data: { results: popular }
      } = await moviesApi.popular();
      const {
        data: { results: topRated }
      } = await moviesApi.topRated();
      this.setState({
        nowPlaying,
        upComing,
        popular,
        topRated
      });
    } catch (error) {
      this.setState({
        error: "Can't find movie information."
      });
    } finally {
      this.setState({
        loading: false
      });
    }
  }
  render() {
    const {
      nowPlaying,
      upComing,
      popular,
      topRated,
      error,
      loading,
      filter,
      handleClick
    } = this.state;
    return (
      <HomePresenter
        nowPlaying={nowPlaying}
        upComing={upComing}
        popular={popular}
        topRated={topRated}
        error={error}
        loading={loading}
        filter={filter}
        handleClick={handleClick}
      />
    );
  }
}
