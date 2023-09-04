import { StageCard } from "~/components/StageCard";
import { useStore } from "~/core/store";

const StartupProgress = () => {
  const { stages } = useStore();

  return (
    <div className={"flex flex-col items-center gap-8"}>
      {stages.map((stage, index) => (
        <StageCard key={stage.id} stage={stage} order={index + 1} />
      ))}
    </div>
  );
};

export default StartupProgress;
