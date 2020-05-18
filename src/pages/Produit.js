import React from 'react'
import {getById} from '../api/produits'

export default class Produit extends React.Component {
    
    state={
        loading:true,
        quantity: 0,
        produit:{}
    }
    
    componentDidMount(){
        const id = this.props.match.params.id;

        getById(parseInt(id))
        .then(produit => {
           setTimeout(()=>{
            this.setState({
                produit,
                loading: false,
            })
           }, 2000)
        })
    }
    handlQantity = (event)=>{
        const value = event.target.value;

        if(value < 0)
            return;

        this.setState({
            quantity: event.target.value,
        })
    }
    
    render(){

        if(this.state.loading)
        return 'Loading ...';


        return (
            <div>
                <div className={'row'}>
                    <div className="col-6">
                        <img src={this.state.produit.image} width={'100%'}/>
                    </div>
                    <div className="col-6">
                        <h1>{this.state.produit.name}</h1>
                        <p>Prix : {this.state.produit.price}</p>
                        <p>{this.state.produit.description}</p>
                        <input type="number" value={this.state.quantity} onChange={this.handlQantity}/><br/><br/>

                        <p>Total : {this.state.quantity * this.state.produit.price}</p>
                        
                        
                        <button className="btn btn-primary">
                            Add too cart
                        </button>
                    </div>
                </div>
            </div>
        );
}
}