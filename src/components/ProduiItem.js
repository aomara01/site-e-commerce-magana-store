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
                            </p>
                        <a href={"/produits/" + produit.id } className="btn btn-primary">
                            Plus
                        </a>
                    </div>
            </div>

        </div>
    )
}
