import FeedbackItem from "./FeedbackItem";
import Spinner from "../Spinner";
import { useFeedbackItemsStore } from "../../stores/FeedbackStore";
import ErrorMessage from "../ErrorMessage";

export default function FeedbackList() {
  const isLoading = useFeedbackItemsStore((state) => state.isLoading);
  const errorMessage = useFeedbackItemsStore((state) => state.errorMessage);
  const feedbackItems = useFeedbackItemsStore((state) => state.feedbackItems);
  const selectedCompany = useFeedbackItemsStore(
    (state) => state.selectedCompany
  );

  const filteredFeedbackItems = selectedCompany
    ? feedbackItems.filter((item) => item.company === selectedCompany)
    : feedbackItems;
  return (
    <ol className="feedback-list">
      {isLoading ? <Spinner /> : null}
      {errorMessage ? <ErrorMessage message={errorMessage} /> : null}
      {filteredFeedbackItems.map((feedbackItem) => (
        <FeedbackItem key={feedbackItem.id} feedbackItem={feedbackItem} />
      ))}
    </ol>
  );
}
