function JobRow({ job, deleteJob, openEditModal }) {
    return (
        <tr>
            <td>{job.company}</td>
            <td>{job.role}</td>
            <td>
                <span className={`status ${job.status.toLowerCase()}`}>
                    {job.status}
                </span>
            </td>

            <td className="action-cell">
                <div className="action-wrapper">
                    <button className="edit-btn" onClick={() => openEditModal(job)}>Edit</button>
                    <button className="delete-btn" onClick={() => deleteJob(job.id)}>Delete</button>
                </div>
            </td>

        </tr>
    );
}

export default JobRow;
