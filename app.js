function currentTime() {
  let date=new Date();
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();
  
  const weekday = ["Sunday" , "Monday" , "Tuesday" , "Wednesday" , "Thursday" , "Friday" , "Saturday"]
  const Monthoftheyear=["January","Febraury","March","April","May","June","July","August","September","October","November","December"]
  
  let session = "AM";
  let greeting="Good Morning!!";
  
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

   let pdate =  Monthoftheyear[date.getMonth()]  + " " + date.getDate() + " " + date.getFullYear() + " , " + weekday[date.getDate()] ; 

  document.getElementById("clock").innerText = time; 
  document.getElementById("greet").innerText = greeting; 
  document.getElementById("date").innerText = pdate;


}

setInterval(currentTime,1000);