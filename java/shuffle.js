const instructionPages = {
    isri: "isri0.html",
    bte: "bte0.html",
    nie: "nie0.html",
    uY: "uY0.html"
  };

const pageUrls=["bte_10.html","bte_20.html","bte_30.html","nie_10.html","nie_20.html","nie_30.html", "isri_10.html", "isri_20.html", "isri_30.html", "uY_43.html","uY_67.html","uY_81.html","uY_86.html","uY_98.html"];
const pageBUrls=["ble3.html", "ble333l.html","ble333m.html", "ble32l.html", "ble32m.html", "ble3_3l.html", "ble3_3m.html", "ble_23l.html", "ble_23m.html", "ble_3.html", "ble_333l.html", "ble_333m.html"]  
var storedtasks=JSON.parse(localStorage.getItem("shuffledTasks"));

function shuffle(array){
    var currentIndex= array.length;
    var temporaryValue,randomIndex;
    while (currentIndex !==0){
        randomIndex = Math.floor(Math.random()*currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] =temporaryValue;
        }
    return array;
}


const shuffledUrls=[];
const shuffledBelief=shuffle(pageBUrls);

storedtasks.forEach(task => {
    const taskOrder=pageUrls.filter(url => url.includes(task));
    const shuffledTaskOrder= shuffle(taskOrder);
    if (taskOrder.length > 0) {
        const instructionPage = instructionPages[task];
        shuffledTaskOrder.unshift(instructionPage);
      } 
    shuffledUrls.push(...shuffledTaskOrder);
});

shuffledBelief.push(...shuffledUrls);

localStorage.setItem("shuffledUrls",JSON.stringify(shuffledUrls));
localStorage.setItem("shuffledBUrls",JSON.stringify(shuffledBelief));

