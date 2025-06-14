import FeedbackForm from "../feedback/FeedbackForm";
import Logo from "../Logo";
import PageHeading from "../PageHeading";
import Pattern from "../Pattern";
type Headerprops = {
  handleAddItem: (text: string) => void;
};

export default function Header({ handleAddItem }: Headerprops) {
  return (
    <header>
      <Pattern />
      <Logo />
      <PageHeading />
      <FeedbackForm handleAddItem={handleAddItem} />
    </header>
  );
}
