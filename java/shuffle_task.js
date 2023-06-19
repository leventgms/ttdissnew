const tasks=["bte","nie","isri","uY"]

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

var shuffledTasks=shuffle(tasks);
localStorage.setItem("shuffledTasks",JSON.stringify(shuffledTasks))


