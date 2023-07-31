import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const url = "https://course-api.com/react-tabs-project";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [jobIndex, setJobIndex] = useState(0);

  const handleCurrentJobClick = (currentJob) => setJobIndex(currentJob);

  const fetchJobs = async () => {
    try {
      const fetchData = await fetch(url);
      const data = await fetchData.json();
      setJobs(data);
      setIsLoading(false);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (isLoading) {
    return (
      <div className="section loading">
        <h2>Loading...</h2>
      </div>
    );
  }

  const currentJob = jobs[jobIndex];

  return (
    <section className="section">
      <Title />

      <div className="jobs-center">
        <BtnTabs
          jobs={jobs}
          onBtnClick={handleCurrentJobClick}
          jobIndex={jobIndex}
        />

        <JobInfo {...currentJob} />
      </div>
    </section>
  );
}

function Title() {
  return (
    <div className="title">
      <h2>Tabs</h2>
      <div className="underline"></div>
    </div>
  );
}

function BtnTabs({ jobs, onBtnClick, jobIndex }) {
  return (
    <div className="btn-container">
      {jobs.map((job, i) => (
        <button
          type="button"
          onClick={() => onBtnClick(i)}
          className={`job-btn ${i === jobIndex && "active-btn"}`}
          key={i}
        >
          {job.company}
        </button>
      ))}
    </div>
  );
}

function JobInfo({ title, dates, duties, company }) {
  return (
    <div className="job-info">
      <h3>{title}</h3>
      <h4>{company}</h4>
      <p className="job-date">{dates}</p>
      {duties.map((duty, ind) => (
        <div className="job-desc" key={ind}>
          <FaAngleDoubleRight className="job-icon" />
          <p>{duty}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
