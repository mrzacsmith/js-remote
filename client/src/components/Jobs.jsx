import React from 'react'
import JobCard from './JobCard'

const Jobs = ({ jobs }) => {
  return (
    <section>
      {jobs.map((job) => (
        <JobCard job={job} key={job.id} />
      ))}
    </section>
  )
}

export default Jobs
