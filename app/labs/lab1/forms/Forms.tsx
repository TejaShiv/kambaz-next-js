import TextFields from "./TextFields";
import Textarea from "./Textarea";
import RadioButtons from "./RadioButtons";

export default function Forms() {
  return (
    <div id="wd-forms">
      <h4>Form Elements</h4>
      <form id="wd-text-fields">
        <TextFields />
        <Textarea />
        <RadioButtons />
        {/* add the next form components here */}
      </form>
    </div>
  );
}