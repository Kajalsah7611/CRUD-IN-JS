
let addBtn = document.getElementById("add_btn")
addBtn.addEventListener('click', addChapter)


function addChapter(e) {
  let currentBtn = e.currentTarget;  //gives eventListener triggered element i.e here it is Button
  // console.log(currentBtn)
  let currentInput = currentBtn.previousElementSibling  //to get inputfield element from button
  //console.log(currentInput.value)
  let currentChapterName = currentInput.value


  //Create element to add Chapters

  // let newLi= document.createElement("li")  
  // newLi.classList.add("list-group-item")
  //  newLi.textContent=currentInput.value

  // let parentList= document.getElementById('parentList') // to get id of Parent where you want to append newLi
  // parentList.appendChild(newLi)


  let newLi = document.createElement("li")
  //newLi.classList.add("list-group-item")

  newLi.className = 'list-group-item d-flex justify-content-between'  //Using "classList", you can add or remove a class without affecting any others the element may have. But if you assign "className", it will wipe out any existing classes while adding the new one 
  newLi.innerHTML = `<h3 class="flex-grow-1">${currentChapterName}</h3> 
            <button class="btn btn-danger mx-4" onclick="removeChapter(this)">Remove</button>
            <button class="btn btn-primary" onclick="editChapter(this)">Edit</button> `

  let parentList = document.getElementById('parentList') // to get id of Parent where you want to append newLi
  parentList.appendChild(newLi)


  //to remove empty Msg
  if (parentList.children[0].className == "emptyMsg") {
    parentList.children[0].remove()
  }


}




function removeChapter(currElement) {    //this keyword (CurrElement) referred to that partilar remove button
  currElement.parentElement.remove()      //parentElement refers to parent tag of CurrElemnt(remove button)

  let parentList = document.getElementById('parentList')
  if (parentList.children.length <= 0) {
    let newEmptyMsg = document.createElement("h3")
    newEmptyMsg.classList.add('emptyMsg')
    newEmptyMsg.textContent = "Nothing is here! Please add Chapter"
    parentList.appendChild(newEmptyMsg)
  }
}




function editChapter(currElement){

if(currElement.textContent=="Edit"){

  currElement.textContent="Done"
   //console.log(currElement)
// let currentChapterName=currElement.previousElementSibling.textContent
//   console.log(currentChapterName)

// var currentChapterName=currElement.previousElementSibling   //gets remove botton tag
//   currentChapterName=currentChapterName.previousElementSibling.textContent  //gets previous of remove button that is H3 tag
//   console.log(currentChapterName)
var currentChapterNameTag=currElement.previousElementSibling.previousElementSibling
var currentChapterName=currElement.previousElementSibling.previousElementSibling.textContent  //to get H3 tag value direCtly by targetting CurrentElement
 //   console.log(currentChapterName)


let newInput=document.createElement("input")
newInput.type="text"
newInput.placeholder="Chapter Name"
newInput.className="form-control"
//newInput.value=currentChapterName
newInput.value=""

currElement.parentElement.replaceChild(newInput,currentChapterNameTag)
//console.log(newInput.value)
}

else{
  currElement.innerHTML="Edit"
  var currentChapterNameTag=currElement.previousElementSibling.previousElementSibling
  var currentChapterName=currElement.previousElementSibling.previousElementSibling.value
  let newHeading=document.createElement("h3")
  newHeading.className="flex-grow-1"
  newHeading.innerHTML=currentChapterName
  currElement.parentElement.replaceChild(newHeading,currentChapterNameTag)

}

}