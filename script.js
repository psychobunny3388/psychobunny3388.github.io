let money=0;
const images=["https://archives.bulbagarden.net/media/upload/thumb/f/fb/0001Bulbasaur.png/640px-0001Bulbasaur.png", "https://archives.bulbagarden.net/media/upload/thumb/8/81/0002Ivysaur.png/640px-0002Ivysaur.png","https://img.pokemondb.net/sprites/scarlet-violet/normal/venusaur.png","https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Charmander.png/250px-Charmander.png","https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/005.png", "https://upload.wikimedia.org/wikipedia/en/1/1f/Pok%C3%A9mon_Charizard_art.png", "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/007.png", "https://pokestop.io/img/pokemon/wartortle-256x256.png", "https://easydrawingguides.com/wp-content/uploads/2018/09/Blastoise-10.png", "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/010.png","https://marriland.com/wp-content/plugins/marriland-core/images/pokemon/sprites/home/full/metapod.png","https://marriland.com/wp-content/plugins/marriland-core/images/pokemon/sprites/home/full/butterfree.png","https://marriland.com/wp-content/plugins/marriland-core/images/pokemon/sprites/home/full/weedle.png","https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/014.png","https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/015.png","https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/016.png","https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/017.png","https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/018.png","https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/019.png"];
let imageIndex=0;
const btn=document.querySelector(".moneybutton");
const moneyDisplay=document.getElementById("moneydisplay");
const pokemonImage=document.getElementById("pokemonImage");
function changemoney()
{
money++;
moneyDisplay.textContent=money;
if(money%10===0)
{
    imageIndex++;
    if(imageIndex>=images.length){
        imageIndex=0;
    }
    pokemonImage.src=images[imageIndex];
}
console.log("Money: ",money);
}
btn.addEventListener("click",changemoney);
