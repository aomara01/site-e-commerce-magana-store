import React from 'react'
import ProduiItem from '../components/ProduiItem'
import ProduitsApi from '../api/produits'

export default class Produits extends React.Component {
    
    state={
        produits: [],
    }
    
    
    componentDidMount(){
        ProduitsApi.getAll()
            .then(data => {
                this.setState({
                    produits: data
                })
                console.log({data})
            })
    }
    
    render(){
    return (
        <div>
            <h1>Produits</h1>

            <div className="row">
                {this.state.produits.map(produit => 
                <div className={'col-4'} key ={produit.id}>
                    <ProduiItem produit={produit} />
                </div>
                    
                )}
                
            </div>
        </div>
    )
}
}