import { useFeedbackItemsStore } from "../../stores/FeedbackStore";
import Hastag from "./Hastag";

export default function HashtagList() {
  const feedbackItems = useFeedbackItemsStore((state) => state.feedbackItems);
  const handleSelectCompany = useFeedbackItemsStore(
    (state) => state.selectCompany
  );
  const isLoading = useFeedbackItemsStore((state) => state.isLoading);
  if (isLoading) return;
  const companyList = feedbackItems
    .map((item) => item.company)
    .filter((company, index, array) => array.indexOf(company) === index);

  return (
    <ul className="hashtags">
      {companyList.map((company) => (
        <Hastag
          key={company}
          company={company}
          OnSelectCompany={handleSelectCompany}
        />
      ))}
    </ul>
  );
}
