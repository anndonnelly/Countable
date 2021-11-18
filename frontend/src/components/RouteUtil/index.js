import React from "react";
import { useSelector, connect } from "react-redux";
import { Route, Redirect, withRouter } from "react-router-dom";

const Protected = ({ component: Component}) => {
    
  const user = useSelector((state) => state.session.user);
//   const sessionLoaded = useSelector((state) => state.session.loaded);
  return (
    <Route 
        render={(props )=> 
            user ? (
          <Component {...props} />
        ) :
            <Redirect to="/" />
        }
    />
  );
};
const mapStateToProps = (state)=>{
    return { loggedIn: state.session.user };
}
export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));
