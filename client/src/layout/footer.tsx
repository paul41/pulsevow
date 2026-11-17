import { useTranslation } from 'react-i18next';
import '../styles/pulsevow.css';

export function Footer({ year }: { year: number }) {
  const { t } = useTranslation();

  const features = [
    { key: "featureBriefs", label: t("footer.featureBriefs") },
    { key: "featureComparison", label: t("footer.featureComparison") },
    { key: "featureTimeline", label: t("footer.featureTimeline") },
    { key: "featureCommunity", label: t("footer.featureCommunity") },
    { key: "featureSector", label: t("footer.featureSector") },
    { key: "featurePersonalized", label: t("footer.featurePersonalized") },
  ];

  const topics = [
    { key: "politics", label: t("navigation.categoriesList.politics") },
    { key: "business", label: t("footer.topics.business") },
    { key: "markets", label: t("footer.topics.markets") },
    { key: "technology", label: t("navigation.categoriesList.technology") },
    { key: "ai", label: t("footer.topics.ai") },
    { key: "startups", label: t("footer.topics.startups") },
    { key: "economy", label: t("navigation.categoriesList.economy") },
    { key: "science", label: t("footer.topics.science") },
    { key: "healthcare", label: t("footer.topics.healthcare") },
    { key: "climate", label: t("footer.topics.climate") },
    { key: "crypto", label: t("footer.topics.crypto") },
    { key: "world", label: t("common.world") },
    { key: "sports", label: t("navigation.categoriesList.sports") },
    { key: "entertainment", label: t("navigation.categoriesList.entertainment") },
    { key: "lifestyle", label: t("footer.topics.lifestyle") },
  ];

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">PulseVow</div>

        <p className="footer-description">
          {t("footer.description")}
        </p>

        <div className="footer-grid">
          {/* Contact Section */}
          <div>
            <h5 className="footer-title"><b>{t("footer.getInTouch")}</b></h5>
            <p>✉ support@pulsevow.com</p>
            <p>◉ www.pulsevow.com</p>
            <p>◷ {t("footer.aiMonitoring")}</p>

            <h6 className="footer-title footer-social-title"><b>{t("footer.followUs")}</b></h6>
            <div className="footer-social">
              {["𝕏", "f", "in", "◎", "▶"].map((x) => (
                <a href="#top" key={x}>
                  {x}
                </a>
              ))}
            </div>
          </div>

          {/* Features Section */}
          <div>
            <h5 className="footer-title"><b>{t("footer.aiFeatures")}</b></h5>
            <div className="footer-links">
              {features.map((f) => (
                <a href="#" key={f.key} onClick={(e) => e.preventDefault()}>
                  {f.label}
                </a>
              ))}
            </div>
          </div>

          {/* Topics Section */}
          <div>
            <h5 className="footer-title"><b>{t("footer.exploreTopics")}</b></h5>
            <div className="footer-topics">
              {topics.map((tp) => (
                <a className="footer-topic" href="#today" key={tp.key}>
                  {tp.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © {year} <a href="#top">PulseVow</a>. {t("footer.allRightsReserved")} <span>|</span>{" "}
        {t("footer.platformTagline")}
      </div>
    </footer>
  );
}
