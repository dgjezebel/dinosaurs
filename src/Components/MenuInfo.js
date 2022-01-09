import React, { Component } from 'react'
import { appetizers, salads, entrees, sides, kids, cakes, pies  } from './menuDataBase';

export default class MenuInfo extends Component{
    render(){
       function list(data) {
           const items = data;
           const listitem = items.map((data) =>
           
           <li key={data}>{data}</li>);
           return(<ul>{listitem}</ul>)
       }
        return(
        <div className='menudiv'>
            <div>
                <h2>
                    Appetizers
                </h2>
                <p>Half pan serves 8-12  $40 | Whole pan serves 20-25  $80</p>
                <p>*served with marinara</p>
                <br/>
                {list(appetizers)}
            </div>
            <div>
                <h2>
                Salads
                </h2>
                <p>Half pan serves 8-12  $35 | Whole pan serves 20-25  $70</p>
                <p>*Choice of Dressing on the side</p>
                <br/>
                {list(salads)}
            </div>
            <div>
                <h2>
                    Entrees
                </h2>
                <p>Half pan serves 8-12  $45 | Whole pan serves 20-25  $90</p>
                <br/>
                {list(entrees)}
            </div>
            <div>
                <h2>
                    Sides
                </h2>
                <p>Small $25 | Large $50</p>
                <p>*Small $20 | Large $40</p>
                <br/>
                {list(sides)}
            </div>
           
            <div>
                <h2>
                    Big Kids Menu
                </h2>
                <p>Half pan serves 8-12  $35 | Whole pan serves 20-25  $70</p>
                <br/>
                {list(kids)}
            </div>
            <h2>
                Desserts
            </h2>
            <h3>Assorted Cookie Tray</h3>
            <p>Small  $20 | Large  $24</p>
            <br/>
            <h3>Assorted Pastry Tray</h3>
            <p>Small  $20 | Large $40</p>
            <br/>
            <h3>Cupcakes</h3>
            <p>One Dozen  $24 | Two Dozen $48</p>
            <p>Chocolate | Vanilla | Red Velvet</p>
            <br/>
            <h3>8" Cakes  $25</h3>
                {list(cakes)}
            <h3>Pies</h3>
            <p>8"  $10 | 10"  $14</p>
            {list(pies)}
        </div>
    )}
}