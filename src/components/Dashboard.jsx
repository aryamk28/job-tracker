function Dashboard({ jobs }) {
    const total = jobs.length;
    const interviews = jobs.filter(j => j.status === "Interview").length;
    const offers = jobs.filter(j => j.status === "Offer").length;
    const rejected = jobs.filter(j => j.status === "Rejected").length;

    return (
        <section className="dashboard">
            <div className="card" data-title="Total"><span>{total}</span></div>
            <div className="card" data-title="Interviews"><span>{interviews}</span></div>
            <div className="card" data-title="Offers"><span>{offers}</span></div>
            <div className="card" data-title="Rejected"> <span>{rejected}</span></div>
        </section>
    );
}

export default Dashboard;
