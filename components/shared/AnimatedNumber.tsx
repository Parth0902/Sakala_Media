import useNumberAnimation from "@/hooks/useNumberAnimation";

export interface NumberMetaData {
  number: number;
  prefix?: string;
  suffix?: string;
}

const AnimatedNumber: React.FC<{ number: number }> = ({ number }) => {
  const displayValue = useNumberAnimation(number);
  return <p className="plus">{displayValue}</p>;
};

export default AnimatedNumber;
