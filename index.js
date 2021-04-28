import setItems from "./setItems.js";
import items from "./items.js";
import setIndex from "./setIndex.js";
import setDom from "./setDom.js";



setDom.render(setItems.getItems(items))
setIndex.init(setItems.getItems(items));