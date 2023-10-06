const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "19f48ce8f4msh1de44ecd6097b51p17ceaejsn80fbc05de926",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const getWeat = (city) => {
  namecity.innerHTML = city;
  // next_date = current_date + 1 ;
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      humidity.innerHTML = response.humidity;
      max_temp.innerHTML = response.max_temp+2;
      min_temp.innerHTML = response.min_temp-6;
      temp.innerHTML = response.temp+273;
      wind_degrees.innerHTML = response.wind_degrees;
      wind_speed.innerHTML = response.wind_speed;
      const te = response.temp;

      // if (te <= 0) {
      //   (document.body.style.backgroundImage =
      //     "linear - gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5))"),
      //     "url(images/wimg1.jpg)";
      // } else if (te > 27) {
      //   (document.body.style.backgroundImage =
      //     "linear - gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5))"),
      //     "url(images/simg1.jpg)";
      // } else {
      //   (document.body.style.backgroundImage =
      //     "linear - gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5))"),
      //     "url(images/rimg1.jpg)";
      // }
    })
    .catch((err) => console.error(err));
  setInterval(function Displaytime(){  var date = new Date();
    var AA=date.getHours() >= 12 ? " PM" : " AM";
    var h=date.getHours()%12;
    var current_date =
      date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
    var current_time =
      h+ ":" + date.getMinutes() + ":" + date.getSeconds()+AA;
    const weekday = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
  
    let day = weekday[date.getDay()];
    var date_time = current_date + " " + current_time;
    document.getElementById("time").innerHTML = current_time;
    document.getElementById("date").innerHTML = current_date;
    document.getElementById("day").innerHTML = day;},1000)

  
}


butn.addEventListener("click", (e) => {
  e.preventDefault();
  getWeat(inp.value);
});
getWeat("Delhi");

function display_ct7() {
  var x = new Date();
  var ampm = x.getHours() >= 12 ? " PM" : " AM";
  hours = x.getHours() % 12;
  hours = hours ? hours : 12;
  hours = hours.toString().length == 1 ? 0 + hours.toString() : hours;
  
  var minutes = x.getMinutes().toString();
  minutes = minutes.length == 1 ? 0 + minutes : minutes;

  var seconds = x.getSeconds().toString();
  seconds = seconds.length == 1 ? 0 + seconds : seconds;

  var x1 = hours + ":" + minutes + ":" + seconds + " " + ampm;
  document.getElementById("ti").innerHTML = x1;
  display_c7();
}
function display_c7() {
  var refresh = 1000; // Refresh rate in milli seconds
  mytime = setTimeout("display_ct7()", refresh);
}
display_c7();

const GetInfo = (city) => {
  // var city = inp.value;
  namecity.innerHTML = city;
  // console.log(city);
  fetch(
    "http://api.openweathermap.org/data/2.5/forecast?q=" +
    city +
    "&appid=015d9f5aeedd0a85fd90f46565d78788"
  )
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      cloud_pct.innerHTML = data.list[7 * i].weather[0].main;
      for (i = 0; i < 5; i++) {
       let y = document.getElementById("day" + (i + 1) + "Min").innerHTML =
          Number(data.list[7 * i].main.temp - 273.15);
          //console.log(typeof y)
          if(y>=40){
            document.getElementById("day" + (i + 1) + "Min").style.color="red"
          }
          else {
            document.getElementById("day" + (i + 1) + "Min").style.color="lightblue"

          }

      }

      for (i = 0; i < 5; i++) {
        
      let x=  document.getElementById("day" + (i + 1) + "Max").innerHTML =
          data.list[7 * i].weather[0].main;
          
          if(x==="Clear"){
            document.getElementById("day" + (i + 1) + "Max").style.color="white"
          }
          else if(x==="Clouds"){
            document.getElementById("day" + (i + 1) + "Max").style.color="darkblue"
          }
      }
 
    })

    .catch((err) => alert("Something went to wrong . Please check cityname"));
};




const dd = new Date();
const weekda = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function CheckDay(day) {
  if (day + dd.getDay() > 6) {
    return day + dd.getDay() - 7;
  } else {
    return day + dd.getDay();
  }
}

for (i = 0; i < 5; i++) {
  document.getElementById("day" + (i + 1)).innerHTML = weekda[CheckDay(i)];
}
butn.addEventListener("click", (e) => {
  e.preventDefault();
  GetInfo(inp.value);
});
GetInfo("Delhi");
