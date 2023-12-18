var nameinput = document.getElementById("productName")
var Priceinput = document.getElementById("productPrice")
var Categoryinput = document.getElementById("productCategory")
var Saleinput = document.getElementById("productSale")
var Descriptioninput = document.getElementById("productDescription")
var searchInput = document.getElementById("Searchval")
var productList = []
var index=-1
if(localStorage.getItem("productList")!=null){
    productList=JSON.parse(localStorage.getItem("productList"))
    showData()
}


function addProduct(){
    var product = {
        name:nameinput.value,
        price:Priceinput.value,
        Category:Categoryinput.value,
        Description:Descriptioninput.value,
        Sale:Saleinput.checked,
    }
    if(nameinput.value==""||Priceinput.value==""||Categoryinput.value==""){

        nameInputValidation()
        PriceInputValidation()
        CategoryInputValidation()
    }
    
    else{
        productList.push(product)
        showData()
        localStorage.setItem("productList",JSON.stringify(productList))
       
        claerform()
        nonevalid()
    }
    
}

function showData(){
    var temp=""
    for(var i=0; i<productList.length;i++){
        temp += `<tr>
        <td>`+i+`</td>
        <td>`+productList[i].name+`</td>
        <td>`+productList[i].price+`</td>
        <td>`+productList[i].Category+`</td>
        <td>`+productList[i].Sale+`</td>
        <td>`+productList[i].Description+`</td>
        <td><button onclick="updateProduct(`+i+`)" class="btn btn-warning">Update</button></td>
        <td><button onclick="deletProduct(`+i+`)"  class="btn btn-danger">Delete</button></td>
    </tr>`

    }
    document.getElementById("tableData").innerHTML=temp
}

function deletProduct(x){
    productList.splice(x,1)
    showData()
    localStorage.setItem("productList",JSON.stringify(productList))


}

function search(){
    var temp=""
    var searchval = searchInput.value.toLowerCase()
    for(var i=0; i<productList.length;i++){
       if(productList[i].Category.toLowerCase().includes(searchval)==true ||productList[i].name.toLowerCase().includes(searchval)==true){
        temp += `<tr>
        <td>`+i+`</td>
        <td>`+productList[i].name.toLowerCase().replace(searchval,"<span class='bg-white text-black'>"+searchval+"</span>")+`</td>
        <td>`+productList[i].price+`</td>
        <td>`+productList[i].Category.toLowerCase().replace(searchval,"<span class='bg-white text-black'>"+searchval+"</span>")+`</td>
        <td>`+productList[i].Description+`</td>
        <td>`+productList[i].Sale+`</td>
        <td><button onclick="updateProduct(`+i+`)" class="btn btn-warning">Update</button></td>
        <td><button onclick="deletProduct(`+i+`)"  class="btn btn-danger">Delete</button></td>
    </tr>`
    
       }

    }
    document.getElementById("tableData").innerHTML=temp
}

function updateProduct(x){
    
    index=x
    nameinput.value=productList[x].name
    Priceinput.value=productList[x].price
    Categoryinput.value=productList[x].Category
    Saleinput.checked=productList[x].Sale
    Descriptioninput.value=productList[x].Description
    
    document.getElementById("addproduct").classList.replace("d-block","d-none")
    document.getElementById("Ubdateproduct").classList.replace("d-none" ,"d-block")
   
    
}

function editProduct(){
    document.getElementById("addproduct").classList.replace("d-none","d-block")
    document.getElementById("Ubdateproduct").classList.replace("d-block" ,"d-none")
    productList[index].name= nameinput.value
    productList[index].price= Priceinput.value
    productList[index].Category= Categoryinput.value
    productList[index].Sale=Saleinput.checked
    productList[index].Description= Descriptioninput.value
    showData()
    localStorage.setItem("productList",JSON.stringify(productList))
    claerform()
    nonevalid()


}

function claerform(){
    
    nameinput.value=""
    Priceinput.value=""
    Categoryinput.value=""
    Saleinput.checked=false
    Descriptioninput.value=""
     
}

function nameInputValidation() {
   var regex=/^[a-zA-Z0-9 ]{2,}$/
    if(regex.test(nameinput.value)==true)
    {
        nameinput.classList.add("is-valid")
        nameinput.classList.remove("is-invalid")
    }
    else{
        nameinput.classList.remove("is-valid")
        nameinput.classList.add("is-invalid")
    }
}
function PriceInputValidation() {
    var regex=/^[0-9]{2,7}$/
     if(regex.test(Priceinput.value)==true)
     {
         Priceinput.classList.add("is-valid")
         Priceinput.classList.remove("is-invalid")
     }
     else{
         Priceinput.classList.remove("is-valid")
         Priceinput.classList.add("is-invalid")
     }
 }
 function CategoryInputValidation() {
    var regex=/(Tv)|(Mobile)|(Laptop)/
     if(regex.test(Categoryinput.value)==true)
     {
         Categoryinput.classList.add("is-valid")
         Categoryinput.classList.remove("is-invalid")
     }
     else{
         Categoryinput.classList.remove("is-valid")
         Categoryinput.classList.add("is-invalid")
     }
 }

 function nonevalid(){
    nameinput.classList.remove("is-invalid")
    nameinput.classList.remove("is-valid")
    Priceinput.classList.remove("is-valid")
    Priceinput.classList.remove("is-invalid")
    Categoryinput.classList.remove("is-invalid")
    Categoryinput.classList.remove("is-valid")
 }
  


