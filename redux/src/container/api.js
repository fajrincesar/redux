import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from '../store/actions/index';
import './api.css'

class Api extends Component {
    state = {
        sort: true
    }

    sortir=()=>{
        this.setState(x =>{
            return {sort: !x.sort}
        })
    }

    componentDidMount(){
        this.props.onfetchkripto()
        setInterval(this.props.onfetchkripto, 30000)
    }

    render(){
        let fp = (val) =>{
            var numberformat = Intl.NumberFormat();
            return numberformat.format(val)
        }

        const datatemp = this.state.sort ? Object.values(this.props.kripto).sort((a,b)=> a.rank - b.rank) : Object.values(this.props.kripto).sort((a,b)=> b.rank - a.rank)

        const datacurrent = datatemp.map((item, index)=>{
            if (item.quotes.IDR.percent_change_1h >=0 ) {
            return (
                <tr key={item.id} data-toggle="modal" data-target="#examplemodal">
                    <td>{item.rank}</td>
                    <td>{item.symbol}</td>
                    <td>{item.name}</td>
                    <td>{fp(item.quotes.IDR.price)}</td>
                    <td className="green"> <i class="fas fa-arrow-up"></i> &nbsp; {item.quotes.IDR.percent_change_1h}%</td>
                </tr>
            )
        }else {
            return (
                <tr key={item.id} data-toggle="modal" data-target="#examplemodal">
                    <td>{item.rank}</td>
                    <td>{item.symbol}</td>
                    <td>{item.name}</td>
                    <td>{fp(item.quotes.IDR.price)}</td>
                    <td className="red"> <i class="fas fa-arrow-down"></i> &nbsp; {item.quotes.IDR.percent_change_1h}%</td>
                </tr>
            )
        }
    })
        return(
            <div>
                <table className="table">
                    <tr >
                        <th style={{textAlign:"center"}}><i onClick={()=>this.sortir()} className="fas fa-sort" ></i> Rank</th> 
                        <th style={{textAlign:"center"}}>Code</th>
                        <th style={{textAlign:"center"}}>Name</th>
                        <th style={{textAlign:"center"}}>Price</th>
                        <th style={{textAlign:"center"}}>Change %</th>
                    </tr>
                        {datacurrent}
                </table>
            </div>
        )
    }
}

const mapPropsToState = state =>{
    return {
        kripto:state.datakripto.bitList
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onfetchkripto: ()=> dispatch(action.fetchCryptoList())
    }
}

export default connect(mapPropsToState, mapDispatchToProps)(Api);