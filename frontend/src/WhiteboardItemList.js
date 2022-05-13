import React, { useEffect, useState } from "react";


function LoggedIn(props){
  const WhiteboardItems = props.WhiteboardItems;
  
  return (
    <div className="container">
      <h1>WhiteboardItemList</h1>
      {/* map the WhiteboardItem list to show WhiteboardItem name and image */}
      {WhiteboardItems.map((WhiteboardItem) => (
        <div key={WhiteboardItem.id} className="WhiteboardItemlist">
          <img className="image" alt={WhiteboardItem} src={WhiteboardItem.image} />
          <h3>{WhiteboardItem.name}</h3>
        </div>
      ))}
    </div>
  );
}

function NotLoggedIn(props){
  const errorMessage = props.message
  return (
    <div>
      <label>You cannot access this page: {errorMessage}</label>
    </div>
  );
}

export default function WhiteboardItemList() {
  //create state to store our WhiteboardItem list
  const [WhiteboardItems, setWhiteboardItems] = useState([]);
  const [status, setStatus] = useState([]);
  const [message, setMessage] = useState([]);

  useEffect(() => {
    async function loadWhiteboardItems() {
      //fetch the WhiteboardItem list
      
      const request = await fetch("http://localhost:4000/WhiteboardItems", {
        //use the authorization
        headers: {
          Authorization: "Bearer " + localStorage.getItem("@token"),
        },
      });

      setStatus(request.status)
      const json = await request.json()
      if (request.status !== 200) {
        setMessage(json.message)
      } else {
        //set the WhiteboardItem list on state
        setWhiteboardItems(json.WhiteboardItems);
      }
    }
    //invoke the function
    loadWhiteboardItems();
  }, []);


  
  if (status === 200){
    return <LoggedIn WhiteboardItems={WhiteboardItems} />
  } else {
    return <NotLoggedIn message={message}/>
  }
}
