import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "./redux/actions/auth";

const App = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const access = useSelector((state) => state.auth.access);
  useEffect(() => {
    if (access || isAuthenticated) {
      // dispatch(loadUser);
      dispatch(loadUser());
    }
  }, [dispatch, isAuthenticated]);

  return (
    <div>
      <Router>
        <AppRoutes />
      </Router>
    </div>
  );
};

export default App;
