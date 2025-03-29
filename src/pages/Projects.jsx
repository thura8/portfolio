import React from "react";

const Projects = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        My{" "}
        <span className="blue-gradient_text font-semibold drop-shadow-sm">
          Projects
        </span>
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          Of all the projects I’ve worked on over the years, these are the ones
          that mean the most to me. Many are open-source, so if something
          catches your eye, dive into the code, explore, and share your ideas
          for improvement. I’d love to see what we can build together! 🚀
        </p>
      </div>
    </section>
  );
};

export default Projects;
