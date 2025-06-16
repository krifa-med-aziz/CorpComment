import FeedbackItem from "./FeedbackItem";
import Spinner from "../Spinner";
import { useFeedbackItemsStore } from "../../stores/FeedbackStore";

export default function FeedbackList() {
  const isLoading = useFeedbackItemsStore((state) => state.isLoading);
  const errorMessage = useFeedbackItemsStore((state) => state.errorMessage);
  const feedbackItems = useFeedbackItemsStore((state) => state.feedbackItems);
  return (
    <ol className="feedback-list">
      {isLoading ? <Spinner /> : null}
      {errorMessage ? <ErrorMessage message={errorMessage} /> : null}
      {feedbackItems.map((feedbackItem) => (
        <FeedbackItem key={feedbackItem.id} feedbackItem={feedbackItem} />
      ))}
    </ol>
  );
}
