import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

const DetailsPokemon = ({ pokemon }) => {
    return (
        <div>
            <div className="container-fluid ps-5 pe-5">
                <div className="row">
                    {pokemon.map((p, index) => {
                        return (
                            <div key={index} className="mt-5">
                                <div className="row g-0">

                                    <div className="col-12">
                                        <table className="table table-hover">
                                        <thead className="bg-dark">
                                                <tr className="text-white">
                                                    <th scope="col">Image</th>
                                                    <th scope="col">Name</th>
                                                    <th scope="col">Id</th>
                                                    <th scope="col">Artist</th>
                                                    <th scope="col">hp</th>
                                                    
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td><img src={p.images.small} alt="" style={{ width: "40px", height: "40px" }} /></td>
                                                    <td>{p.name}</td>
                                                    <td>{p.id}</td>
                                                    <td>{p.artist}</td>
                                                    <td>{p.hp}</td>
                                                    
                                                </tr>

                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="col-12 mt-5">
                                        <table className="table table-hover">
                                            <thead className="bg-dark">
                                                <tr className="text-white">
                                                    <th scope="col">Legalities</th>
                                                    <th scope="col">Number</th>
                                                    <th scope="col">Rarity</th>
                                                    <th scope="col">Supertype</th>
                                                    <th scope="col">Evolves To</th>

                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>{p.legalities.unlimited}</td>
                                                    <td>{p.number}</td>
                                                    <td>{p.rarity}</td>
                                                    <td>{p.supertype}</td>
                                                    <td>{p.evolvesTo ? p.evolvesTo.map((evolve,index)=>{return evolve}) : "undefined" }</td>

                                                </tr>

                                            </tbody>
                                        </table>
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

export default DetailsPokemon;
