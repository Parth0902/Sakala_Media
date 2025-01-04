interface QualitiesHighlightsProps {
  title?: string;
  description?: string;
  iconSrc?: string;
  backgroundColor?: string;
}

const QualitiesHighlights: React.FC<QualitiesHighlightsProps> = ({
  title = "Quick On-Boarding",
  description = "At Skala, we make on-boarding fast and simple. We'll walk you through the process and get you on the path to success quickly. Unlock the full potential of your brand with our help.",
  iconSrc = "https://dashboard.codeparrot.ai/api/assets/Z2Uowo6CYQNjI8Ds",
  backgroundColor = "#151515",
}) => {
  return (
    <div className="service-highlights" style={{ backgroundColor }}>
      <div className="background-image"></div>
      <div className="service-highlights-container">
        <div className="icon-container">
          <img src={iconSrc} alt="Service Icon" className="service-icon" />
        </div>
        <h2 className="title">{title}</h2>
        <p className="description">{description}</p>
      </div>
    </div>
  );
};

export default QualitiesHighlights;
