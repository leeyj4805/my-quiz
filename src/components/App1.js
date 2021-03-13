import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// Home, MyPage, About 컴포넌트 생성
const Home = () => <div>Home</div>;
const MyPage = () => <div>MyPage</div>;
const About = () => <div>About</div>;

// 각 URL로 보여줄 컴포넌트 매칭
const App = () => {
    return (
        <Router>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/mypage">MyPage</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
            <Route path="/mypage" component={MyPage} />
            <Route path="/about" component={About} />
            <Route path="/" exact component={Home} />
        </Router>
    );
};

export default App;