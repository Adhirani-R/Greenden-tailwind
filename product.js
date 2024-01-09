 //Selecting side nav, menuIcon
 var menuicon = document.getElementById("menuicon")
 var sidenav = document.getElementById("sidenav")
 var closenav = document.getElementById("closenav")

 menuicon.addEventListener("click",function(){

     sidenav.style.right=0
    
 })

 closenav.addEventListener("click",function(){
     sidenav.style.right="-50%"
 })

 //Product SearchFunctionality

 var search = document.getElementById("search")
 var productcontainer=document.getElementById("productcontainer")
 var productlist=productcontainer.querySelectorAll("div")
  search.addEventListener("keyup",function(){
    var enteredvalue=this.value.toUpperCase()
    for(count=0;count<productlist.length;count++)
    {
        if(productlist[count].textContent.toUpperCase().indexOf(enteredvalue)<0)
        {
            productlist[count].style.display="none"
        }
        else
        {
            productlist[count].style.display="block"
        }
    }

 })