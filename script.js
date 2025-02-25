console.clear()
var tot_amt = 0, slct_amt = 0;
let ar = JSON.parse(localStorage.getItem('objs')) || [];
ar.forEach((obj) => {
  tot_amt += Number(obj.amt);
  if (obj.checked === 'checked') slct_amt += Number(obj.amt)
})
display()

function addData() {
  let evt = document.querySelector('#event');
  let amt = document.querySelector('#amount');

  if (evt.value.trim() !== null && amt.value > 0) {
    ar.push({
      name: evt.value,
      amt: amt.value,
      checked: 'nochecked'
    });

    // Calculate Total amount
    tot_amt += Number(amt.value)
  }
  else {
    alert("Enter valid Data")
  }

  localStorage.setItem('objs', JSON.stringify(ar));
  evt.value = ''
  amt.value = ''
  display()
}


function display() {

  var disp_tbl = document.querySelector('.disp-tbl')
  let disp_amt_ctr = document.querySelector('.disp-amt-ctr')
  var html = ''

  ar.forEach((evt, index) => {
    html += `
    <tr>
        <td><input type="checkbox" name="" class="checks-box" onchange='calc_selected_amt(${index},this)'   ${evt.checked}></td>
        <td class="inp" id="disp-event">${evt.name}</td>
        <td id="disp-amt">₹${evt.amt}</td>
        <td>
          <button class="edit-btn" onclick='edits(${index})'>
              <i class="fa-solid fa-edit"></i>
          </button>
        </td>
        <td>
          <button class="del-btn" onclick='deletes(${index})'>
              <i class="fa-solid fa-trash"></i>
          </button>
        </td>
    </tr>
    `
  })

  disp_tbl.innerHTML = html;
  disp_amt_ctr.innerHTML = `
  <span class="slct-amt">Selected Amount:<br> <h4>₹${slct_amt}</h4></span>  
  <span class="tot-amt">Total Amount: <br> <h4>₹${tot_amt}</h4></span>
  `;
}

function calc_selected_amt(index, element) {
  if (element.checked == true) {
    slct_amt += Number(ar[index].amt)
    ar[index].checked = 'checked';
  }
  else {
    slct_amt -= Number(ar[index].amt)
    ar[index].checked = 'notchecked';
  }
  localStorage.setItem('objs', JSON.stringify(ar));
  display()
}

function deletes(index) {
  if(confirm('Are you sure want to delete this Data ?')) {
    tot_amt -= Number(ar[index].amt);
    if (ar[index].checked === 'checked') {
      slct_amt -= Number(ar[index].amt)
    }
    ar.splice(index, 1)
  }
  localStorage.setItem('objs', JSON.stringify(ar));
  display()
}

function edits(index) {
  document.querySelector('#event').value = ar[index].name;
  document.querySelector('#amount').value = ar[index].amt;
  tot_amt -= Number(ar[index].amt);
  if (ar[index].checked === 'checked') {
    slct_amt -= Number(ar[index].amt)
  }
  ar.splice(index, 1)
  localStorage.setItem('objs', JSON.stringify(ar));
  display()
}

function clearAll() {
  if(confirm('Are you sure want to delete all Data ?')) {
    ar.splice(0)
    tot_amt = 0
    slct_amt = 0
  }
  localStorage.setItem('objs', JSON.stringify(ar));
  display()
}