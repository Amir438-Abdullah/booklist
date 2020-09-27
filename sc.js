alert("Assalamu'alaikum wa Rahmatullah!");
const title= document.querySelector("#title");
const author= document.querySelector("#a");
const year= document.querySelector("#y");
const btn= document.querySelector(".btn");
const booklist= document.querySelector("#book-list");

btn.addEventListener("click",function(p){
    p.preventDefault();

    if(title.value =="" , author.value=="" , year.value==""){
        alert("kisu to lekhen!");
    } else{
        const newRow= document.createElement("tr");
        const newTitle= document.createElement("th");
        newTitle.innerHTML=title.value;

        newRow.appendChild(newTitle);

        const newAuthor= document.createElement("th");
        newAuthor.innerHTML=author.value;

        newRow.appendChild(newAuthor);

        const newYear= document.createElement("th");
        newYear.innerHTML=year.value;

        newRow.appendChild(newYear);

        booklist.appendChild(newRow);
        

    }
})
