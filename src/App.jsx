import EventDetails from "./pages/EventDetails";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Notices from "./pages/Notices";
import News from "./pages/News";
import Albums from "./pages/Albums";
import UpcomingEventsPage from "./pages/UpcomingEventsPage";
import NoticeDetails from "./pages/NoticeDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/notices" element={<Notices />} />

      <Route path="/news" element={<News />} />

      <Route path="/albums" element={<Albums />} />

      <Route
        path="/upcoming-events"
        element={<UpcomingEventsPage />}
      />

      <Route
        path="/notice/:id"
        element={<NoticeDetails />}
      />
      <Route
        path="/event/:id"
        element={<EventDetails />}
      />
    </Routes>
  );
}

export default App;