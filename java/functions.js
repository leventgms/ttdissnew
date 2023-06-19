function radionumber(){
    var radio=document.querySelectorAll('input[type="radio"]:checked');
    var values=[]
    for(var i =0;i <radio.length;i++){
    values.push(radio[i].value);
    }
    return values; 
}


function handleClick(){
    var currentpage = location.pathname.substring(location.pathname.lastIndexOf("/")+1);
    if (currentpage==="welcome.html"){
        window.location.href="ti45.html";
    } else if (currentpage==="ti45.html"){
        window.location.href="TD39.html";
    }else if(currentpage==="TD39.html"){
        var values=radionumber();
        var storedurl=JSON.parse(localStorage.getItem("shuffledUrls"))
        var diffvector=[];
        for (let i=0;i<16;i++) {        
            var valuesdiff=values[i+1]-values[i];
            diffvector[i]=valuesdiff;
        }
        let x1=diffvector.filter(x => x==1).length;
        let x0=diffvector.filter(x => x==0).length;
        let xn=diffvector.filter(x => x==-1).length;
    
        if (values.length<17){
            window.alert("Please make a decision at each line");
            event.preventDefault();        
        }else if( !(xn==1 && x0==15) && !(xn==0 && x0==16) && !(x1==1 && x0==15) ){
            window.alert(x0);
            var act= confirm("You did switch multiple timesbetween the right option and the left option in the table! If you want to proceed, click 'Ok'. To reconsider your selection, click 'Cancel'")
            if (act == true) {
                window.location.href="sm2.html";
            } else {
                window.location.href="TD39.html";
            }
        }else if(x1==1 && x0==15){
            var act = confirm("You did switch from the left option and the right option in the table! If you want to proceed, click 'Ok'. To reconsider your selection, click 'Cancel'.")
            if (act == true) {
                window.location.href="sm2.html";
            } else {
                window.location.href="TD39.html";
            }
        }else{
            window.location.href="sm2.html";
        }
    }else if(currentpage==="sm2.html"){
        var values=radionumber();    
        if (values.length==0){
            window.alert("Please make a decision.");
            event.preventDefault();        
        }else{
            window.location.href="blei0.html";
        }    
    }else if (currentpage==="blei0.html"){
        var storedurl=JSON.parse(localStorage.getItem("shuffledBUrls"));
        window.location.href=storedurl[0];
    }else if(currentpage!=="nie0.html" && currentpage!=="bte0.html" && currentpage!=="isri0.html"&& currentpage !=="uY0.html" && currentpage!=="uY_43.html" && currentpage!=="uY_67.html" && currentpage!=="uY_81.html" &&currentpage!=="uY_86.html" && currentpage!=="uY_98.html"){
    var storedurl=JSON.parse(localStorage.getItem("shuffledBUrls"));
    var values=radionumber();
    var diffvector=[];
    for (let i=0;i<16;i++) {        
        var valuesdiff=values[i+1]-values[i];
        diffvector[i]=valuesdiff;
    }
    let x1=diffvector.filter(x => x==1).length;
    let x0=diffvector.filter(x => x==0).length;
    let xn=diffvector.filter(x => x==-1).length;
    if (values.length<13){
        window.alert("Please make a decision at each line");
        event.preventDefault();        
    }else if(!(xn==1 && x0==15)&&!(xn==0 && x0==16)&&!(x1==1 && x0==15) ){
        var act= confirm("You did switch multiple timesbetween the right option and the left option in the table! If you want to proceed, click 'Ok'. To reconsider your selection, click 'Cancel'")
        if (act == true) {
            var currentPageIndex=storedurl.indexOf(currentpage);
            window.location.href=storedurl[currentPageIndex+1];
        } else {
            var currentPageIndex=storedurl.indexOf(currentpage);
            window.location.href=storedurl[currentPageIndex];
        }
    }else if(x1==1 && x0==15){
        var act = confirm("You did switch from the left option and the right option in the table! If you want to proceed, click 'Ok'. To reconsider your selection, click 'Cancel'.")
        if (act == true) {
            var currentPageIndex=storedurl.indexOf(currentpage);
            window.location.href=storedurl[currentPageIndex+1];
        } else {
            var currentPageIndex=storedurl.indexOf(currentpage);
            window.location.href=storedurl[currentPageIndex];
        }
    }else{
        var currentPageIndex=storedurl.indexOf(currentpage);
        window.location.href=storedurl[currentPageIndex+1];
    }
    }else if(currentpage==="uY_43.html" || currentpage==="uY_98.html" ||currentpage==="uY_67.html"  ) {
    var storedurl=JSON.parse(localStorage.getItem("shuffledBUrls"));
    var values=radionumber();
    var diffvector=[];
    for (let i=0;i<20;i++) {        
        var valuesdiff=values[i+1]-values[i];
        diffvector[i]=valuesdiff;
    }
    let x1=diffvector.filter(x => x==1).length;
    let x0=diffvector.filter(x => x==0).length;
    let xn=diffvector.filter(x => x==-1).length;


    if (values.length<20){
        window.alert("Please make a decision at each line");
        event.preventDefault();        
    }else if(!(xn==1 && x0==19)&&!(xn==0 && x0==20)&&!(x1==1 && x0==19) ){
        var act= confirm("You did switch multiple timesbetween the right option and the left option in the table! If you want to proceed, click 'Ok'. To reconsider your selection, click 'Cancel'")
        if (act == true) {
            var currentPageIndex=storedurl.indexOf(currentpage);
            window.location.href=storedurl[currentPageIndex+1];
        } else {
            var currentPageIndex=storedurl.indexOf(currentpage);
            window.location.href=storedurl[currentPageIndex];
        }
    }else if(x1==1 && x0==19){
        var act = confirm("You did switch from the left option and the right option in the table! If you want to proceed, click 'Ok'. To reconsider your selection, click 'Cancel'.")
        if (act == true) {
            var currentPageIndex=storedurl.indexOf(currentpage);
            window.location.href=storedurl[currentPageIndex+1];
        } else {
            var currentPageIndex=storedurl.indexOf(currentpage);
            window.location.href=storedurl[currentPageIndex];
        }
    }else{
    var currentPageIndex=storedurl.indexOf(currentpage);
    window.location.href=storedurl[currentPageIndex+1];
    }
    }else if(currentpage==="uY_86.html") {
        var storedurl=JSON.parse(localStorage.getItem("shuffledBUrls"));
        var values=radionumber();
        var diffvector=[];
        for (let i=0;i<30;i++) {        
            var valuesdiff=values[i+1]-values[i];
            diffvector[i]=valuesdiff;
        }
        let x1=diffvector.filter(x => x==1).length;
        let x0=diffvector.filter(x => x==0).length;
        let xn=diffvector.filter(x => x==-1).length;
    
    
        if (values.length<31){
            window.alert("Please make a decision at each line");
            event.preventDefault();        
        }else if(!(xn==1 && x0==29)&&!(xn==0 && x0==30)&&!(x1==1 && x0==29) ){
            var act= confirm("You did switch multiple timesbetween the right option and the left option in the table! If you want to proceed, click 'Ok'. To reconsider your selection, click 'Cancel'")
            if (act == true) {
                var currentPageIndex=storedurl.indexOf(currentpage);
                window.location.href=storedurl[currentPageIndex+1];
            } else {
                var currentPageIndex=storedurl.indexOf(currentpage);
                window.location.href=storedurl[currentPageIndex];
            }
        }else if(x1==1 && x0==29){
            var act = confirm("You did switch from the left option and the right option in the table! If you want to proceed, click 'Ok'. To reconsider your selection, click 'Cancel'.")
            if (act == true) {
                var currentPageIndex=storedurl.indexOf(currentpage);
                window.location.href=storedurl[currentPageIndex+1];
            } else {
                var currentPageIndex=storedurl.indexOf(currentpage);
                window.location.href=storedurl[currentPageIndex];
            }
        }else{
        var currentPageIndex=storedurl.indexOf(currentpage);
        window.location.href=storedurl[currentPageIndex+1];
        }
    }else if(currentpage==="uY_81.html") {
        var storedurl=JSON.parse(localStorage.getItem("shuffledBUrls"));
        var values=radionumber();
        var diffvector=[];
        for (let i=0;i<40;i++) {        
            var valuesdiff=values[i+1]-values[i];
            diffvector[i]=valuesdiff;
        }
        let x1=diffvector.filter(x => x==1).length;
        let x0=diffvector.filter(x => x==0).length;
        let xn=diffvector.filter(x => x==-1).length;
    
    
        if (values.length<41){
            window.alert("Please make a decision at each line");
            event.preventDefault();        
        }else if(!(xn==1 && x0==39)&&!(xn==0 && x0==40)&&!(x1==1 && x0==39) ){
            var act= confirm("You did switch multiple timesbetween the right option and the left option in the table! If you want to proceed, click 'Ok'. To reconsider your selection, click 'Cancel'")
            if (act == true) {
                var currentPageIndex=storedurl.indexOf(currentpage);
                window.location.href=storedurl[currentPageIndex+1];
            } else {
                var currentPageIndex=storedurl.indexOf(currentpage);
                window.location.href=storedurl[currentPageIndex];
            }
        }else if(x1==1 && x0==39){
            var act = confirm("You did switch from the left option and the right option in the table! If you want to proceed, click 'Ok'. To reconsider your selection, click 'Cancel'.")
            if (act == true) {
                var currentPageIndex=storedurl.indexOf(currentpage);
                window.location.href=storedurl[currentPageIndex+1];
            } else {
                var currentPageIndex=storedurl.indexOf(currentpage);
                window.location.href=storedurl[currentPageIndex];
            }
        }else{
        var currentPageIndex=storedurl.indexOf(currentpage);
        window.location.href=storedurl[currentPageIndex+1];
        }
    }else{
        var storedurl=JSON.parse(localStorage.getItem("shuffledBUrls"));
        var currentPageIndex=storedurl.indexOf(currentpage);
        window.location.href=storedurl[currentPageIndex+1];
    }
}








  
  
  
  
  
            
    

