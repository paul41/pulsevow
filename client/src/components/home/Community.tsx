import { useState } from "react";
import { ASK_PULSEVOW, ASK_PULSEVOW_DESC } from "../../constants/ask-text";

interface AskPulseVowProps {
  onToast: (message: string) => void;
}

export function AskPulseVow({ onToast }: AskPulseVowProps) {
  const [question, setQuestion] = useState("");

  const ask = () => {
    if (!question.trim()) {
      onToast("Type a question about this story first.");
      return;
    }
    onToast("Your question is ready for PulseVow AI.");
    setQuestion("");
  };

  return (
    <div className="sidebar-card" id="ask">
      <h3>{ASK_PULSEVOW}</h3>
      <p className="sidebar-note">
        {ASK_PULSEVOW_DESC}
      </p>

      {/* Example QA items */}
      <div className="qa-item">
        <span className="qa-tag tag-ai">PULSEVOW AI</span>
        <div className="qa-q">
          Will this lower my existing home loan EMI automatically?
        </div>
        <div className="qa-a">
          Not necessarily. The effect depends on your loan type and how your
          lender passes the rate change through to customers.
        </div>
        <span className="helpful">AI response · Based on story context</span>
      </div>

      <div className="qa-item">
        <span className="qa-tag tag-community">COMMUNITY</span>
        <div className="qa-q">
          Does this mean fixed deposit rates will fall too?
        </div>
        <div className="qa-a">
          They may change as banks adjust their pricing, but the timing and
          extent can vary between banks.
        </div>
        <span className="helpful">Helpful · 18</span>
      </div>

      {/* Input box */}
      <div className="qa-input">
        <input
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && ask()}
          placeholder="Ask about this story"
        />
        <button onClick={ask}>Ask</button>
      </div>

      <div className="qa-note">
        AI-assisted moderation helps identify spam, toxicity, duplicates and
        potentially unreliable answers before wider publication.
      </div>
    </div>
  );
}
