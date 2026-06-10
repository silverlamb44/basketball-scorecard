let homeScore = document.getElementById("hs")
let hsCount = 0

function incHsOne() {
    hsCount += 1
    homeScore.textContent = hsCount
}

function incHsTwo() {
    hsCount += 2
    homeScore.textContent = hsCount
}

function incHsThree() {
    hsCount += 3
    homeScore.textContent = hsCount
}

function decHsOne() {
    hsCount -= 1
    homeScore.textContent = hsCount
}

let guestScore = document.getElementById("gs")
let gsCount = 0

function incGsOne() {
    gsCount += 1
    guestScore.textContent = gsCount
}

function incGsTwo() {
    gsCount += 2
    guestScore.textContent = gsCount
}

function incGsThree() {
    gsCount += 3
    guestScore.textContent = gsCount
}

function decGsOne() {
    gsCount -= 1
    guestScore.textContent = gsCount
}

function resetHs() {
    // let text = "Are you sure you want to reset score to 0 points?";
    if (confirm("Are you sure you want to reset score to 0 points?") == true)
        {
        hsCount = 0
        homeScore.textContent = hsCount
        }
    }

 function resetGs(){ 
 if (confirm("Are you sure you want to reset score to 0 points?") == true)
        {
        gsCount = 0
        guestScore.textContent = gsCount
        }
    }