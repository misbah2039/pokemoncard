import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

const PokemonLists = ({pokemon}) => {
  return (
    <div>
      <div className="container-fluid ps-5 pe-5">
        <div className="row">
          {pokemon.map((p, index) => {
            return (
              <div className="col-md-3 col-lg-2 mt-5 col-6" key={index}>
                <div className="card  border-1">
                  <img
                    src={p.images.small}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <a
                      href={`/about/${p.id}`}
                      className="card-title text-decoration-none"
                    >
                      {p.name}
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PokemonLists;
