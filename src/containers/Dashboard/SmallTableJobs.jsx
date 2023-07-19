import React from 'react'

const SmallTableJobs = () => {
    return (
        (
            <>
                <div className="col-sm-12 col-xl-6">
                    <div className="bg-light-custom table-responsive rounded h-100 p-4">
                        <div className="d-flex align-items-center justify-content-between mb-4">
                            <h6 className="mb-0">Recent Jobs</h6>
                            <a href="">Show All</a>
                        </div>
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col" width="10%">#</th>
                                    <th scope="col" width="30%">Company</th>
                                    <th scope="col" width="40%">Job&nbsp;Title</th>
                                    <th scope="col" width="20%">Job&nbsp;Type</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Leafrog</td>
                                    <td>React Developer</td>
                                    <td>Part Time</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </>
        )
    )
}

export default SmallTableJobs