import React, { Component } from 'react'
import { appetizers, salads, entrees, sides, kids, cakes, pies  } from './menuDataBase';

export default class MenuInfo extends Component{
    render(){
       function list(data) {
           const items = data;
           const listitem = items.map((data) =>
           
           <li  className='menuLi' key={data}>{data}</li>);
           return(<ul className='menu'>{listitem}</ul>)
       }
        return(
        <div className='menudiv'>
            <h1>MENU</h1>
            <div>
                <h2>Appetizers</h2>
                <p>Half pan serves 8-12  $40 | Whole pan serves 20-25  $80</p>
                <p>*served with marinara</p>
                <br/>
                {list(appetizers)}
            </div>
            
            <div>
                <h2>Salads</h2>
                <p>Half pan serves 8-12  $35 | Whole pan serves 20-25  $70</p>
                <p>*Choice of Dressing on the side</p>
                <br/>
                {list(salads)}
            </div>
            
            <div>
                <h2>Entrees</h2>
                <p>Half pan serves 8-12  $45 | Whole pan serves 20-25  $85</p>
                <br/>
                {list(entrees)}
            </div>
            
            <div>
                <h2>Sides</h2>
                <p>Half pan serves 8-12  $35 | Whole pan serves 20-25  $70</p>
                <br/>
                {list(sides)}
            </div>
           
            <div>
                <h2>Big Kids Menu</h2>
                <p>Half pan serves 8-12  $35 | Whole pan serves 20-25  $70</p>
                <br/>
                {list(kids)}
            </div>
            
            <h2>Desserts</h2>
                <h3>Assorted Cookies</h3>
                <p>One Dozen  $20 | Two Dozen  $24</p>
                <br/>
                <h3>Cupcakes</h3>
                <p>One Dozen  $24 | Two Dozen $48</p>
                <p>Chocolate | Vanilla</p>
                <br/>
                <h3>8" Cakes  $25</h3>
                    {list(cakes)}
                <h3>Pies</h3>
                <p>8"  $10 | 10"  $14</p>
                {list(pies)}
                <br/>
                <p>Special requests are welcome!</p>
                <p>Vegetarian options available upon request</p>
                <p>Menu prices subject to change</p>
        </div>
    )}
}