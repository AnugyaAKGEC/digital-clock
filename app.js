function currentTime() {
  let date = new Date(); 
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();

  const weekday = ["Sunday" , "Monday" , "Tuesday" , "Wednesday" , "Thursday" , "Friday" , "Saturday"]

  let session = "AM";
  let greeting="Good Morning!!";
  let day=weekday[date.getDay()];
  if(hh > 12 && hh<=16){
      session = "PM";
      greeting="Good Afternoon!!";
   }
   else if(hh>16 && hh<=24){
    session="PM";
    greeting="Good Evening!!"

   }

   hh = (hh < 10) ? "0" + hh : hh;
   mm = (mm < 10) ? "0" + mm : mm;
   ss = (ss < 10) ? "0" + ss : ss;
    
   let time = hh + ":" + mm + ":" + ss + " " + session;

  document.getElementById("clock").innerText = time; 
  document.getElementById("greet").innerText = greeting; 
  document.getElementById("day").innerText = day;
 
}

setInterval(currentTime,1000);