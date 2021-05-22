let setItems = (function () {
 return {
  setOrder: function (obj) {
   let newObj = {};
   Object.keys(obj).sort().forEach(function (key) {
    newObj[key] = obj[key];
   });
   for (let item in newObj) {
    newObj[item].sort(function (a, b) {
     var textA = a.name.toUpperCase();
     var textB = b.name.toUpperCase();
     return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    });
   };
   return newObj;
  },
  setInputNames: function (obj) {
   let contador = 0;
   for (let item in obj) {
    obj[item].forEach(el => {
     el.index = contador;
     el.index = el.index + "";
     contador++;
    });
   }
   return obj;
  },
  getItems: function (items) {
   this.items = items;
   return this.setInputNames(this.setOrder(this.items));
  }
 };
})();

export default setItems;