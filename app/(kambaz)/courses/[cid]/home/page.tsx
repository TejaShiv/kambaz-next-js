import Modules from "../modules/Modules";
import CourseStatus from "./CourseStatus";

export default function Home() {
  return (
    <div id="wd-home" className="flex gap-6">
      <div className="flex-1">
        <Modules />
      </div>
      <div className="hidden xl:block">
        <CourseStatus />
      </div>
    </div>
  );
}
