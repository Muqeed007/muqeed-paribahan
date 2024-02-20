const allBtn = document.getElementsByClassName('btn');

let count = 40;

for (const btn of allBtn){
    btn.addEventListener("click",function(e){
        count = count - 1;



        const seat = 3.target.parentnode
        setInnerText("seat-count",count);
        
    });
}

function setInnerText(id,value){
    document.getElementById(id).innerText = value;
}