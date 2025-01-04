import React from "react";

interface IPersonInfoCard {
  name: string;
  title: string;
}

const PersonInfoCard = ({ name, title }: IPersonInfoCard) => {
  return (
    <div className={"flex flex-col items-center gap-2  w-full py-4 card-gradient rounded-xl"}>
      <div className={"w-24 h-24 rounded-xl bg-primary"} />
      <div className={"text-white"}>
        <h2 className={"text-2xl font-bold"}>{name}</h2>
        <p className={"text-lg"}>{title}</p>
      </div>
    </div>
  );
};

export default PersonInfoCard;
