
exports.getDate = function(){
    let date = new Date()
    todayDate = date.getDay();
    
   
    let options = {  weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
    return (new Date().toLocaleTimeString('en-us', options)).split(",").splice(0,2);
}; 
exports.getDay = function(){
    let date = new Date()
    todayDate = date.getDay();
    
   
    let options = {  weekday: 'long' };
    return new Date().toLocaleTimeString('en-us', options).split(" ").splice(0,1);
}; 
