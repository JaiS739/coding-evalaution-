// write code here, dont change anything in HTML and css files 
// refer to id's mentioned in html files carefully
// Follow the exact column order for tables,for eg: name should be filled under "name" column 
// we are using form here, make sure you are using "submit" eventListener , or else you will get 0 marks

document.querySelector("form").addEventListener("submit",studentdata);

function studentdata(){
    event.preventDefault();
    var StudentImage = document.querySelector("#image").value;
    var StudentName = document.querySelector("#name").value;
    var Batch = document.querySelector("#batch").value;    
    var DSA = document.querySelector("#dsa").value;
    var Skillathon = document.querySelector("#cs").value;
    var Coding = document.querySelector("#coding").value;

    

    var td1 = document.createElement("td");
    var img = document.createElement("img");
    img.src=StudentImage;
    td1.append(img);

    var td2 = document.createElement("td");
    td2.innerText=StudentName;
    var td3 = document.createElement("td");
    td3.innerText=Batch
    var td4 = document.createElement("td");
    td4.innerText=DSA;
    var td5 = document.createElement("td");
    td5.innerText=Skillathon;
    var td6 = document.createElement("td");
    td6.innerText=Coding;

    var totalmarks = Number(DSA) + Number(Skillathon)+ Number(Coding);
    
    var percentage1 = (totalmarks/30)*100;

    var td7 = document.createElement("td");
    td7.innerText= percentage1;

    var status = "";

    if(percentage1>50){
        status = "Regular";
    }else if(percentage1==0){
        status="";
    }    
    else{
        status = "Async"
    }  
   

    var td8 = document.createElement("td");
    td8.innerText= status;
    if(status=="Async"){
        td8.style.backgroundColor="red";
    }else if(status=="Regular"){
        td8.style.backgroundColor="green";
    }
    else if(status==""){
        td8.style.background="white";
    }

    var tr1 = document.createElement("tr");
    tr1.append(td1,td2,td3,td4,td5,td6,td7,td8);
    document.querySelector("tbody").append(tr1);

}