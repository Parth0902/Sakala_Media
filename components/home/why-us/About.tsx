import QualitiesHighlights from "./QualitiesHighlights";
import StatisticsSection from "./StatisticsSection";
import "./About.css";

const About: React.FC = () => {
  return (
    <div className="statistics-and-services">
      <StatisticsSection />
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
        <QualitiesHighlights
          title="Quick On-Boarding"
          description="At Skala, we make on-boarding fast and simple. We'll walk you through the process and get you on the path to success quickly. Unlock the full potential of your brand with our help."
          iconSrc="https://dashboard.codeparrot.ai/api/assets/Z2Uowo6CYQNjI8Ds"
        />
        <QualitiesHighlights
          title="Stack the Odds"
          description="You can rest assured that you'll be getting the most out of your digital marketing efforts. With our help, you'll be on your way to increasing your revenue and achieving your business goals."
          iconSrc="https://dashboard.codeparrot.ai/api/assets/Z2Uow46CYQNjI8Dt"
        />
        <QualitiesHighlights
          title="Focus on what Matters"
          description="We understand the importance of focusing on what really matters: building your business. That's why we take care of your digital marketing needs so you can focus on what you do best."
          iconSrc="https://dashboard.codeparrot.ai/api/assets/Z2Uow46CYQNjI8Du"
        />
      </div>
    </div>
  );
};

export default About;
