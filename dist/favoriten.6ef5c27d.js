const e=function(){let e=localStorage.getItem("pokemonfavoriten");return null!==e?JSON.parse(e):null}();console.log(e),e&&e.forEach(function(e){if(!e||!e.name){console.error("pokemon oder pokemon.name ist undefiniert");return}let t=e.name.charAt(0).toUpperCase()+e.name.slice(1),l={id:e.id,name:t,weight:e.weight,height:e.height,note:e.note},n=document.getElementById("pokemonfavoriten"),r=document.createElement("li");r.setAttribute("class","flex-col relative border-2 p-4 rounded-lg border-blue-400 flex flex-row"),r.innerHTML='<div class="w-full flex flex-wrap"><img class="w-40 h-auto mr-4 ml-0" src="'+e.picture+'"alt="Pokemonbild"><div class="discrption content-center"><p class="id text-center">ID: '+e.id+'</p><p class="name text-center">'+t+'</p><p class="height text-center">Height: '+e.height+' ft</p><p class="weight text-center mb-5">Weight: '+e.weight+" lbs</p></div></div>",r.innerHTML='<div class="w-full flex flex-wrap"><img class="w-40 h-auto mr-4 ml-0" src="'+e.picture+'" alt="Pokemonbild"><div class="description content-center"><p class="id text-center">'+e.id+'</p><p class="name text-center">'+t+'</p><p class="height text-center">'+e.height+' ft</p><p class="weight text-center mb-5">'+e.weight+" lbs</p></div></div>";let i=document.createElement("div");i.setAttribute("class","w-full flex-wrap flex gap-2 p-3");let s=document.createElement("a");s.setAttribute("href","#"),s.setAttribute("class","border-2 rounded-lg mb-5 p-2 border-blue-400"),s.setAttribute("onClick","deleteFromFav("+JSON.stringify(l)+")"),s.innerText="Delete",i.appendChild(s);let o=document.createElement("a");o.setAttribute("href","#"),o.setAttribute("class","border-2 rounded-lg mb-5 p-2 border-blue-400"),o.setAttribute("onClick","saveNoteButton("+JSON.stringify(l)+")"),o.innerText="Save Note",i.appendChild(o);let c=document.createElement("input");c.setAttribute("type","textarea"),c.setAttribute("class","flex-none border-2 w-full mb-5 p-2 focus:bg-red-100"),c.setAttribute("id","note-"+e.id),c.setAttribute("placeholder","insert your note"),i.appendChild(c);let a=document.createElement("p");a.setAttribute("class","flex-none w-full mb-5 p-2 focus:bg-red-100"),a.setAttribute("id","noteShow-"+e.id),a.innerText=e.note??"",i.appendChild(a),r.appendChild(i),n.appendChild(r)});
//# sourceMappingURL=favoriten.6ef5c27d.js.map