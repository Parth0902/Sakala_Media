import AnimatedNumber, { NumberMetaData } from "@/components/shared/AnimatedNumber";
import Image from "next/image";
import border from '@/assets/border.svg'
interface StatisticsSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  statistics?: {
    activeClients: NumberMetaData;
    adAccounts: NumberMetaData;
    adSpend: NumberMetaData;
  };
}

const StatisticsSection: React.FC<StatisticsSectionProps> = ({
  title = "The Numbers That Define\nOur Success",
  subtitle = "Our clients trust us, and we're certain you will too!",
  description = "Over the last 4 years, Skala has thrived, delivering exceptional results for over 3,000 clients.\nOur commitment to innovation and excellence has solidified our reputation as a trusted partner in their success.",
  statistics = {
    activeClients: {
      number: 800,
      suffix: "+",
    },
    adAccounts: {
      number: 3600,
      suffix: "+",
    },
    adSpend: {
      number: 10,
      prefix: "$",
      suffix: "M+",
    },
  },
}) => {
  return (
    <div className="statistics-section w-full ">

      <h1 className="main-title">{title}</h1>
      <p className="subtitle">{subtitle}</p>
     
      <div className="relative w-full flex justify-center">
        <div className="statistics-container">
          <StatisticItem numberMetData={statistics.activeClients} label="ACTIVE CLIENTS" />
          <StatisticItem numberMetData={statistics.adAccounts} label="AD ACCOUNTS SHARED" />
          <StatisticItem numberMetData={statistics.adSpend} label="ADVERTISING SPEND" />
        </div>
        <Image src={border} className="absolute top-[29%] w-[90%] 2xl:w-[80%] " alt="img"></Image>
      </div>

   
         
    

      <h2 className="secondary-title pt-[100px] 2xl:[120px]">Why Clients Love Our Service</h2>
      <p className="description py-[50px]">{description}</p>
    </div>
  );
};

export default StatisticsSection;

interface StatisticItemProps {
  numberMetData: NumberMetaData;
  label: string;
}

const StatisticItem: React.FC<StatisticItemProps> = ({ numberMetData, label }) => (
  <div className="statistic-item">
    <div className="number-container">
      <AnimatedNumber number={numberMetData.number} />
      {numberMetData.suffix ? <span className="plus">{numberMetData.suffix}</span> : null}
    </div>
    <div className="label">{label}</div>
  </div>
);
