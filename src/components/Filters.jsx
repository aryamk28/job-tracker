function Filters({ search, setSearch, statusFilter, setStatusFilter }) {
    return (
        <section className="filters">
            <div className="search-container">
                <input className="search-bar"
                    type="text"
                    placeholder="Search by company or role"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            <div className="select-container">
                <select
                    className="custom-select"
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                >
                    <option value="All">All</option>
                    <option value="Applied">Applied</option>
                    <option value="Interview">Interview</option>
                    <option value="Offer">Offer</option>
                    <option value="Rejected">Rejected</option>
                </select>
            </div>
        </section>
    );
}

export default Filters;
