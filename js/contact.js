const con = document.querySelector("#con");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const sub = document.querySelector("#sub");
const msg = document.querySelector("#msg");

con.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log("hello");

    str = "<div class='row background-change mb-5'> " +
           " <div class='col'> " +
             "   <p class='fs-2 fw-bold'>Name : " + name.value + "</p> " +
              "  <p class='fs-3 fw-bolder'>Email : "+ email.value +"</p> " +
               " <p class='fs-4 fw-semibold'>Subject : "+ sub.value +"</p> " +
              "  <p class='fs-5'>Message : " + msg.value + "</p> " +
           " </div> </div>";
           console.log(str);
           localStorage.setItem('str', str);        
})

