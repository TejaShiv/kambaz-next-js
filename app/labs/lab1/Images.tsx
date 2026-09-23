export default function Images() {
    return (
      <div id="wd-images">
        <h4>Image tag</h4>
        Loading an image from the internet:
        <br />
        <img id="wd-starship" src="/images/1.png" width="400px" alt="Sample image one" />
        <br />
        Loading a local image:
        <br />
        <img id="wd-teslabot" src="/images/2.png" height="200px" alt="Sample image two" />
        <br />
      </div>
    );
  }