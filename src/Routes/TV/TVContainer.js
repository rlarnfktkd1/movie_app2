import React from "react";
import TVPresenter from "./TVPresenter";

export default class extends React.Component {
  state = {
    popular: null,
    topRated: null,
    airingToday: null,
    error: null,
    loading: true
  };
  render() {
    const { popular, topRated, airingToday, error, loading } = this.state;
    return (
      <TVPresenter
        popular={popular}
        topRated={topRated}
        airingToday={airingToday}
        error={error}
        loading={loading}
      />
    );
  }
}
