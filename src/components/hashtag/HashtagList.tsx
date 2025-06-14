import Hastag from "./Hastag";

type HashtagListProps = {
  companyList: string[];
  handleSelectCompany: (company: string) => void;
};
export default function HashtagList({
  companyList,
  handleSelectCompany,
}: HashtagListProps) {
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
