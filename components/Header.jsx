import React from "react";
import { useLocation, Link } from "react-router-dom";

function Navbar({cameraAutoRotate,setCameraAutoRotate}) {
  const location = useLocation();

  // Determine the target route and button label
  const isOnCustomize = location.pathname === "/customize";
  const targetRoute = isOnCustomize ? "/buy-car" : "/customize";
  const buttonLabel = isOnCustomize ? "Buy New Car" : "Customize Your Car";

  return (
    <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark" style={{zIndex:999}}>
      <div className="container-fluid">
         <div className="d-flex">
          <a href = "/" className="navbar-brand">
            Home
          </a>
        </div>
        <div className="d-flex" >
                      <input class="form-check-input navbar-brand" type="checkbox" id='camera-autorotate' checked={cameraAutoRotate} onChange={(e) => setCameraAutoRotate(e.target.checked)}/>
                      <label class="form-check-label navbar-brand" for="flexSwitchCheckChecked">360 View</label>
         </div>   
        <div className="d-flex">
          <button className="btn btn-lg btn-primary" onClick={()=>{window.location.href = targetRoute;}}>
            {buttonLabel}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
