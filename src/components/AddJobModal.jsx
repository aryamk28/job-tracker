import { useState, useEffect } from "react";

function AddJobModal({
    jobs,
    setJobs,
    closeModal,
    editingJob,
    updateJob,
}) {
    const [company, setCompany] = useState("");
    const [role, setRole] = useState("");
    const [status, setStatus] = useState("Applied");

    // PREFILL FORM FOR EDIT
    useEffect(() => {
        if (editingJob) {
            setCompany(editingJob.company);
            setRole(editingJob.role);
            setStatus(editingJob.status);
        }
    }, [editingJob]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!company || !role) {
            alert("Please fill all fields");
            return;
        }

        if (editingJob) {
            updateJob({
                ...editingJob,
                company,
                role,
                status,
            });
        } else {
            setJobs([
                ...jobs,
                {
                    id: Date.now(),
                    company,
                    role,
                    status,
                },
            ]);
        }

        closeModal();
    };

    return (
        <div className="modal-backdrop">
            <div className="modal">
                <h2>{editingJob ? "Edit Job" : "Add Job"}</h2>

                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="Company"
                    />

                    <input
                        type="text"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        placeholder="Role"
                    />

                    <select
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                    >
                        <option>Applied</option>
                        <option>Interview</option>
                        <option>Offer</option>
                        <option>Rejected</option>
                    </select>

                    <div className="modal-actions">
                        <button type="submit">
                            {editingJob ? "Update" : "Add"}
                        </button>
                        <button type="button" onClick={closeModal}>
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddJobModal;
