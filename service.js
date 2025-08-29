
let num = 0;
const copyCount = document.getElementById("copy-count")
const copyBtn =  document.getElementsByClassName("copy-btn")
for( let copyOne of copyBtn){
    copyOne.addEventListener("click",function(){
        num++;
        copyCount.innerText=num
        

        const text = copyOne.value + "999"

  navigator.clipboard.writeText(text);

        alert("It has been copied 999")
    })
}



let nam = 0;
let zero = document.getElementById("love");

let btn = document.querySelectorAll(".ph")

btn.forEach(btnR =>{

btnR.addEventListener("click",function(){
    nam++;
    zero.innerText = nam  
})

})




let taka = 100;
 function takeElement(vala){
    const elem  = document.getElementById(vala);
    return elem;
 }

const allBtn = document.getElementsByClassName("btn-call")

for( let oneBtn of allBtn){
    oneBtn.addEventListener("click",function(){
        const title = oneBtn.parentNode.parentNode.childNodes[1].childNodes[3].innerText
        const helpN = oneBtn.parentNode.parentNode.childNodes[1].childNodes[7].innerText

            const card = takeElement("card-container")

           const newCard =document.createElement("div")
        newCard.innerHTML= ` <div class="p-2 rounded-[8px] mt-8 bg-[#fafafa] shadow-md">
 <h2 class="font-semibold text-xl ml-5">${title}</h2>
 <h3 class="font-semibold  ml-6 text-[#5c5c5c]">${helpN}</h3>

</div>`

card.append(newCard)

const message = oneBtn.getAttribute("data-message");
  const coin = takeElement("coin")
   if ( taka >= 20){
    taka = taka - 20
    coin.innerText=taka

    alert(message);
   }

   else{
    alert("You don't have enough coins ")
   }

        
    })
}


document.getElementById("clear-btn").addEventListener("click", function(){
     const card = takeElement("card-container")
     card.innerHTML="";
})






