import type { TFeedbackItem } from "../../lib/types";
import FeedbackList from "../feedback/FeedbackList";
import Header from "./Header";

type ContainerProps = {
  isLoading: boolean;
  feedbackItems: TFeedbackItem[];
  errorMessage: string;
  handleAddItem: (text: string) => void;
};

export default function Container({
  isLoading,
  feedbackItems,
  errorMessage,
  handleAddItem,
}: ContainerProps) {
  return (
    <main className="container">
      <Header handleAddItem={handleAddItem} />
      <FeedbackList
        isLoading={isLoading}
        feedbackItems={feedbackItems}
        errorMessage={errorMessage}
      />
    </main>
  );
}
