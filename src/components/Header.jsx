function Header({ openModal, clearAllJobs }) {
    return (
        <header className="header">
            <h1>Job Application Tracker</h1>

            <div className="header-actions">
                <button className="add-job-btn" onClick={openModal}>+ Add Job</button>
                <button className="danger" onClick={clearAllJobs}>
                    Clear All
                </button>
            </div>
        </header>
    );
}

export default Header;
