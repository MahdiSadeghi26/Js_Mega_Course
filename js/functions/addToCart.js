// course info funciton
export default function addToCart(cInfo) {
  const shoppingCartContent = document.querySelector("#shoppingCart tbody");
  // create tr tag
  const row = document.createElement("tr");
  // bulid html template
  row.innerHTML = `
  <tr>
    <td>
      <img src='${cInfo.image} 'width="85px">  
    </td>
    <td width="inherit">
        ${cInfo.title}
    </td>
    <td>  
        ${cInfo.price}
    </td>
    <td>
        <a class='remove' href='#'>X</a>
    </td>
  </tr>
  `;
  shoppingCartContent.appendChild(row);
}
