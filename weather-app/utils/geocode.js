const request=require('request');
const geocode=(address,callback)=>{
    const url='http://api.openweathermap.org/geo/1.0/direct?q= '+ encodeURIComponent(address) +'&appid=9c5617551f378541064af32ed6665bfe';
    request({url:url,json:true},(error,responsne)=>{

      //  const val= JSON.parse(data);
       if(error){
        console.log("unable to connect internet");
        callback(error,undefined);
       }
       else if(responsne.body.error){
        console.log("please enter correct locations");
        callback(error,undefined);
       }
       else{
      //   const data=responsne.body;
      //   const lat=data[0].lat;
      //  const lon=data[0].lon;
      // //   console.log(lat,lon);
      callback(undefined,{
        lat:responsne.body[0].lat,
        lon:responsne.body[0].lon
      });
       }
      });
  }
  module.exports=geocode;