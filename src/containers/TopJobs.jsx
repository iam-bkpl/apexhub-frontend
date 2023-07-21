import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import JobItem from "../components/JobItem";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobPost, fetchJobPosts, postJobVote } from "../redux/actions/acs";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";
import CompanyLogo from "../assets/testImages/about-1.jpg";

const TopJobs = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    const handleApplyNow = (job_id) => {
        navigate(`/job-detail/${job_id}`);
    };

    const [company_logo, setCompany_logo] = useState(CompanyLogo);
    const jobPosts = useSelector((state) => state.acs.jobPosts);

    const getTop5HighestVoteCount = () => {
        return jobPosts
            .slice() // Create a copy of the array to avoid modifying the original array
            .sort((a, b) => b.vote_count - a.vote_count) // Sort in descending order based on vote_count
            .slice(0, 5); // Take the first 5 elements, which are the top 5 highest vote counts
    };

    const top5HighestVoteCountPosts = getTop5HighestVoteCount();
    console.log("featured Job posts", top5HighestVoteCountPosts);

    useEffect(() => {
        dispatch(fetchJobPosts());
        setLoading(false);
    }, []);

    const handleVote = async (job_id) => {
        const formData = new FormData();
        formData.append("jobpost", job_id);
        await dispatch(postJobVote({ job_id, formData }));
        await dispatch(fetchJobPosts());
    };
    const getFormattedDate = (dateString) => {
        const formattedDate = new Date(dateString).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
        });
        return formattedDate;
    };

    if (loading) {
        return <LoadingSpinner />;
    }
    else {
        return (
            <>
                <section id="special" className="py-5">
                    <div className="container">
                        <div className="title text-center py-5">
                            <h2 className="position-relative d-inline-block">Top Jobs</h2>
                        </div>

                        <div className="special-list row g-0">
                            <div className="tab-content">
                                <div id="tab-1" className="tab-pane fade show p-0 active">
                                    {top5HighestVoteCountPosts.map((topJob => {
                                        return (
                                            <JobItem
                                                key={topJob.id}
                                                id={topJob.id}
                                                company={topJob.company_name}
                                                title={topJob.title}
                                                location={topJob.location}
                                                job_type={topJob.job_type}
                                                salary={topJob.salary}
                                                vote_count={topJob.vote_count}
                                                expire_date={getFormattedDate(topJob.expire_date)}
                                                applyNow={() => handleApplyNow(topJob.id)}
                                                vote={() => handleVote(topJob.id)}
                                                experience_level={topJob.experience_level}
                                            />
                                        )
                                    }))}
                                    <div className="text-center mt-5">
                                        <Link className="rounded-pill text-white text-decoration-none  py-3 px-5 main-btn" to="/job-list">Browse
                                            More Jobs</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
};

export default TopJobs;
