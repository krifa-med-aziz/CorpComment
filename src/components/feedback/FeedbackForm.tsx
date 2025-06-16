import { useState } from "react";
import { MAX_CHARACTERS, MIN_CHARACTERS } from "../../lib/constants";

type FeedbackFormprops = {
  handleAddItem: (text: string) => void;
};

export default function FeedbackForm({ handleAddItem }: FeedbackFormprops) {
  const [text, setText] = useState("");
  const [showValidIndicator, setShowValidIndicator] = useState(false);
  const [showInValidIndicator, setShowInValidIndicator] = useState(false);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text.includes("#") && text.length >= MIN_CHARACTERS) {
      setShowValidIndicator(true);
      setTimeout(() => setShowValidIndicator(false), 2000);
    } else {
      setShowInValidIndicator(true);
      setTimeout(() => setShowInValidIndicator(false), 2000);
    }
    handleAddItem(text);
    setText("");
  };
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newtext = e.target.value;
    if (newtext.length > MAX_CHARACTERS) return;
    setText(newtext);
  };
  const charCount = MAX_CHARACTERS - text.length;
  return (
    <>
      <form
        className={`form ${showValidIndicator ? "form--valid" : ""} ${
          showInValidIndicator ? "form-invalid" : ""
        }`}
        onSubmit={handleSubmit}
      >
        <textarea
          value={text}
          onChange={handleChange}
          id="feedback-textarea"
          placeholder="Enter your feedback here, remember to #hashtag the company "
          spellCheck={false}
          maxLength={MAX_CHARACTERS}
        />
        <label htmlFor="feedback-textarea">
          Enter your feedback here,rememeber to #hashtag the company
        </label>
        <div>
          <p className="u-italic">{charCount}</p>
          <button>
            <span>Submit</span>
          </button>
        </div>
      </form>
    </>
  );
}
