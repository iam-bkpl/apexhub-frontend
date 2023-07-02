const LoadingSpinner = () => {
  return (
    <div className="text-center m-5 text-primary  ">
      <div className="spinner-border m-5" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <p>Loading ...</p>
    </div>
  );
};

export default LoadingSpinner;
