import CourseCard from "./CourseCard";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title" className="text-3xl font-bold">Dashboard</h1>
      <hr className="my-3" />
      <h2 id="wd-dashboard-published" className="text-xl font-semibold">
        Published Courses (4)
      </h2>
      <hr className="my-3" />
      <div
        id="wd-dashboard-courses"
        className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
      >
        <CourseCard
          id="1234"
          title="CS1234 React JS"
          subtitle="Full Stack software developer"
          image="/images/1.png"
        />
        <CourseCard
          id="2345"
          title="CS2345 Node JS"
          subtitle="Server side JavaScript"
          image="/images/2.png"
        />
        <CourseCard
          id="3456"
          title="CS3456 MongoDB"
          subtitle="NoSQL Databases"
          image="/images/1.png"
        />
        <CourseCard
          id="5610"
          title="CS5610 Web Development"
          subtitle="Building full stack applications with Next.js"
          image="/images/2.png"
        />
      </div>
    </div>
  );
}
