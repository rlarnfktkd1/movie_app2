import React from "react";
import TVPresenter from "./TVPresenter";
import { tvApi } from "api";

export default class extends React.Component {
  state = {
    tvPresent: null,
    popular: null,
    title: null,
    error: null,
    loading: true
  };

  async componentDidMount() {
    const {
      match: { url }
    } = this.props;
    let value2 = url.split("/")[3];
    try {
      if (value2 === undefined) {
        value2 = "popular";
        const {
          data: { results: tvPresent }
        } = await tvApi.tvPresent(value2);
        console.log(tvPresent);
      }
      const {
        data: { results: tvPresent }
      } = await tvApi.tvPresent(value2);
      this.setState({
        tvPresent
      });
      if (value2 === "popular") {
        this.setState({
          title: "인기 TV"
        });
      } else if (value2 === "top_rated") {
        this.setState({
          title: "높은 평점 TV"
        });
      } else {
        this.setState({
          title: "오늘 방영 TV"
        });
      }
    } catch {
      this.setState({
        error: "Can't find TV Shows information"
      });
    } finally {
      this.setState({
        loading: false
      });
    }
  }
  render() {
    const { tvPresent, error, loading, title } = this.state;
    return (
      <TVPresenter
        title={title}
        tvPresent={tvPresent}
        error={error}
        loading={loading}
        ismovie={false}
      />
    );
  }
}
