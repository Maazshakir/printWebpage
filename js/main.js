location.replace("https://contenthub.netacad.com/itn/12.2.1");

let url1 = 4;
let url2 = 1;
const url3 = 1;
let id = 0;



function start(){
    let state = main();
    while(state != 404){
        main();
    }
}


function main(){
    savePDF(id);
    let havePage = changePage();
    if(havePage == 404){
        let haveChapter = changeChapter();
        if(haveChapter == 404){
            return 404;
        }
    }
}

function savePDF(id){
    const invoice = this.document.getElementById("invoice");
            console.log(invoice);
            console.log(window);
            var opt = {
                margin: 1,
                filename: 'myfile'+id+'.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2 },
                jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
            };
            html2pdf().from(invoice).set(opt).save();
 }

function changePage(){
    location.replace("https://contenthub.netacad.com/itn/"+url1+""+(url2 + 1)+""+url3+"");
    if(window.location.href == "https://contenthub.netacad.com/not-found"){
        return 404;
    }
}


function changeChapter(){
    location.replace("https://contenthub.netacad.com/itn/"+(url1+1)+""+url2+""+url3+"");
    if(window.location.href == "https://contenthub.netacad.com/not-found"){
        location.replace("https://contenthub.netacad.com/itn/"+(url1-1)+""+url2+""+url3+"");
        return 404;
    }
}






//import js
//import * as bundle from 'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.9.2/html2pdf.bundle.js';