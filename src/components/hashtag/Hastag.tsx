type HastagProps = {
  company: string;
  OnSelectCompany: (company: string) => void;
};
export default function Hastag({ company, OnSelectCompany }: HastagProps) {
  return (
    <li key={company}>
      <button onClick={() => OnSelectCompany(company)}>#{company}</button>
    </li>
  );
}
