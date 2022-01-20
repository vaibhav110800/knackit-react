import "./App.css";
import "react-responsive-modal/styles.css";

import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Profile from "./pages/profile";
import ProfileSettings from "./pages/settings/profleSettings.js";
import CategorySettings from "./pages/settings/categorySettings";
import DisplaySettings from "./pages/settings/displaySettings";
import Creators from "./pages/creators";
import Subscription from "./pages/subscription";
import Subscribers from "./pages/subscribers";
import Supporters from "./pages/supporters";
import Notifications from "./pages/notifications";
import Wallet from "./pages/wallet";
import Explore from "./pages/explore";
import PostSingle from "./pages/postSingle";
import Followers from "./pages/followers";
import Index from "./pages/Index";
import About from "./pages/about";
import Team from "./pages/team";
import Contact from "./pages/contact";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile/creator" element={<Profile />} />
        <Route path="/creators" element={<Creators />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/subscription/subscriber" element={<Subscribers />} />
        <Route path="/subscription" element={<Subscription />} />
        <Route path="/subscription/supporter" element={<Supporters />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/settings/profile" element={<ProfileSettings />} />
        <Route path="/settings/category" element={<CategorySettings />} />
        <Route path="/settings/display" element={<DisplaySettings />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/post/after" element={<PostSingle />} />
        <Route path="/followers" element={<Followers />} />
      </Routes>
    </>
  );
}

export default App;
