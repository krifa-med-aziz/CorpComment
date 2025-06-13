import { TriangleUpIcon } from "@radix-ui/react-icons";

export default function FeedbackList() {
  return (
    <ol className="feedback-list">
      <li className="feedback">
        <button>
          <TriangleUpIcon />
          <span>453</span>
        </button>
        <div>
          <p>B</p>
        </div>
        <div>
          <p>Aziz</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            exercitationem, eos delectus repudiandae amet earum.
          </p>
        </div>
        <p>4d</p>
      </li>
    </ol>
  );
}
