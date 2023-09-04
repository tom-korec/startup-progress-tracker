import React from "react";

interface CardNumber {
  number: number;
}

export const CardNumber: React.FC<CardNumber> = ({ number }) => {
  return (
    <div
      className={`bg-fuchsia-400 absolute left-[-20px] top-[-20px] flex h-[32px] w-[32px] items-center justify-center rounded-full`}
    >
      {number}
    </div>
  );
};
