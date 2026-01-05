
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import Filters from "./components/Filters";
import JobTable from "./components/JobTable";
import AddJobModal from "./components/AddJobModal";
import "./index.css";
import { useState, useEffect } from "react";


function App() {
  const [jobs, setJobs] = useState(() => {
    const savedJobs = localStorage.getItem("jobs");
    return savedJobs ? JSON.parse(savedJobs) : [
      { id: 1, company: "Google", role: "Frontend Dev", status: "Interview" },
      { id: 2, company: "Amazon", role: "UI Engineer", status: "Applied" },
    ];
  });
  useEffect(() => {
    localStorage.setItem("jobs", JSON.stringify(jobs));
  }, [jobs]);


  const clearAllJobs = () => {
    const confirmClear = window.confirm(
      "Are you sure you want to delete all job entries?"
    );

    if (confirmClear) {
      localStorage.removeItem("jobs");
      setJobs([]);
    }
  };




  const [showModal, setShowModal] = useState(false);
  const [editingJob, setEditingJob] = useState(null);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  // 🔹 DELETE JOB
  const deleteJob = (id) => {
    setJobs(jobs.filter(job => job.id !== id));
  };

  // 🔹 OPEN EDIT MODAL (THIS WAS MISSING / MISPLACED)
  const openEditModal = (job) => {
    setEditingJob(job);
    setShowModal(true);
  };

  // 🔹 UPDATE JOB
  const updateJob = (updatedJob) => {
    setJobs(
      jobs.map(job =>
        job.id === updatedJob.id ? updatedJob : job
      )
    );
  };

  // 🔹 FILTER + SEARCH
  const filteredJobs = jobs.filter(job => {
    const matchSearch =
      job.company.toLowerCase().includes(search.toLowerCase()) ||
      job.role.toLowerCase().includes(search.toLowerCase());

    const matchStatus =
      statusFilter === "All" || job.status === statusFilter;

    return matchSearch && matchStatus;
  });

  return (
    <>
      <Header
        openModal={() => setShowModal(true)}
        clearAllJobs={clearAllJobs}
      />


      <main className="container">
        <Dashboard jobs={jobs} />
        <br /><br /><br />
        <Filters
          search={search}
          setSearch={setSearch}
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
        />
        <br /><br /><br /><br />
        <JobTable
          jobs={filteredJobs}
          deleteJob={deleteJob}
          openEditModal={openEditModal}
        />
      </main>

      {showModal && (
        <AddJobModal
          jobs={jobs}
          setJobs={setJobs}
          editingJob={editingJob}
          updateJob={updateJob}
          closeModal={() => {
            setShowModal(false);
            setEditingJob(null);
          }}
        />
      )}
    </>
  );
}

export default App;
