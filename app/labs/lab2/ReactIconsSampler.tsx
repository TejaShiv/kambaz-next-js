import { FaRegCircleUser, FaRegFlag, FaCalendarDays } from "react-icons/fa6";
import { AiOutlineDashboard } from "react-icons/ai";
import { LiaBookSolid } from "react-icons/lia";
import { IoCalendarOutline } from "react-icons/io5";
import { FaInbox } from "react-icons/fa";

export default function ReactIconsSampler() {
  return (
    <div id="wd-react-icons-sampler">
      <h3>React Icons</h3>
      <p>
        React Icons packages thousands of icons as React components. Each one
        renders an inline svg you can size and color like any other element.
      </p>
      <FaRegCircleUser style={{ fontSize: "32px", color: "navy" }} />{" "}
      <AiOutlineDashboard style={{ fontSize: "32px", color: "crimson" }} />{" "}
      <LiaBookSolid style={{ fontSize: "32px", color: "darkgreen" }} />{" "}
      <IoCalendarOutline style={{ fontSize: "32px", color: "purple" }} />{" "}
      <FaInbox style={{ fontSize: "32px", color: "teal" }} />{" "}
      <FaRegFlag style={{ fontSize: "32px", color: "chocolate" }} />{" "}
      <FaCalendarDays style={{ fontSize: "32px", color: "slateblue" }} />
    </div>
  );
}
