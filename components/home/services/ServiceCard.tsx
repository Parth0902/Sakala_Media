export interface ServiceCardProps {
  number: string;
  title: string;
  description: string;
  bgColor: "blue" | "black";
}

const ServiceCard: React.FC<ServiceCardProps> = ({ number, title, description, bgColor }) => {
  return (
    <div
      className={`flex overflow-hidden flex-col grow items-start py-12 pr-20 pl-8 w-full font-medium text-white ${
        bgColor === "blue" ? "bg-blue-600" : "bg-neutral-900"
      } rounded-3xl max-md:px-5 max-md:mt-6 max-md:max-w-full`}
      role="article"
    >
      <div className="overflow-hidden px-5 text-xl whitespace-nowrap bg-white bg-opacity-40 h-[61px] flex items-center justify-center rounded-[100px] text-stone-50 w-[61px] max-md:pr-5">
        {number}
      </div>
      <h3 className="mt-5 text-3xl font-bold max-md:max-w-full">{title}</h3>
      <p className="self-stretch mt-5 text-base leading-7 max-md:max-w-full">{description}</p>
    </div>
  );
};

export default ServiceCard;
