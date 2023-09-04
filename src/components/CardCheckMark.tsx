import { CheckIcon } from "@heroicons/react/24/solid";

export const CardCheckMark = () => {
  return (
    <div
      className={`absolute right-[-80px] top-[calc(50%-32px)] flex h-[64px] w-[64px] items-center justify-center rounded-full bg-purple-100`}
    >
      <CheckIcon className="h-16 w-16 text-green-800" />
    </div>
  );
};
