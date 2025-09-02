document.getElementById("call-national").
addEventListener("click", function(e){
    e.preventDefault()
    const money = parseInt(document.getElementById("coin").innerText)
    if(money >= 20){
        const newBalance = money - 20
        document.getElementById("coin").innerText = newBalance
        const date = new Date()
        showDate = date.toLocaleTimeString()
        console.log(showDate)
        const x = `<div class="flex justify-between bg-gray-300 mb-3">
            <div class="">
                <h2 class="font-bold">National Emergency Number</h2>
                <h4 class="font-bold">999</h4>
            </div>
                <h2 class="font-bold">${showDate}</h2>
        </div>`
        document.getElementById("call-list").innerHTML += x
    }
    else(
        alert("Please recharge your account! Unsufficient balance")
    )
     
})