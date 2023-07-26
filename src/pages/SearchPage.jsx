import React from 'react'

const SearchPage = () => {
    return (
        <>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-xs-12 col-sm-8 col-md-6">
                        <form>
                            <div className="mb-3">
                                <input type="text" className="form-control" placeholder="Enter your search query" />
                            </div>
                            <button type="submit" className="btn btn-primary">
                                Search
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SearchPage