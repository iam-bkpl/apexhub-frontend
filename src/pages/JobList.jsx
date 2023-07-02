import React from "react";
import JobItem from "../components/JobItem";

const jobItemsData = [
  {
    company_logo: "https://picsum.photos/80/80",
    title: "Software Engineer",
    location: "New York, USA",
    job_type: "Full Time",
    salary: "$123 - $456",
    expire_date: "01 Jan, 2045",
  },
  {
    company_logo: "https://picsum.photos/80/80",
    title: "Web Developer",
    location: "San Francisco, USA",
    job_type: "Part Time",
    salary: "$78 - $234",
    expire_date: "15 Feb, 2045",
  },
  {
    company_logo: "https://picsum.photos/80/80",
    title: "Data Analyst",
    location: "London, UK",
    job_type: "Contract",
    salary: "$100 - $200",
    expire_date: "30 Mar, 2045",
  },
  {
    company_logo: "https://picsum.photos/80/80",
    title: "UX Designer",
    location: "Berlin, Germany",
    job_type: "Remote",
    salary: "$80 - $150",
    expire_date: "10 Apr, 2045",
  },
];

function App() {
  return (
    <div>
      {jobItemsData.map((jobItem, index) => (
        <JobItem
          key={index}
          company_logo={jobItem.company_logo}
          title={jobItem.title}
          location={jobItem.location}
          job_type={jobItem.job_type}
          salary={jobItem.salary}
          expire_date={jobItem.expire_date}
        />
      ))}
    </div>
  );
}

export default App;
