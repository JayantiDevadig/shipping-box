import React,{useState}from "react";

function ShippingForm(props) {
  const[name,setName]=useState("");
  const[weight,setWeight]=useState("");
  const[color,setColor]=useState("");
  const[place,setPlace]=useState("");

  const handleSubmit=(e)=>{
    e.preventDefault();


    const data= {
      name:name,
      weight:weight,
      color:color,
      place:place
    };
    //console.log(data);
    props.addToListCallback(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>ShippingForm</h1>
        
          name:
          <input type="text" value={name} placeholder="enter Name" onChange={(e)=>setName(e.target.value)} />
        
        <br></br>
        item weight:
        <input type="number"value={weight} placeholder="enter Weight"  onChange={(e)=>setWeight(e.target.value)} />
        <br></br>
        item color:
        <input type="color" value={color} placeholder="enter Color" onChange={(e)=>setColor(e.target.value)} />
        <br></br>
        item place:
        <input type="text" value={place}placeholder="enter Place" onChange={(e)=>setPlace(e.target.value)} />
        <br></br>
        <button>Submit</button>
        <br></br>
      </form>
    </div>
  );
}

export default ShippingForm;
