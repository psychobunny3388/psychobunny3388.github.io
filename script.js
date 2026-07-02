let money=0;
const images=["https://archives.bulbagarden.net/media/upload/thumb/f/fb/0001Bulbasaur.png/640px-0001Bulbasaur.png", "https://archives.bulbagarden.net/media/upload/thumb/8/81/0002Ivysaur.png/640px-0002Ivysaur.png","https://img.pokemondb.net/sprites/scarlet-violet/normal/venusaur.png","https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Charmander.png/250px-Charmander.png","https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/005.png"];
let imageIndex=0;
function changemoney()
{
money+=1;
console.log("Clicks: ",money);


}
const btn =document.querySelector("moneybutton");
btn.addEventListener("click", changemoney())
