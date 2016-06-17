(function(){
 SNIP = {};

  //console the methods & prop along with data types
  SNIP.getKeysObj = function(obj){
    var _keys = Object.keys(obj)
    for(var i =0;i<_keys.length;i++){
      console.log(b[i]+' '+typeof(obj[b[i]]));
    }
  }
  
}());
