	function getQueryString(name,search) { 
var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
var r = search.match(reg); 
if (r != null) return unescape(r[2]); return null; 
} 

Array.prototype.unique1 = function(){
 var res = [this[0]];
 for(var i = 1; i < this.length; i++){
  var repeat = false;
  for(var j = 0; j < res.length; j++){
   if(this[i] == res[j]){
    repeat = true;
    break;
   }
  }
  if(!repeat){
   res.push(this[i]);
  }
 }
 return res;
}