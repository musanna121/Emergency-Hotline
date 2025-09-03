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
        const x = `<div class="flex justify-between items-center bg-[#f3f1f1] rounded-2xl p-2 mb-3">
            <div class="">
                <h2 class="font-bold text-[18px]">National Emergency Number</h2>
                <h4 class="font-bold text-[18px]">999</h4>
            </div>
                <h2 class="font-bold ml-10 text-[18px]">${showDate}</h2>
        </div>`
        alert("About to call National Emergency Number 999")
        document.getElementById("call-list").innerHTML += x
    }
    else(
        alert("Please recharge your account! Insufficient balance")
    )
     
})

// Call police 

document.getElementById("call-police").
addEventListener("click", function(e){
    e.preventDefault()
    const money = parseInt(document.getElementById("coin").innerText)
    if(money >= 20){
        const newBalance = money - 20
        document.getElementById("coin").innerText = newBalance
        const date = new Date()
        showDate = date.toLocaleTimeString()
        console.log(showDate)
        const x = `<div class="flex justify-between items-center bg-[#f3f1f1] rounded-2xl p-2 mb-3">
            <div class="">
                <h2 class="font-bold text-[18px]">Police Helpline Number</h2>
                <h4 class="font-bold text-[18px]">999</h4>
            </div>
                <h2 class="font-bold ml-10 text-[18px]">${showDate}</h2>
        </div>`
        alert("About to call Police Helpline Number 999")
        document.getElementById("call-list").innerHTML += x
    }
    else(
        alert("Please recharge your account! Insufficient balance")
    )
     
})

// Call Fire 

document.getElementById("call-fire").
addEventListener("click", function(e){
    e.preventDefault()
    const money = parseInt(document.getElementById("coin").innerText)
    if(money >= 20){
        const newBalance = money - 20
        document.getElementById("coin").innerText = newBalance
        const date = new Date()
        showDate = date.toLocaleTimeString()
        console.log(showDate)
        const x = `<div class="flex justify-between items-center bg-[#f3f1f1] rounded-2xl p-2 mb-3">
            <div class="">
                <h2 class="font-bold text-[18px]">Fire Service Number</h2>
                <h4 class="font-bold text-[18px]">999</h4>
            </div>
                <h2 class="font-bold ml-10 text-[18px]">${showDate}</h2>
        </div>`
        alert("About to call Fire Service Number 999")
        document.getElementById("call-list").innerHTML += x
    }
    else(
        alert("Please recharge your account! Insufficient balance")
    )
     
})

// Call Ambulance 

document.getElementById("call-ambulance").
addEventListener("click", function(e){
    e.preventDefault()
    const money = parseInt(document.getElementById("coin").innerText)
    if(money >= 20){
        const newBalance = money - 20
        document.getElementById("coin").innerText = newBalance
        const date = new Date()
        showDate = date.toLocaleTimeString()
        console.log(showDate)
        const x = `<div class="flex justify-between items-center bg-[#f3f1f1] rounded-2xl p-2 mb-3">
            <div class="">
                <h2 class="font-bold text-[18px]">Ambulance Service</h2>
                <h4 class="font-bold text-[18px]">1994-999999</h4>
            </div>
                <h2 class="font-bold ml-10 text-[18px]">${showDate}</h2>
        </div>`
        alert("About to call Ambulance Service 1994-999999")
        document.getElementById("call-list").innerHTML += x
    }
    else(
        alert("Please recharge your account! Insufficient balance")
    )
     
})

// Child

document.getElementById("child-call").
addEventListener("click", function(e){
    e.preventDefault()
    const money = parseInt(document.getElementById("coin").innerText)
    if(money >= 20){
        const newBalance = money - 20
        document.getElementById("coin").innerText = newBalance
        const date = new Date()
        showDate = date.toLocaleTimeString()
        console.log(showDate)
        const x = `<div class="flex justify-between items-center bg-[#f3f1f1] rounded-2xl p-2 mb-3">
            <div class="">
                <h2 class="font-bold text-[18px]">Women & Child Helpline</h2>
                <h4 class="font-bold text-[18px]">109</h4>
            </div>
                <h2 class="font-bold ml-10 text-[18px]">${showDate}</h2>
        </div>`
        alert("About to call Women & Child Helpline 109")
        document.getElementById("call-list").innerHTML += x
    }
    else(
        alert("Please recharge your account! Insufficient balance")
    )
     
})

// Anti-Corruption

document.getElementById("call-anti-corruption").
addEventListener("click", function(e){
    e.preventDefault()
    const money = parseInt(document.getElementById("coin").innerText)
    if(money >= 20){
        const newBalance = money - 20
        document.getElementById("coin").innerText = newBalance
        const date = new Date()
        showDate = date.toLocaleTimeString()
        console.log(showDate)
        const x = `<div class="flex justify-between items-center bg-[#f3f1f1] rounded-2xl p-2 mb-3">
            <div class="">
                <h2 class="font-bold text-[18px]">Anti-Corruption Helpline</h2>
                <h4 class="font-bold text-[18px]">106</h4>
            </div>
                <h2 class="font-bold ml-10 text-[18px]">${showDate}</h2>
        </div>`
        alert("About to call Anti-Corruption Helpline 106")
        document.getElementById("call-list").innerHTML += x
    }
    else(
        alert("Please recharge your account! Insufficient balance")
    )
     
})

// Electricity Helpline

document.getElementById("call-electricity").
addEventListener("click", function(e){
    e.preventDefault()
    const money = parseInt(document.getElementById("coin").innerText)
    if(money >= 20){
        const newBalance = money - 20
        document.getElementById("coin").innerText = newBalance
        const date = new Date()
        showDate = date.toLocaleTimeString()
        console.log(showDate)
        const x = `<div class="flex justify-between items-center bg-[#f3f1f1] rounded-2xl p-2 mb-3">
            <div class="">
                <h2 class="font-bold text-[18px]">Electricity Helpline</h2>
                <h4 class="font-bold text-[18px]">16216</h4>
            </div>
                <h2 class="font-bold ml-10 text-[18px]">${showDate}</h2>
        </div>`
        alert("About to call Electricity Helpline 16216")
        document.getElementById("call-list").innerHTML += x
    }
    else(
        alert("Please recharge your account! Insufficient balance")
    )
     
})


// Brac Helpline

document.getElementById("call-brac").
addEventListener("click", function(e){
    e.preventDefault()
    const money = parseInt(document.getElementById("coin").innerText)
    if(money >= 20){
        const newBalance = money - 20
        document.getElementById("coin").innerText = newBalance
        const date = new Date()
        showDate = date.toLocaleTimeString()
        console.log(showDate)
        const x = `<div class="flex justify-between items-center bg-[#f3f1f1] rounded-2xl p-2 mb-3">
            <div class="">
                <h2 class="font-bold text-[18px]">Brac Helpline</h2>
                <h4 class="font-bold text-[18px]">16445</h4>
            </div>
                <h2 class="font-bold ml-10 text-[18px]">${showDate}</h2>
        </div>`
        alert("About to call Brac Helpline 16445")
        document.getElementById("call-list").innerHTML += x
    }
    else(
        alert("Please recharge your account! Insufficient balance")
    )
     
})

// Bangladesh Railway Helpline

document.getElementById("call-railway").
addEventListener("click", function(e){
    e.preventDefault()
    const money = parseInt(document.getElementById("coin").innerText)
    if(money >= 20){
        const newBalance = money - 20
        document.getElementById("coin").innerText = newBalance
        const date = new Date()
        showDate = date.toLocaleTimeString()
        console.log(showDate)
        const x = `<div class="flex justify-between items-center bg-[#f3f1f1] rounded-2xl p-2 mb-3">
            <div class="">
                <h2 class="font-bold text-[18px]">Bangladesh Railway Helpline</h2>
                <h4 class="font-bold text-[18px]">163</h4>
            </div>
                <h2 class="font-bold ml-10 text-[18px]">${showDate}</h2>
        </div>`
        alert("About to call Bangladesh Railway Helpline 163")
        document.getElementById("call-list").innerHTML += x
    }
    else(
        alert("Please recharge your account! Insufficient balance")
    )
     
})

