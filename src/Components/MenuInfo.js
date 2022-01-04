import React, { Component } from 'react'
import { appetizers, salads, entrees, sides  } from './menuDataBase';

export default class MenuInfo extends Component{
    render(){
       function list(data) {
           const items = data;
           const listitem = items.map((data) =>
           
           <li key={data}>{data}</li>);
           return(<ul>{listitem}</ul>)
       }
        return(<>
            <div>
                <h2>
                    Appetizers
                </h2>
                <p>Half pan serves8-12  $40 | Whole pan serves 20-25  $80</p>
                <p>*served with marinara</p>
                <br/>
                {list(appetizers)}
            </div>
            <div>
                <h2>
                Salads
                </h2>
                <p>Half pan serves8-12  $35 | Whole pan serves 20-25  $70</p>
                <p>*Choice of Dressing on the side</p>
                <br/>
                {list(salads)}
            </div>
            <div>
                <h2>
                    Entrees
                </h2>
                <p>Half pan serves8-12  $45 | Whole pan serves 20-25  $90</p>
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
            </>
    )
                }
            }