import React,{useState} from 'react'
import ShippingForm from './ShippingForm';


function ShippingList() {
    const[items,setItems]=useState([]);
    const addToList=(item)=>{
      console.log((items));
      const itemsCopy=[...items];
    itemsCopy.push(item)
    setItems(itemsCopy);
    };
  return (
    //table layout//
    <div>
      <ShippingForm addToListCallback={(value)=>addToList(value)}/>
        <table>
            <thead>
                <th>Title</th>
                <th>Weight</th>
                <th>Color</th>
                <th>Place</th>
            </thead>
            <tbody>
              {
                items.map(item=>{
                  return(
                    <tr key={item.name}>
                      <td>{item.name}</td>
                      <td>{item.weight}</td>
                      <td>
                        <div 
                        style={{
                          backgroundColor:item.color,
                        width:"60px" ,
                        height:"30px",
                        }}

                        ></div>
                        </td>

                      <td>{item.place}</td>

                    </tr>
                  )
                })
              }
            </tbody>
        </table>
        
    </div>
  )
}

export default ShippingList