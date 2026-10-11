import { Block } from "../common/Block";

interface AIBriefProps {
  item: any; // Adjust the type based on the actual structure of the items prop
}


export function AIBrief({ item }: AIBriefProps) {
  const brief = [
    ['What happened?', item],
    ['Why does it matter?', 'The decision can influence the cost of credit, bank liquidity and interest-sensitive sectors, although the effect on consumers depends on how lenders pass through the change.'],
    ['Who is affected?', 'Borrowers and credit-sensitive businesses could benefit from easier financing, while banks, depositors and investors may see different effects.'],
    ['What happens next?', "Markets will watch bank lending-rate decisions, upcoming inflation data and the RBI's next policy communication."]
  ]

  console.log("AIBrief items:", item); // Debugging line to check the items prop
  return (
    <Block id="brief" title="Brief Analysis">
      <div className="brief-card">
        <div className="summary">
          <div className="summary-top">
            <span className="impact-badge">
              <span className="impact-dot" /> High impact </span>
            <div className="summary-context">
              <span className="context-label">COVERAGE</span>
              <div className="summary-meta">
                <span className="meta-category">Banking</span>
                <span className="meta-separator">/</span>
                <span className="meta-category">Markets</span>
              </div>
            </div>
            <div className="summary-divider" />
            <div className="summary-sources">
              <span className="sources-icon">↗</span>
              <div>
                <strong>41</strong>
                <span className="sources-label">sources tracked</span>
              </div>
            </div>
            <span className="summary-updated">
              <span className="live-dot" />
              Updated 12 min ago
            </span>
          </div>
          {/* <div className="summary-details"> 
            
          </div> */}
        </div>
        <div className="brief-grid"> {
          brief && Array.isArray(brief) ? brief.map(([title, text], index) => (
            <div key={index}>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          )) : <p>AI brief is coming soon!</p>
        }
        </div>
      </div>
    </Block>
  );
}

