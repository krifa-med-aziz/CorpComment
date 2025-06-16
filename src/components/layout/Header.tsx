import { useFeedbackItemsStore } from "../../stores/FeedbackStore";
import FeedbackForm from "../feedback/FeedbackForm";
import Logo from "../Logo";
import PageHeading from "../PageHeading";
import Pattern from "../Pattern";

export default function Header() {
  const handleAddItem = useFeedbackItemsStore((state) => state.addItem);
  return (
    <header>
      <Pattern />
      <Logo />
      <PageHeading />
      <FeedbackForm handleAddItem={handleAddItem} />
    </header>
  );
}
