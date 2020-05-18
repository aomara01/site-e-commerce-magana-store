import React from 'react'
import CartItem from '../components/CartItem'
import ProduitsApi from '../api/produits'


export default class Cart extends React.Component {

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
                <h1>Cart</h1>
    
                <div className="row">
                    {this.state.produits.map(produit => 
                    <div className={'col-3'} key ={produit.id}>
                        <CartItem produit={produit} />
                    </div>
                        
                    )}
                    
                </div>
                <br/>
                <h3>
                    Total : 3000
                </h3> <br/>
                <button className="btn btn-primary btn-block">aaaaa</button>
            </div>
        );
    }
    

}
