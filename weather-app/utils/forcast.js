const request=require('request');

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
  // forcast(51.5073219,-0.1276474,(err,data)=>{
  //   console.log(data);
  // })
  module.exports=forcast;


