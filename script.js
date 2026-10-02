function register(){
    const details={
        name:username.value,
        accnumber:accnum.value,
        pass:password.value
    }
    console.log(details);
    if(details.name=="" || details.accnumber=="" || details.pass=="" ){
        alert("fill the form now")
    }
    else if(details.accnumber in localStorage){
        alert("account already exists")
    }
    else{
    localStorage.setItem(details.accnumber,JSON.stringify(details))
    alert("registered successfully")

    localStorage.setItem('username',username.value)
    
    window.location.href="login.html"
    }
}





function login(){
    const loging={
    acc:accnum.value,
    psd:password.value
}
if(loging.acc=="" || loging.psd==""){
    alert("please fill the form")
}
else{
    let detail=JSON.parse(localStorage.getItem(loging.acc))
    console.log(detail);
    if(detail){
         if(detail.accnumber==loging.acc && detail.pass==loging.psd){
            alert("login successfull")

            localStorage.setItem("currentuser",loging.acc)
            window.location.href="amount.html"
    }
    else{
        alert("wrong password")
    }
    }
    else{
        alert("account not existing")
    }
}
}







let total=0
function balance(){
    const bal={
        am:amount.value,
        pa:pswrd.value
    }
    if(bal.pa==''){
        alert("please enter the password")
    }
    else if(bal.am==''){
        alert("enter the amount")
    }
    else{
     let detai = JSON.parse(localStorage.getItem(localStorage.getItem("currentuser")))
            if(detai.pass==bal.pa){
                let amo=Number(amount.value)
                total=total+amo
                result.innerHTML = ` balance: ${total}`
                addHistory("Deposit", amo, total)
            }
            else{
                alert("incorrect password")
            }
    } 
}







function withdraw(){
    const bala={
        amou:AMO.value,
        paas:PAS.value
    }
    if(bala.amou=='' ||bala.paas==''){
        alert("please fill the field")
    }
   else{
   let det = JSON.parse(localStorage.getItem(localStorage.getItem("currentuser")))
    if(bala.amou<=total){
        if(det.pass==bala.paas){
        let withd=Number(AMO.value)
        total=total-Number(withd)
        balan.innerHTML=` balance : ${total}`
        addHistory("Withdrawal", withd, total)
    }else{
        alert("incorrect password")
    }
    }
    else{
        alert("insufficient bank balance")
    }
   }
}







function addHistory(type, amount, balance){

    let date = new Date().toLocaleString()

    balhistory.innerHTML += `
        <tr>
            <td class="p-3 border-b">${date}</td>
            <td class="p-3 border-b">${type}</td>
            <td class="p-3 border-b">₹${amount}</td>
            <td class="p-3 border-b">₹${balance}</td>
        </tr>
    `
}




function logout(){
    localStorage.clear()
    window.location.href='index.html'
}



