


// const fClassPlus = document.getElementById('f-class-plus');
// fClassPlus.addEventListener('click', function () {
//     getButtonValue(true, 'f-class-input', 'f-class-ticket')

// })

// const fClassMinus = document.getElementById('f-class-minus');
// fClassMinus.addEventListener('click', function () {
//     getButtonValue(false, 'f-class-input', 'f-class-ticket')

// })

// const eClassPlus = document.getElementById('e-class-plus');
// eClassPlus.addEventListener('click', function () {
//     getButtonValue(true, 'e-class-input', 'e-class-ticket')

// })

// const eClassMinus = document.getElementById('e-class-minus');
// eClassMinus.addEventListener('click', function () {
//     getButtonValue(false, 'e-class-input', 'e-class-ticket')
//     console.log(4556)
// })


//  ..........................  Button value ..................................

function getButtonValue(isPlus, seatClassInput, seatClassPrice) {
    const btnInput = document.getElementById(seatClassInput);
    const btnInputNum = Number(btnInput.value);

    let btnInputNumNew = btnInputNum;

    if (isPlus == true) {
        btnInputNumNew = btnInputNum + 1;
       
    }
    if (isPlus == false && btnInputNum > 0) {
        btnInputNumNew = btnInputNum - 1;
        console.log(btnInputNumNew)
    }

    btnInput.value = btnInputNumNew;
    
    let ticketPriceValue;
    if (seatClassPrice == 'f-class-ticket') {
        ticketPriceValue = document.getElementById(seatClassPrice).value = 150 * btnInput.value;
    }
    if (seatClassPrice == 'e-class-ticket') {
        ticketPriceValue = document.getElementById(seatClassPrice).value = 100 * btnInput.value;
    }

    calcGrandTotal();
}


// ....................  Calculate Grand Total Function....................

function calcGrandTotal(){
    const fClassTicketCount = getTicketCountNum('f-class-input');
    const eClassTicketCount = getTicketCountNum('e-class-input');

    const subTotal = fClassTicketCount * 150 + eClassTicketCount * 100;   
    document.getElementById('subTotal').innerText = subTotal;

    const vat =(subTotal * .1) / 10;
    document.getElementById('vat').innerText= vat ;

    const grandTotal = subTotal + vat;
    document.getElementById('grandTotal').innerText = grandTotal;
}


// .......................Get Ticket Count Number...........................

function getTicketCountNum(countId){
    const ticketCount = document.getElementById(countId)
    const ticketCountNum = parseInt(ticketCount.value);
     return ticketCountNum; 
}


//  .........................Book Now....................................

// function bookNow(){
//     const bookingSection = document.getElementById('bookingSection');
//     bookingSection.style.display = 'none'
// }



function bookNow(){

    const bookingSection = document.getElementById("bookingSection");
    bookingSection.style.display = 'none'

    document.getElementById('receipt').style.display='block';
    
}
