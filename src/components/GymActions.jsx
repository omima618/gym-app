import './GymActions.css';
const GymActions = () => {
    return (
        <div className="container">
            <div className="d-flex flex-column flex-lg-row justify-content-between align-items-center">
                <div className="filter-bar position-relative ">
                    <div className="inp-wrapper position-relative">
                        <input
                            type="search"
                            className="py-4 px-2 rounded-4 d-block w-100 border-0 outline-0 text-muted"
                            placeholder="Search by gym name, facilities"
                        />
                        <button className="filter-btn btn main-color fw-bold position-absolute top-50 translate-middle-y">
                            Filter
                        </button>
                        <button className="position-absolute  btn sec-btn top-0 end-0">
                            Find Gyms
                        </button>
                    </div>
                </div>
                <button className="toggle-map-btn btn main-bg px-5 py-3 fs-5 rounded-4">
                    Switch to map view
                </button>
            </div>
        </div>
    );
};

export default GymActions;
