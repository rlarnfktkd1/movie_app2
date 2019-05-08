import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import Home from "Routes/Home";
import TV from "Routes/TV";
import Search from "Routes/Search";
import Header from "Components/Header";

export default () => (
  <Router>
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/tv" exact component={TV} />
        <Route path="/search" exact component={Search} />
        <Redirect from="*" to="/" />
      </Switch>
    </>
  </Router>
);

// React JS의 Composition으로 exact를 제외시키면, 밑에 render로 하위 컴포넌트 생성 가능
// Redirect는 일치하는 페이지가 없을 때에는 main 페이지로 이동 시키기 위해서다.
// Switch는 오직 하나의 Route만 render 하게 해준다.

/* 코드 첼린지 예정 */
//  <Route path="/tv/popular" render={() => <h1>Popular</h1>} />
