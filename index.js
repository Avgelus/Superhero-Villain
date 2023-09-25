fetch('http://localhost:3000/Heros-Villains')
.then((resp) => resp.json())
.then((data) => heroVillain(data))


const showMain = (heroObj) => {
    const nameLocation = document.getElementById('hero-list')
    const li = document.createElement('li')
    li.textContent = heroObj.name 
    nameLocation.append(li)

    li.addEventListener('click', showDetails)

    function showDetails(){
        const heroImg = document.getElementById('heroImg')
        heroImg.src = heroObj.url
        heroImg.style.width = '500px'
        heroImg.style.height = '500px'
        const heroName = document.getElementById('name')
        heroName.textContent = heroObj.name
        const heroIntel = document.getElementById('intelligence')
        heroIntel.textContent = heroObj.intelligence
        const heroStrength =document.getElementById('strength')
        heroStrength.textContent = heroObj.strength 
        const heroSpeed = document.getElementById('speed')
        heroSpeed.textContent = heroObj.speed 
        const heroDurability = document.getElementById('durability')
        heroDurability.textContent = heroObj.durability 
        const heroPower = document.getElementById('power')
        heroPower.textContent = heroObj.power 
        const heroCombat = document.getElementById('combat')
        heroCombat.textContent = heroObj.combat
    }
    li.addEventListener('mouseover', showImg)
    function showImg(){
        const heroImg = document.getElementById('heroImg')
        heroImg.src = heroObj.url
    }
}

function heroVillain(heroArray){
    console.log(heroArray)
    heroArray.forEach(showMain)
}

const form = document.getElementById('newCharacter')
form.addEventListener('submit', (e) => addNewCharacter(e))
function addNewCharacter(e){
   e.preventDefault()
   const newHeroObj = {
       name : e.target.name.value,
       intelligence : e.target.intelligence.value,
       strength : e.target.strength.value,
       speed : e.target.speed.value,
       durability : e.target.durability.value,
       power : e.target.power.value,
       combat : e.target.combat.value,
       image : e.target.image.value 
   }
   showMain(newHeroObj)
}