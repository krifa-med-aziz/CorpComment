import { useFeedbackItemsStore } from "../../stores/FeedbackStore";
import Hastag from "./Hastag";

export default function HashtagList() {
  const getCompanyList = useFeedbackItemsStore((state) => state.getCompanyList);
  const handleSelectCompany = useFeedbackItemsStore(
    (state) => state.selectCompany
  );
  const companyList = getCompanyList();
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
