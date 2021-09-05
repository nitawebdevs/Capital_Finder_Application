let state = document.querySelector('#state');
let capital = document.querySelector('#capital');

const watchState = () => {
  let stateName = String(state.value);
  if (data[ stateName ]) {
    capital.innerText = data[ stateName ];
  } else {
    capital.innerText = "--"
  }
}

state.addEventListener("focus", function () {
  state.addEventListener("keyup", watchState);
});

state.addEventListener("blur", function () {
  state.removeEventListener("keydown", watchState);
});

















const data = {

  "Andhra Pradesh": "Hyderabad",

  "Arunachal Pradesh": "Itanagar",

  "Assam": "Dispur",

  "Bihar": "Patna",

  "Chhattisgarh": "Raipur",

  "Goa": "Panaji",

  "Gujarat": "Gandhinagar",

  "Haryana": "Chandigarh",

  "Himachal Pradesh": "Shimla",

  "Jammu & Kashmir": "Srinagar(Summer)/Jammu(Winter)",

  "Jharkhand": "Ranchi",

  "Karnataka": "Bengaluru",

  "Kerala": "Thiruvananthapuram",

  "Madhya Pradesh": "Bhopal",

  "Maharashtra": "Mumbai",

  "Manipur": "Imphal",

  "Meghalaya": "Shillong",

  "Mizoram": "Aizawl",

  "Nagaland": "Kohima",

  "Odisha": "Bhubaneswar",

  "Punjab": "Chandigarh",

  "Rajasthan": "Jaipur",

  "Sikkim": "Gangtok",

  "Tamil Nadu": "Chennai",

  "Telangana": "Hyderabad",

  "Tripura": "Agartala",

  "Uttar Pradesh": "Lucknow",

  "Uttarakhand": "Dehradun",

  "West Bengal": "Kolkata"

}
