export default function MediaQueriesDemo() {
  return (
    <div>
      <h3>Media queries</h3>
      <div
        id="wd-mq-rule-default"
        className="wd-media-queries-demo wd-mq-rule-default wd-mq-rule-750 wd-mq-rule-1000 wd-mq-rule-1250 wd-mq-rule-ai"
      >
        Resize the window. This box is gray by default, salmon under 750 pixels,
        light green up to 1000, light blue up to 1250, and plum beyond that.
      </div>
      <div id="wd-mq-rule-750" className="wd-mq-rule-default wd-mq-rule-750">Under 750</div>
      <div id="wd-mq-rule-1000" className="wd-mq-rule-default wd-mq-rule-1000">751 to 1000</div>
      <div id="wd-mq-rule-1250" className="wd-mq-rule-default wd-mq-rule-1250">1001 to 1250</div>
      <div id="wd-mq-rule-ai" className="wd-mq-rule-default wd-mq-rule-ai">Sample rule above 1250</div>
    </div>
  );
}
