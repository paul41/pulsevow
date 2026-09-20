
interface RelatedArticle {
  image: string;
  title: string;
  text: string;
}

export function RelatedArticles() {
  const articles: RelatedArticle[] = [
    {
      image:
        "https://images.unsplash.com/photo-1559526324-593bc073d938?w=180&h=130&fit=crop",
      title: "Previous RBI policy decision",
      text: "Background to the current easing cycle",
    },
    {
      image:
        "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=180&h=130&fit=crop",
      title: "Market reaction to rate expectations",
      text: "How investors positioned ahead of the decision",
    },
    {
      image:
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=180&h=130&fit=crop",
      title: "What a rate cut could mean for businesses",
      text: "Potential impact across credit-sensitive sectors",
    },
  ];

  return (
    <div className="sidebar-card">
      <h3>Related articles</h3>
      <div className="related-list">
        {articles.map(({ image, title, text }) => (
          <a className="related-item" href="#story" key={title}>
            <img src={image} alt={title} />
            <div>
              <h4>{title}</h4>
              <p>{text}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
