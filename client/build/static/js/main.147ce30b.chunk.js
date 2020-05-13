(this["webpackJsonpexpense-tracker-react"]=this["webpackJsonpexpense-tracker-react"]||[]).push([[0],{20:function(e,t,a){e.exports=a(44)},43:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(19),i=a.n(c),l=function(){return r.a.createElement("h2",null,"Cooking With Code")},s=a(3),o=a(4),u=a.n(o),p=a(7),d=a(9),m=a(2),E=function(e,t){switch(t.type){case"GET_RECIPES":return Object(m.a)(Object(m.a)({},e),{},{loading:!1,recipes:t.payload});case"DELETE_RECIPE":return Object(m.a)(Object(m.a)({},e),{},{recipes:e.recipes.filter((function(e){return e._id!==t.payload}))});case"ADD_RECIPE":return Object(m.a)(Object(m.a)({},e),{},{recipes:[].concat(Object(d.a)(e.recipes),[t.payload])});case"DELETE_RECIPE_INGREDIENT":return e.recipes.forEach((function(e){e.id===t.payload[0]&&(e.ingredients=e.ingredients.filter((function(e){return e!==t.payload[1]})))})),Object(m.a)(Object(m.a)({},e),{},{recipes:e.recipes});case"ADD_RECIPE_INGREDIENT":return e.recipes.forEach((function(e){e.id===t.payload[0]&&(e.ingredients=[].concat(Object(d.a)(e.ingredients),[t.payload[1]]))})),Object(m.a)(Object(m.a)({},e),{},{recipes:e.recipes});case"RECIPE_ERROR":return Object(m.a)(Object(m.a)({},e),{},{error:t.payload});default:return e}},f=a(8),b=a.n(f),g={recipes:[],error:null,loading:!0},v=Object(n.createContext)(g),h=function(e){var t=e.children,a=Object(n.useReducer)(E,g),c=Object(s.a)(a,2),i=c[0],l=c[1];function o(){return(o=Object(p.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("/api/v1/recipes");case 3:t=e.sent,l({type:"GET_RECIPES",payload:t.data.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),l({type:"RECIPE_ERROR",payload:e.t0.response.data.error});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function d(){return(d=Object(p.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.delete("/api/v1/recipes/".concat(t));case 3:l({type:"DELETE_RECIPE",payload:t}),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),l({type:"RECIPE_ERROR",payload:e.t0.response.data.error});case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}function m(){return(m=Object(p.a)(u.a.mark((function e(t){var a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{"Content-Type":"application/json"}},e.prev=1,e.next=4,b.a.post("/api/v1/recipes",t,a);case 4:n=e.sent,l({type:"ADD_RECIPE",payload:n.data.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),l({type:"RECIPE_ERROR",payload:e.t0.response.data.error});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}return r.a.createElement(v.Provider,{value:{recipes:i.recipes,error:i.error,loading:i.loading,getRecipes:function(){return o.apply(this,arguments)},deleteRecipe:function(e){return d.apply(this,arguments)},addRecipe:function(e){return m.apply(this,arguments)},deleteRecipeIngredient:function(e,t){l({type:"DELETE_RECIPE_INGREDIENT",payload:[e,t]})},addRecipeIngredient:function(e,t){l({type:"ADD_RECIPE_INGREDIENT",payload:[e,t]})}}},t)};var R=function(e){return r.a.createElement("svg",{className:e.className,height:e.height,width:e.width,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512"},r.a.createElement("path",{fill:e.fill,d:"M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"}))},O=function(e){var t=e.recipe;t.ingredients=["Salt","Pepper"];var a=Object(n.useContext)(v).deleteRecipeIngredient,c=Object(n.useContext)(v).deleteRecipe,i=Object(n.useContext)(v).addRecipeIngredient,l=Object(n.useState)(""),o=Object(s.a)(l,2),u=o[0],p=o[1],d=Object(n.useState)("0px"),m=Object(s.a)(d,2),E=m[0],f=m[1],b=Object(n.useState)("accordion-icon"),g=Object(s.a)(b,2),h=g[0],O=g[1],j=Object(n.useState)(""),y=Object(s.a)(j,2),N=y[0],C=y[1],x=Object(n.useRef)(null),I=t.name.length>20?"".concat(t.name.substring(0,20),"..."):t.name;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("button",{className:"accordion-btn ".concat(u),onClick:function(e){p(""===u?"active":""),f("active"===u?"0px":"".concat(x.current.scrollHeight,"px")),O("active"===u?"accordion-icon":"accordion-icon rotate")}},r.a.createElement("li",{className:t.ingredients.length>0?"positive":"zero"},r.a.createElement("ul",{className:"recipeAttributes"},r.a.createElement("li",{key:"name",className:"attribute"},I),r.a.createElement("li",{key:"servings",className:"attribute"},"Servings: ",t.servings),r.a.createElement("li",{key:"ingredientCount",className:"attribute"},"Ingredients: ",t.ingredients.length," \xa0\xa0",r.a.createElement(R,{className:"".concat(h),width:10,fill:"#777"}))))),r.a.createElement("button",{onClick:function(){return c(t._id)},className:"delete-btn"},"x")),r.a.createElement("div",{ref:x,style:{maxHeight:"".concat(E)},className:"accordion-content"},r.a.createElement("ul",{className:"list"},t.ingredients.map((function(e,n){return r.a.createElement("li",{key:n,className:"ingredient"},n+1,": ",e,r.a.createElement("button",{onClick:function(){return a(t.id,e)},className:"delete-ingredient-btn"},"x"))})),r.a.createElement("li",{className:"ingredient"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),i(t.id,N),C(""),f("".concat(x.current.scrollHeight+x.current.scrollHeight/t.ingredients.length,"px"))}},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{className:"form-control",value:N,onChange:function(e){return C(e.target.value)},placeholder:"Enter Ingredient...",required:"required"})))))))},j=function(){var e=Object(n.useContext)(v),t=e.recipes,a=e.getRecipes;return Object(n.useEffect)((function(){a()}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Recipes"),r.a.createElement("ul",{className:"list"},t.map((function(e){return r.a.createElement(O,{key:e.id,recipe:e})}))))},y=function(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)(1),l=Object(s.a)(i,2),o=l[0],u=l[1],p=Object(n.useState)(""),d=Object(s.a)(p,2),m=d[0],E=d[1],f=Object(n.useState)([]),b=Object(s.a)(f,2),g=b[0],h=b[1],R=Object(n.useContext)(v).addRecipe,O=Object(n.useContext)(v).recipes;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Add new Recipe"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),h([]);var t=[];if(O.forEach((function(e){if(e.name===a)return console.log("non unique name"),void t.push("Recipe name must be unique")})),t.length>0)h(t);else{var n={id:Math.floor(1e8*Math.random()),name:a,servings:o,URL:m,ingredients:["Salt","Pepper"]};R(n)}}},g.map((function(e){return r.a.createElement("p",{className:"error",key:e},"Error: ",e)})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"name"},"Name"),r.a.createElement("input",{type:"text",value:a,onChange:function(e){return c(e.target.value)},placeholder:"Enter Name...",required:"required"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"amount"},"Servings"),r.a.createElement("input",{type:"number",min:"1",value:o,onChange:function(e){return u(e.target.value)},placeholder:"Enter Servings..."})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"servings"},"URL"),r.a.createElement("input",{type:"text",value:m,onChange:function(e){return E(e.target.value)},placeholder:"Enter URL..."})),r.a.createElement("button",{className:"btn"},"Add Recipe")))};a(43);var N=function(){return r.a.createElement(h,null,r.a.createElement(l,null),r.a.createElement("div",{className:"container"},r.a.createElement(j,null),r.a.createElement(y,null)))};i.a.render(r.a.createElement(N,null),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.147ce30b.chunk.js.map