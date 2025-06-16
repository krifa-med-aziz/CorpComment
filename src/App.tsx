import Container from "./components/layout/Container";
import Footer from "./components/layout/Footer";
import HashtagList from "./components/hashtag/HashtagList";
import { useEffect } from "react";
import { useFeedbackItemsStore } from "./stores/FeedbackStore";

function App() {
  const fetchfedbackItems = useFeedbackItemsStore(
    (state) => state.fetchfedbackItems
  );
  useEffect(() => {
    fetchfedbackItems();
  }, [fetchfedbackItems]);
  return (
    <div className="app">
      <Container />
      <HashtagList />
      <Footer />
    </div>
  );
}

export default App;
