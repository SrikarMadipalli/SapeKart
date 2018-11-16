import { createHTMLElement, createLayout } from "../views/views";

export function layoutCreationService() {
    document.getElementById('tab_body').innerHTML = "";
    const url = 'http://localhost:3000/cart?added=yes';

    fetch(url, {
      method: 'GET'
    })
      .then(resp => resp.json())
      .then((data) => { // Get the results
        console.log("Hello Pinku");
        return data.map((collection) => { // Map through the results and for each run the code below
            createLayout(collection);
        }
      )
  });
}
export function editCartItems(id,qty,size) {
    let url = `http://localhost:3000/cart/${id}`;
    fetch(url)
    .then(resp => resp.json())
    .then(data => {
        let newObj = Object.assign({},data,{"Qty" : qty, "Size" : size});
        let putData = {
              method: "PUT",
              mode: "cors",
              cache: "no-cache",
              credentials: "same-origin",
              redirect: "follow",
              referrer: "no-referrer",
              headers: {
                  'Content-Type' : 'application/json; charset=utf-8'
              },
              body: JSON.stringify(newObj)
            }
        fetch(url,putData)
        .then(() => {
            layoutCreationService();
        })
        // For Reloading Purpose
    });
    }

export function deleteCartItems(id) {
    let url = `http://localhost:3000/cart/${id}`;
    fetch(url)
    .then(resp => resp.json())
    .then(data => {
        let newObj = Object.assign({},data,{"added" : "no"});
        let putData = {
              method: "PUT",
              mode: "cors",
              cache: "no-cache",
              credentials: "same-origin",
              redirect: "follow",
              referrer: "no-referrer",
              headers: {
                  'Content-Type' : 'application/json; charset=utf-8'
              },
              body: JSON.stringify(newObj)
            }
        fetch(url,putData)
        .then(() => {
            layoutCreationService();
        })
        // For Reloading Purpose
    });
    }

    export function putsizeqty(id,qty,size){
        const getUrl = 'http://localhost:3000/Items/'+id;
        fetch(getUrl)
        .then(resp => resp.json())
        .then((data) => {
        let editedObject = Object.assign({},data,{
        "quantity" : qty,
        "size" : size
        });
        const putData = {
        method: 'PUT', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, cors, *same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, same-origin, *omit
        headers: {
        'Content-Type': 'application/json; charset=utf-8',
        // "Content-Type": "application/x-www-form-urlencoded",
        },
        redirect: 'follow', // manual, *follow, error
        referrer: 'no-referrer', // no-referrer, *client
        body: JSON.stringify(editedObject), // body data type must match "Content-Type" header
        };
        fetch(getUrl,putData)
        .then(() => {
        jsonfetch();
        })
        })
        }
