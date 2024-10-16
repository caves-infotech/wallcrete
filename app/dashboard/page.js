import Floors from "./components/Floors";
import ProjectDetail from "./components/ProjectDetail";

export default function DashboardPage() {
  return (
    <div className=" w-1/2 mt-16 ml-auto mr-72 ">
      <ProjectDetail />
      <Floors />
    </div>
  );
}
