import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobPosts } from "../../redux/actions/acs";
import { useNavigate } from "react-router-dom";
import DashboardSidebar from './Sidebar'
import DashboardNavbar from './Navbar'
import CardBig from './CardBig'
import JobTable from './JobTable'


const JobsDashboard = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    const jobPosts = useSelector((state) => state.acs.jobPosts);

    //fetching jobType from store
    const jobType = useSelector((state) => state.acs.jobPosts);
    useEffect(() => {
        dispatch(fetchJobPosts());
    }, [dispatch]);

    const getFormattedDate = (dateString) => {
        const formattedDate = new Date(dateString).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
        });
        return formattedDate;
    };
    // Filter active and inactive products
    const activeJobs = jobPosts.filter((jobpost) => jobpost.is_active);
    const inactiveJobs = jobPosts.filter((jobpost) => !jobpost.is_active);

    // Get the total count of active and inactive products
    const totalActiveJobs = activeJobs.length;
    const totalInactiveJobs = inactiveJobs.length;
    const totalJobs = (jobPosts.length.toString());

    return (
        <>
            <div className="container-xxl position-relative bg-white d-flex p-0 mw-100">
                <DashboardSidebar />

                <div className="content nav-content">
                    <DashboardNavbar />

                    <div className="container-fluid pt-4 px-4">
                        <div className="row g-4">
                            <CardBig cardTitle="Total Jobs" number={totalJobs} />
                            <CardBig cardTitle="Active Jobs" number={totalActiveJobs} />
                            <CardBig cardTitle="Inactive Jobs" number={totalInactiveJobs} />
                        </div>
                    </div>

                    <JobTable />

                </div>

            </div>
        </>
    )
}

export default JobsDashboard