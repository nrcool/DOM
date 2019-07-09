function random (items){
    let item = items[Math.floor(Math.random()*items.length)];
     //console.log(item);
     return item;
  }
  
  export {random};