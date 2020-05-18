import React from 'react'

export default function ProduiItem(props) {

    const {produit} = props;

    return (
        <div>
            <div className="card">
                <img src={produit.image} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">
                            {produit.name}
                        </h5>
                            <p className="card-text">
                               Prix {produit.price} dh
                               <br/>
                               Quantite : 1 
                               <br/>
                               Total : {produit.price}
                            </p>
                        <a className="btn btn-danger">
                            <i className="fa fa-trash"></i> Supprimer
                        </a>
                    </div>
            </div>

        </div>
    )
}
