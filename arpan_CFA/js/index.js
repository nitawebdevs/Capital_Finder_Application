let state = document.querySelector('#state');
let capital = document.querySelector('#capital');

const watchState = () => {
  let stateName = state.value.toLowerCase();
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

  "andhra pradesh": "Hyderabad",

  "arunachal pradesh": "Itanagar",

  "assam": "Dispur",

  "bihar": "Patna",

  "chhattisgarh": "Raipur",

  "goa": "Panaji",

  "gujarat": "Gandhinagar",

  "haryana": "Chandigarh",

  "himachal pradesh": "Shimla",

  "jammu & kashmir": "Srinagar(Summer)/jammu(Winter)",

  "jharkhand": "Ranchi",

  "karnataka": "Bengaluru",

  "kerala": "Thiruvananthapuram",

  "madhya pradesh": "Bhopal",

  "maharashtra": "Mumbai",

  "manipur": "Imphal",

  "meghalaya": "Shillong",

  "mizoram": "Aizawl",

  "nagaland": "Kohima",

  "odisha": "Bhubaneswar",

  "punjab": "Chandigarh",

  "rajasthan": "Jaipur",

  "sikkim": "Gangtok",

  "tamil nadu": "Chennai",

  "telangana": "Hyderabad",

  "tripura": "Agartala",

  "uttar pradesh": "Lucknow",

  "uttarakhand": "Dehradun",

  "west bengal": "Kolkata"

}
