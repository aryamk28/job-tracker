import JobRow from "./JobRow";

function JobTable({ jobs, deleteJob, openEditModal }) {
    return (
        <section className="job-list">
            {/* Wrapper for mobile scroll */}
            <div className="table-wrapper">
                <table style={{ border: "solid, black, 1px" }}>
                    <thead>
                        <tr>
                            <th>Company</th>
                            <th>Role</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {jobs.map(job => (
                            <JobRow
                                key={job.id}
                                job={job}
                                deleteJob={deleteJob}
                                openEditModal={openEditModal}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
}

export default JobTable;
