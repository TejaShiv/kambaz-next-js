export default function HeadingTags() {
    return (
        <div id="wd-h-tag">
            <h4>Heading Tags</h4>
            Text documents are often broken up into several sections and
            subsections. Each section is usually prefaced with a short title
            or heading that summarizes the topic of the section it precedes.
            There are 6 heading tags for different sizes: h1, h2, h3, h4, h5,
            and h6. Tag h1 is the largest heading and h6 is the smallest. A{" "}
            <span id="wd-inline-span">span</span> sits in this sentence without
            starting a new line.
            <h1>Heading 1</h1>
            <h2>Heading 2</h2>
            <h3>Heading 3</h3>
            <h4>Heading 4</h4>
            <h5>Heading 5</h5>
            <h6>Heading 6</h6>
            <div id="wd-your-heading">
                <h4>Tejas Shivaprasad</h4>
                Hey, I'm Tejas Shivaprasad. I'm a student at Northeastern University.
                I'm a computer science major. I'm interested in web development
                and <span id="wd-your-span">machine learning</span>.
            </div>
            <div id="wd-ai-headings">
                <h4>Lab notes</h4>
                Notes from working through the heading, div, and span examples in
                this lab.
                <h5>What I built</h5>
                A component with sample heading tags from h1 to h6, plus a division
                holding explanatory text and an inline span.
                <h6>Next step</h6>
                Move on to the paragraph tag and see how it changes vertical spacing.
            </div>
        </div>
    );
}