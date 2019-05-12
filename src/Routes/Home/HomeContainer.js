import React from "react";
import HomePresenter from "./HomePresenter";
import { moviesApi } from "api";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      moviePresent: null,
      nowPlaying: null,
      error: null,
      title: null,
      loading: true
    };
  }

  async componentDidMount() {
    const {
      match: { url }
    } = this.props;
    let value1 = url.split("/")[3];
    try {
      if (value1 === undefined) {
        value1 = "now_playing";
        const {
          data: { results: moviePresent }
        } = await moviesApi.moviePresent(value1);
        console.log(moviePresent);
      }
      const {
        data: { results: moviePresent }
      } = await moviesApi.moviePresent(value1);
      this.setState({
        moviePresent
      });
    } catch (error) {
      this.setState({
        error: "영화를 불러오지 못했습니다."
      });
    } finally {
      this.setState({
        loading: false
      });
    }
    if (value1 === "now_playing") {
      this.setState({
        title: "현재 상영중 영화"
      });
    } else if (value1 === "top_rated") {
      this.setState({
        title: "높은 평점 영화"
      });
    } else if (value1 === "popular") {
      this.setState({
        title: "인기 영화"
      });
    } else {
      this.setState({
        title: "개봉 예정 영화"
      });
    }
  }
  render() {
    const { moviePresent, error, loading, title } = this.state;
    return (
      <HomePresenter
        title={title}
        moviePresent={moviePresent}
        error={error}
        loading={loading}
      />
    );
  }
}
