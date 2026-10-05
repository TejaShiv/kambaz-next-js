import CourseCard from "./CourseCard";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title" className="text-3xl font-bold">Dashboard</h1>
      <hr className="my-3" />
      <h2 id="wd-dashboard-published" className="mt-5 text-xl font-semibold">
        Published Courses (4)
      </h2>
      <hr className="my-3" />
      <div
        id="wd-dashboard-courses"
        className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
      >
        <CourseCard id="1234" title="CS1234 React JS"
          subtitle="Full Stack software developer" image="/images/course-react.svg" />
        <CourseCard id="2345" title="CS2345 Node JS"
          subtitle="Server side JavaScript" image="/images/course-node.svg" />
        <CourseCard id="3456" title="CS3456 MongoDB"
          subtitle="NoSQL Databases" image="/images/course-mongo.svg" />
        <CourseCard id="5610" title="CS5610 Web Development"
          subtitle="Building full stack applications with Next.js" image="/images/course-webdev.svg" />
      </div>
    </div>
  );
}
