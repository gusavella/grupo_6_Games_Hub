import React from "react";

function GenresInDb({infoProducts}) {
  if(infoProducts != undefined){
    return (
      <div className="col-lg-6 mb-4">
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h5 className="m-0 font-weight-bold text-gray-800">
              Categories in data base
            </h5>
          </div>
          <div className="card-body">
            <div className="row">
            {Object.keys(infoProducts.countByCategory).map((category, i) => {
              return(<div className="col-lg-6 mb-4" key={category+i}>
                <div className="card bg-dark text-white shadow">
                  <div className="card-body" >
                  {category}
                  </div>
                </div>
              </div>)
            })}
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <h2>Cargando...</h2>
  }
 
}

export default GenresInDb;
