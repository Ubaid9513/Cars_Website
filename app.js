var carList = {
  Toyota: {
    Corolla: {
      Name: "Toyota Corolla",
      Model: "2021",
      Seats: "5",
      Developed: "1966",
      Introduced: "America",
      colors: ["red", "green", "white"],
      image: "./images/Toyota Corolla.jpeg",
    },
    Fortuner: {
      Name: "Toyota Fortuner",
      Model: "2024",
      Seats: "7",
      Developed: "2004",
      Introduced: "Japanese",
      colors: ["black", "blue", "white"],
      image: "./images/Toyota Fortuner.jpeg",
    },
    Crysta: {
      Name: "Toyota Cryta",
      Model: "2024",
      Seats: "7",
      Developed: "2004",
      Introduced: "Japanese",
      colors: ["red", "black", "white"],
      image: "./images/Toyota Cryta.jpeg",
    },
  },
  Honda: {
    Civic: {
      Name: "Honda Civic",
      Model: "2023",
      Seats: "5",
      Developed: "1972",
      Introduced: "Japan",
      colors: ["red", "orange", "white"],
      image: "./images/Honda Civic.avif",
    },
    Accord: {
      Name: "Honda Accord",
      Model: "2021",
      Seats: "5",
      Developed: "1982",
      Introduced: "Japan/USA",
      colors: ["red", "green", "white"],
      image: "./images/Honda Accord.jpeg",
    },
    City: {
      Name: "Honda City",
      Model: "2024",
      Seats: "5",
      Developed: "1981",
      Introduced: "Japan",
      colors: ["red", "green", "white"],
      image: "./images/Honda City.jpeg",
    },
    // },
  },
  Ford: {
    Mustang: {
      Name: "Ford Mustang",
      Model: "2024",
      Seats: "4",
      Developed: "1964",
      Introduced: "America",
      colors: ["red", "white"],
      image: "./images/Ford Mustang.jpeg",
    },
    Fiesta: {
      Name: "Ford Fiesta",
      Model: "2021",
      Seats: "5",
      Developed: "1972",
      Introduced: "Valencia Spain",
      colors: ["black", "white"],
      image: "./images/Ford Fiesta.jpeg",
    },
    Aspire: {
      Name: "Ford Aspire",
      Model: "2019",
      Seats: "5",
      Developed: "1994",
      Introduced: "North America",
      colors: ["red", "green", "blue"],
      image: "./images/Ford Aspire.jpeg",
    },
    // },
  },
  Suzuki: {
    Cultus: {
      Name: "Suzuki Cultus VXL",
      Model: "2022",
      Seats: "5",
      Developed: "1983",
      Introduced: "Japanese",
      colors: ["blue", "green", "white"],
      image: "./images/Suzuki Cultus VXL.jpeg",
    },
    Swift: {
      Name: "Suzuki Swift DLX",
      Model: "2023",
      Seats: "5",
      Developed: "2016",
      Introduced: "India",
      colors: ["red", "green", "black"],
      image: "./images/Suzuki Swift DLX.jpeg",
    },
    Mehran: {
      Name: "Suzuki Mehran",
      Model: "2023",
      Seats: "5",
      Developed: "1988",
      Introduced: "Pakistan",
      colors: ["red", "green", "black"],
      image: "./images/Suzuki Mehran.jpeg",
    },
    // },
  },
  Kia: {
    EV6: {
      Name: "Kia EV6",
      Model: "2023",
      Seats: "5",
      Developed: "2021",
      Introduced: "South Korea",
      colors: ["red", "green", "white"],
      image: "./images/Kia EV6.jpeg",
    },
    Stonic: {
      Name: "Kia Stonic",
      Model: "2022",
      Seats: "5",
      Developed: "2017",
      Introduced: "South Korea",
      colors: ["red", "green", "blue"],
      image: "./images/Kia Stonic.jpeg",
    },
    Rio: {
      Name: "Kia Rio",
      Model: "2023",
      Seats: "5",
      Developed: "1999",
      Introduced: "South Korea",
      colors: ["red", "blue", "white"],
      image: "./images/Kia Rio.jpeg",
    },
    // },
  },
  Nissan: {
    Altima: {
      Name: "Nissan Altima",
      Model: "2022",
      Seats: "5",
      Developed: "1992",
      Introduced: "United States",
      colors: ["red", "green", "white"],
      image: "./images/Nissan Altima.jpeg",
    },
    Murano: {
      Name: "Nissan Murano",
      Model: "2020",
      Seats: "5",
      Developed: "2002",
      Introduced: "Japan",
      colors: ["blue", "white"],
      image: "./images/Nissan Murano.jpeg",
    },
    Sentra: {
      Name: "Nissan Sentra",
      Model: "2021",
      Seats: "5",
      Developed: "1982",
      Introduced: "Japan",
      colors: ["red", "green", "white", "blue"],
      image: "./images/Nissan Sentra.jpeg",
    },
    // },
  },
  Hyundai: {
    Santa_Fe: {
      Name: "Hyundai Santa_Fe",
      Model: "2024",
      Seats: "7",
      Developed: "2000",
      Introduced: "South Korean",
      colors: ["red", "green", "white", "blue"],
      image: "./images/Hyundai Santa_Fe.jpeg",
    },
    Tucson: {
      Name: "Hyundai Tuscon",
      Model: "2022",
      Seats: "5",
      Developed: "2004",
      Introduced: "Japan",
      colors: ["red", "white"],
      image: "./images/Hyundai Tuscon.jpeg",
    },
    i20: {
      Name: "Hyundai i20",
      Model: "2023",
      Seats: "5",
      Developed: "2008",
      Introduced: "India",
      colors: ["black", "white"],
      image: "./images/Hyundai i20.jpeg",
    },
    // },
  },
};

var main = document.getElementById("main");
var brand = document.getElementById("brand");
var model = document.getElementById("model");

brand.innerHTML += `<option>Select Brand Name</option>`;
model.innerHTML += `<option>Select Model Name</option>`;

function renderAllCars() {
  for (var key in carList) {
    // console.log(key);
    brand.innerHTML += `<option value = "${key}">${key}</option>`;
    for (var key1 in carList[key]) {
      // console.log(key1);
      var obj = carList[key][key1];
      // console.log(obj);
      var colorDiv = "";
      for (var i = 0; i < obj.colors.length; i++) {
        // console.log(obj.colors[i]);
        colorDiv += `<div class = "${obj.colors[i]}"></div>`;
      }

      main.innerHTML += `
    <div class="col-12 col-sm-12 col-md-6 col-lg-3 my-2">
          <div class="card p-2" style="width: 100%; height:20rem;">
                <img src="${
                  obj.image || "./Images/Ford Aspire.jpeg"
                }" class="card-img-top" alt="img">
                <div class="card-body">
                  <h5 class="card-title">
                  ${key1.toLocaleUpperCase()} (${obj.Model})
                  </h5>
                  <p class="card-text">${obj.Introduced}</p>
                  <p class="card-text">${obj.Developed}</p>
                  <p class="card-text">${obj.Seats}</p>
                  <div class = "d-flex gap-2">
                  ${colorDiv}</div>
                </div>
              </div>
    </div>
      `;
    }
  }
}

renderAllCars();

function setModel() {
  // console.log(carList[brand.value]);
  model.innerHTML = " ";
  model.innerHTML += `<option>Select Model Name</option>`;
  for (var key in carList[brand.value]) {
    model.innerHTML += `<option value = "${key}">${key}</option>`;
  }
}

var carDetail = document.getElementById("car-detail");
function searchCar() {
  main.innerHTML = "";
  main.style.display = "none";
  carDetail.style.display = "flex";
  var car = carList[brand.value][model.value];

  carDetail.innerHTML = `
  <div class="card mb-3" >
            <div class="row g-0">
              <div class="col-md-4">
                <img src="${
                  car.image || "./Images/Ford Aspire.jpeg"
                }" class="img-fluid rounded-start" alt="img">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">${model.value.toLocaleUpperCase()}</h5>
                  <p class="card-text">${car.Introduced}</p>
                  <p class="card-text">${car.Developed}</p>
                  <p class="card-text">${car.Seats}</p>
                </div>
              </div>
            </div>
          </div>
  `;
}

function clearSearch() {
  carDetail.innerHTML = "";
  carDetail.style.display = "none";
  main.style.display = "flex";
  renderAllCars();
}

// var companySelect = document.getElementById("car-company");
// var modelSelect = document.getElementById("car-model");
// var detailsDiv = document.getElementById("car-details");

// companySelect.addEventListener("change", function (e) {
//     var companyName = e.target.value;
//     var models = carCompanies[companyName].models;
//     var html = models.map((model) => {
//         return `<option value="${model}">${model}</option>`;
//     }).join("");
//     modelSelect.innerHTML = html;
// });

// modelSelect.addEventListener("change", function (e) {
//     var companyName = companySelect.value;
//     var modelName = e.target.value;
//     var details = carCompanies[companyName].details[modelName];
//     var html = `<div class="col">
// <h2 class="modelname">${modelName}</h2>
// <p class="det">Name: ${details.Name}</p>
// <p class="det">Model: ${details.Model}</p>
// <p class="det">Seat: ${details.Seats}</p>
// <p class="det">Developed: ${details.Developed}</p>
// <p class="det">Introduced: ${details.Introduced}</p>
// </div>
// `;
//     detailsDiv.innerHTML = html;
// });

// function scrollToBottom(){
//     window.scrollTo(0,document.body.scrollHeight);
// }

// document.addEventListener('contextmenu',
//     event => event.preventDefault()
// )
//     document.onkeydown = function(e) {
//         if ((e.keyCode === 67 || e.keyCode === 86 || e.keyCode === 85 || e.keyCode === 123)){
//             alert('Not Allowed Due to Privacy!');
//         }
//         return false;
// };
