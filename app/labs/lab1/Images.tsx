export default function Images() {
  return (
    <div id="wd-images">
      <h4>Image tag</h4>
      An image sized by width:
      <br />
      <img id="wd-starship" src="/images/course-react.svg" width="400px" alt="Orbital rings around a central node" />
      <br />
      An image sized by height:
      <br />
      <img id="wd-teslabot" src="/images/course-node.svg" height="200px" alt="Connected nodes in a network graph" />
      <br />
      An image I made for this course:
      <br />
      <img id="wd-your-image" src="/images/course-webdev.svg" width="300px" alt="Browser window with page layout blocks" />
      <br />
      An extra sample image:
      <br />
      <img id="wd-ai-image" src="/images/course-mongo.svg" width="200px" alt="Stacked database cylinders" />
    </div>
  );
}
