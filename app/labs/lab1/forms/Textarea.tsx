export default function Textarea() {
    return (
      <>
        <h5>Text boxes</h5>
        <label>Biography:</label>
        <br />
        <textarea
          id="wd-textarea"
          cols={30}
          rows={10}
          defaultValue="I am a computer science student at Northeastern University. I build web applications and I am interested in machine learning."
        />
      </>
    );
  }