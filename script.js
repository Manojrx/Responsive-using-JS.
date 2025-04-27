// your code goes here
// document.getElementById('descriptionBottom').innerHTML =   'Published :1010 | view: 22';
// document.getElementsByClassName('descriptionBottom')[1].innerHTML ="altered" // if we have multiple div with same className

// document.getElementsByClassName('descriptionBottom')[0].innerHTML = 'Published :1010 | view: 22';

// document.getElementsByTagName('p')[0].innerHTML ="altered"
// console.log(document.getElementsByTagName('p'))     // retunrs list of elemnts
// console.log(document.getElementsByClassName('descriptionBottom')) // retunrs list of elemnts


// `const child = document.getElementsByClassName('childContainer');
//  for(let i=0; i< child.length;i++){
//     if(i%2==0){
//         child[i].style.backgroundcolor ='red'
//     }
//  }`


//using getElementsByClassName aplying css to even index

const children = document.getElementsByClassName('childContainer');
for (let i = 0; i < children.length; i++) {
    if (i % 2 === 0) {
        children[i].style.backgroundColor = 'blue';
    }
}

//using querySelectorAll applying index odd

const usingQuerySelectorAll = document.querySelectorAll('.childContainer');
usingQuerySelectorAll.forEach((elem, index) => {
    if (index % 2 !== 0) {
        usingQuerySelectorAll[index].style.backgroundColor = 'grey'
    }

})



//Adding Class using ClassName.
const heading = document.getElementsByClassName('heading');
heading[0].classList.add('addedClassinjs')


//Adding Class using getElementByid.
document.getElementById('someId').classList.add('addedClass_in_js_using_Id');      //tried same div with Id.
