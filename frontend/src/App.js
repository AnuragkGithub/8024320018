import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TopUsers from "./pages/TopUsers";
import TrendingPosts from "./pages/TrendingPosts";
import Feed from "./pages/Feed";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/top-users" element={<TopUsers />} />
                <Route path="/trending-posts" element={<TrendingPosts />} />
                <Route path="/feed" element={<Feed />} />
            </Routes>
        </Router>
    );
}

export default App;
