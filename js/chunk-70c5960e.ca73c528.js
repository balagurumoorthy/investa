(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-70c5960e"],{"507f":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"p-grid"},[e("div",{staticClass:"p-col-12"},[e("div",{staticClass:"card"},[e("h5",[t._v("DataView")]),e("DataView",{attrs:{value:t.dataviewValue,layout:t.layout,paginator:!0,rows:9,sortOrder:t.sortOrder,sortField:t.sortField},scopedSlots:t._u([{key:"header",fn:function(){return[e("div",{staticClass:"p-grid p-nogutter"},[e("div",{staticClass:"p-col-6",staticStyle:{"text-align":"left"}},[e("Dropdown",{attrs:{options:t.sortOptions,optionLabel:"label",placeholder:"Sort By Price"},on:{change:function(a){return t.onSortChange(a)}},model:{value:t.sortKey,callback:function(a){t.sortKey=a},expression:"sortKey"}})],1),e("div",{staticClass:"p-col-6",staticStyle:{"text-align":"right"}},[e("DataViewLayoutOptions",{model:{value:t.layout,callback:function(a){t.layout=a},expression:"layout"}})],1)])]},proxy:!0},{key:"list",fn:function(a){return[e("div",{staticClass:"p-col-12"},[e("div",{staticClass:"product-list-item"},[e("img",{attrs:{src:"assets/layout/images/product/"+a.data.image,alt:a.data.name}}),e("div",{staticClass:"product-list-detail"},[e("div",{staticClass:"product-name"},[t._v(t._s(a.data.name))]),e("div",{staticClass:"product-description"},[t._v(t._s(a.data.description))]),e("Rating",{attrs:{value:a.data.rating,readonly:!0,cancel:!1}}),e("i",{staticClass:"pi pi-tag product-category-icon"}),e("span",{staticClass:"product-category"},[t._v(t._s(a.data.category))])],1),e("div",{staticClass:"product-list-action"},[e("span",{staticClass:"product-price"},[t._v("$"+t._s(a.data.price))]),e("Button",{attrs:{icon:"pi pi-shopping-cart",label:"Add to Cart",disabled:"OUTOFSTOCK"===a.data.inventoryStatus}}),e("span",{class:"product-badge status-"+a.data.inventoryStatus.toLowerCase()},[t._v(t._s(a.data.inventoryStatus))])],1)])])]}},{key:"grid",fn:function(a){return[e("div",{staticClass:"p-col-12 p-md-4"},[e("div",{staticClass:"product-grid-item card"},[e("div",{staticClass:"product-grid-item-top"},[e("div",[e("i",{staticClass:"pi pi-tag product-category-icon"}),e("span",{staticClass:"product-category"},[t._v(t._s(a.data.category))])]),e("span",{class:"product-badge status-"+a.data.inventoryStatus.toLowerCase()},[t._v(t._s(a.data.inventoryStatus))])]),e("div",{staticClass:"product-grid-item-content"},[e("img",{attrs:{src:"assets/layout/images/product/"+a.data.image,alt:a.data.name}}),e("div",{staticClass:"product-name"},[t._v(t._s(a.data.name))]),e("div",{staticClass:"product-description"},[t._v(t._s(a.data.description))]),e("Rating",{attrs:{value:a.data.rating,readonly:!0,cancel:!1}})],1),e("div",{staticClass:"product-grid-item-bottom"},[e("span",{staticClass:"product-price"},[t._v("$"+t._s(a.data.price))]),e("Button",{attrs:{icon:"pi pi-shopping-cart",disabled:"OUTOFSTOCK"===a.data.inventoryStatus}})],1)])])]}}])})],1)]),e("div",{staticClass:"p-col-12 p-lg-8"},[e("div",{staticClass:"card"},[e("h5",[t._v("PickList")]),e("PickList",{attrs:{dataKey:"code"},scopedSlots:t._u([{key:"sourceHeader",fn:function(){return[t._v("\n\t\t\t\t\tFrom\n\t\t\t\t")]},proxy:!0},{key:"targetHeader",fn:function(){return[t._v("\n\t\t\t\t\tTo\n\t\t\t\t")]},proxy:!0},{key:"item",fn:function(a){return[e("div",[t._v(t._s(a.item.name))])]}}]),model:{value:t.picklistValue,callback:function(a){t.picklistValue=a},expression:"picklistValue"}})],1)]),e("div",{staticClass:"p-col-12 p-lg-4"},[e("div",{staticClass:"card"},[e("h5",[t._v("OrderList")]),e("OrderList",{staticClass:"p-orderlist-responsive",attrs:{listStyle:"height:250px",dataKey:"code",rows:10},scopedSlots:t._u([{key:"header",fn:function(){return[t._v("\n\t\t\t\t\tCities\n\t\t\t\t")]},proxy:!0},{key:"item",fn:function(a){return[e("div",[t._v(t._s(a.item.name))])]}}]),model:{value:t.orderlistValue,callback:function(a){t.orderlistValue=a},expression:"orderlistValue"}})],1)])])},i=[],n=e("e9c0"),r={data:function(){return{picklistValue:[[{name:"San Francisco",code:"SF"},{name:"London",code:"LDN"},{name:"Paris",code:"PRS"},{name:"Istanbul",code:"IST"},{name:"Berlin",code:"BRL"},{name:"Barcelona",code:"BRC"},{name:"Rome",code:"RM"}],[]],orderlistValue:[{name:"San Francisco",code:"SF"},{name:"London",code:"LDN"},{name:"Paris",code:"PRS"},{name:"Istanbul",code:"IST"},{name:"Berlin",code:"BRL"},{name:"Barcelona",code:"BRC"},{name:"Rome",code:"RM"}],dataviewValue:null,layout:"grid",sortKey:null,sortOrder:null,sortField:null,sortOptions:[{label:"Price High to Low",value:"!price"},{label:"Price Low to High",value:"price"}]}},productService:null,created:function(){this.productService=new n["a"]},mounted:function(){var t=this;this.productService.getProducts().then((function(a){return t.dataviewValue=a}))},methods:{onSortChange:function(t){var a=t.value.value,e=t.value;0===a.indexOf("!")?(this.sortOrder=-1,this.sortField=a.substring(1,a.length),this.sortKey=e):(this.sortOrder=1,this.sortField=a,this.sortKey=e)}}},o=r,c=(e("5218"),e("2877")),d=Object(c["a"])(o,s,i,!1,null,"a7bfb672",null);a["default"]=d.exports},5218:function(t,a,e){"use strict";var s=e("5546"),i=e.n(s);i.a},5546:function(t,a,e){},b0b4:function(t,a,e){"use strict";e.d(a,"a",(function(){return r}));var s=e("85f2"),i=e.n(s);function n(t,a){for(var e=0;e<a.length;e++){var s=a[e];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),i()(t,s.key,s)}}function r(t,a,e){return a&&n(t.prototype,a),e&&n(t,e),t}},d225:function(t,a,e){"use strict";function s(t,a){if(!(t instanceof a))throw new TypeError("Cannot call a class as a function")}e.d(a,"a",(function(){return s}))},e9c0:function(t,a,e){"use strict";e.d(a,"a",(function(){return o}));var s=e("d225"),i=e("b0b4"),n=e("bc3a"),r=e.n(n),o=function(){function t(){Object(s["a"])(this,t)}return Object(i["a"])(t,[{key:"getProductsSmall",value:function(){return r.a.get("assets/layout/data/products-small.json").then((function(t){return t.data.data}))}},{key:"getProducts",value:function(){return r.a.get("assets/layout/data/products.json").then((function(t){return t.data.data}))}},{key:"getProductsWithOrdersSmall",value:function(){return r.a.get("assets/layout/data/products-orders-small.json").then((function(t){return t.data.data}))}}]),t}()}}]);
//# sourceMappingURL=chunk-70c5960e.ca73c528.js.map