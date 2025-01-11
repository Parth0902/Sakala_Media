import AnimatedNumber, { NumberMetaData } from "@/components/shared/AnimatedNumber";
import Image from "next/image";
import border from '@/assets/border.svg'
import border2 from '@/assets/border-2.svg'
interface StatisticsSectionProps {
  title?: string;
  title2?: string;
  subtitle?: string;
  description?: string;
  description2?: string;
  statistics?: {
    activeClients: NumberMetaData;
    adAccounts: NumberMetaData;
    adSpend: NumberMetaData;
  };
}

const StatisticsSection: React.FC<StatisticsSectionProps> = ({
  title = "The Numbers That Define",
  title2="Our Success",
  subtitle = "Our clients trust us, and we're certain you will too!",
  description = "Over the last 4 years, Skala has thrived, delivering exceptional results for over 3,000 clients.",
  description2 = "Our commitment to innovation and excellence has solidified our reputation as a trusted partner in their success.",
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
    <div className="statistics-section flex flex-col items-center w-full ">

      <h1 className="text-3xl text-center  text-[#FFF] lg:main-title lg:text-6xl lg:font-bold">{title}</h1>
      <h1 className="text-3xl text-center  italic pt-3 text-[#6B8BFF] lg:subtitle lg:text-6xl lg:font-bold">{title2}</h1>
      <p className="text-[14px] text-center font-thin pt-4 lg:subtitle">{subtitle}</p>
     
      <div className="relative w-full flex justify-center pt-10">
        <div className="flex flex-col lg:flex-row justify-center w-full mx-[40px] gap-16 lg:gap-[100px] p-5">
          <StatisticItem numberMetData={statistics.activeClients} label="ACTIVE CLIENTS" />
          <StatisticItem numberMetData={statistics.adAccounts} label="AD ACCOUNTS SHARED" />
          <StatisticItem numberMetData={statistics.adSpend} label="ADVERTISING SPEND" />
        </div>
        <Image src={border} className="absolute top-[29%] w-[90%] 2xl:w-[80%] hidden lg:block " alt="img"></Image>
        <Image src={border2} className="absolute bottom-[-45%] w-[90%] 2xl:w-[93%] block lg:hidden " alt="img"></Image>
      </div>

   
      <h2 className="text-[#FFF] text-center text-2xl font-bold lg:font-[68px] secondary-title pt-[110px] ">Why Clients Love Our Service</h2>
      <p className="text-sm text-center font-medium description px-[35px] pt-1 lg:py-[50px] ">{description}</p>
      <p className="text-sm text-center font-medium description px-[35px] pt-1 pb-[50px] lg:py-[50px] ">{description2}</p>
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
