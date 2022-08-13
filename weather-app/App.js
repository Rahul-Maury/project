const request=require('request');
const geocode=require('./utils/geocode');
// const forcast=request('./utils/forcast');
// const url='http://api.openweathermap.org/geo/1.0/direct?q=london&appid=9c5617551f378541064af32ed6665bfe';
const forcast=(lat,lon,callback)=>{
  const url='https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&appid=7d968b82b460e7af3ce3154ef888194a';
request({url:url,json:true},(error,responsne)=>{
if(error){
  console.log("some error");
  // callback(error);
}
else{
  // console.log(responsne.body.main.temp);
    callback(undefined,responsne.body.main.temp);
   
} 
});
}
     const address=process.argv[2] ;
     if(!address){
      console.log("please enter address");
     }
    geocode(address,(error,data)=>{
      if(error){
        console.log(error);
      }
      console.log(data);
       forcast(data.lat,data.lon,(err,dat)=>{
        if(err){
          console.log("some error occurs");
        }
        console.log(dat);
       })
   });
   
     