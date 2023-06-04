import React from "react";

function Preloader(loading=true) {
  if(loading) {
    return (
        <div className="preloader">
    <div>
        <div>
            <div>
                <div>
                    <div>
                        <div>
                            <div>
                                <div>
                                    <div></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )};
}

export default Preloader;