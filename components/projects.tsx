"use client";

import React, { useState } from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);
  const [showMore, setShowMore] = useState(false);
  
  // Show first 7 projects initially, rest when "Load More" is clicked
  const displayedProjects = showMore ? projectsData : projectsData.slice(0, 7);
  const hasMoreProjects = projectsData.length > 7;

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My projects</SectionHeading>
      <div>
        {displayedProjects.map((project, index) => {
          // Hide images for projects in the "Load More" section (index >= 7 in original array)
          const originalIndex = projectsData.findIndex(p => p.title === project.title);
          const showImage = originalIndex < 7;
          
          return (
            <React.Fragment key={index}>
              <Project {...project} showImage={showImage} />
            </React.Fragment>
          );
        })}
      </div>
      {hasMoreProjects && !showMore && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setShowMore(true)}
            className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60 font-medium"
          >
            Load More
          </button>
        </div>
      )}
    </section>
  );
}
