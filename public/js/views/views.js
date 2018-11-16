import { deleteCartItems, editCartItems } from '../service/service'
export function createHTMLElement(html) {
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content.firstElementChild;
}

export function createLayout(collection) {
    let createdLayout = `<tr>
            <td><img class="prod_img" src=${collection.Imgurl}>
      
            </td>
            <td>${collection.id} <br>
                <ul>
                    <li data-toggle="modal" data-target="#modalQuickView"><a href="#">Edit</a></li>
                    <li><a href="#">Save for later</a></li>
                    <li ><a href="#" class="remove" id="remove">Remove</a></li>
                </ul>
            </td>
            <td>
                ${collection.Qty}
            </td>
            <td>${collection.Size}</td>
            <td>${collection.Price}</td>
        </tr>
            `;
    createdLayout = createHTMLElement(createdLayout);
    console.log(createdLayout);
    let edit = createdLayout.firstElementChild.nextElementSibling.lastElementChild.firstElementChild;
    let editButton = edit.firstElementChild;
    let removeButton = edit.nextElementSibling.nextElementSibling.firstElementChild;

    editButton.onclick = () => {
        let modalBody = document.getElementById(`modalBody`);
        modalBody.innerHTML = ``;
        let body = createHTMLElement(`<div class="row">
              <div class="col-lg-5">
                  <div class="prod_img_modal">
                      <img class="d-block w-100" src="${collection.Imgurl}"
                          alt="First slide">
                  </div>
              </div>
              <div class="col-lg-7">
                  <h2 class="h2-responsive product-name">
                      <strong>${collection.id}</strong>
                  </h2>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                  </button>
                  <h4 class="h4-responsive">
                      <span class="green-text">
                          <strong>${collection.Price}</strong>
                      </span>
                      <span class="grey-text">
                          <small>
                              <s>$89</s>
                          </small>
                      </span>
                  </h4>

                  <!-- Add to Cart -->
                  <div class="card-body">
                      <div class="row">
                          <div class="col-md-6">
                              
                                  <select name="size">
<option value="S" selected disabled hidden>Size(S)</option>
<option value="XS">XS</option>
<option value="S">S</option>
<option value="L">L</option>
<option value="XL">XL</option>
</select>
                              </div>
                          <div class="col-md-6">
                              
                                  <!--Trigger-->
                            
                                  <!--Menu-->
                                  <select name="qty">
                                    <option value="0" selected disabled hidden>Qty</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                  </select>
                              
                          </div>
                      </div>
                  </div>
                  <div class="text-center">
                      <button class="btn btn-primary" data-dismiss="modal">Edit
                          <i class="fa fa-cart-plus" aria-hidden="true"></i>
                      </button>
                  </div>
              </div>
              <!-- /.Add to Cart -->
          </div>`);

        let modalEdit = body.lastElementChild.lastElementChild.lastElementChild;
        console.log(modalEdit);
        modalEdit.onclick = () => {
            let s = document.getElementsByName('size')[0];
            let size = s.options[s.selectedIndex].value;
            console.log(`size = ${size}`);

            let q = document.getElementsByName('qty')[0];
            let qty = q.options[q.selectedIndex].value;
            console.log(`qty = ${qty}`)
            editCartItems(collection.id, qty, size);
        }
        modalBody.appendChild(body);
    }

    removeButton.onclick = () => {
        deleteCartItems(collection.id);
    }
    document.getElementById('tab_body').appendChild(createdLayout);
}
