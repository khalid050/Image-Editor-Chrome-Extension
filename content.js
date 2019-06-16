// document.addEventListener('click',checkMousePos);
// function checkMousePos(e){
//     console.log(e.pageX,e.pageY)
// }

let images = document.querySelectorAll('img');

// add an id to each image
for(let i = 0;i<images.length;i++){
    images[i].setAttribute('id', i)
    images[i].setAttribute('class', 'todo')

}
// chrome.runtime.sendMessage({greeting:"hello"}),function(response){
//     console.log(response.msg)
// }


document.addEventListener('click', function (event) {

	// If the clicked element doesn't have the right selector, bail
	if (!event.target.matches('.todo')) return;

	// Don't follow the link
	event.preventDefault();
    chrome.storage.sync.set({'img':event.target.src},function(){
        console.log('i set in here xd ' + event.target.src);
    });
    
	// Log the clicked element in the console
    event.target.style.border = '3px solid red'
    //let savedImage  = event.target.src
    //document.querySelector(event.target)
//    document.querySelector('body').appendChild(event.target)


}, false);


let count = 0;
images.forEach(img => count++);
count = count>8 ? 8 : count;
let random = Math.floor(Math.random()*count-1);
console.log(count,random);
images.forEach(img =>{
    if(random===0){
        let width = img.clientWidth;
        let height = img.clientHeight;
        console.log(height,width);
        img.setAttribute('src','https://pbs.twimg.com/profile_images/1095301667266932736/32vTDY5R.jpg');
        img.setAttribute('width',width);
        img.setAttribute('height',height);
        //alert('IMAGE ARRAY DOT PHILTER');
        console.log('xd');
    }
    random-=1;
})
//gotta use background and send messages when new tab opens
// chrome.tabs.onCreated.addListener(displayMeme())
//setTimeout(displayMeme,0);
var startMemes = setInterval(displayMeme,8000);
var deleteMemes = setInterval(removeMeme,8001);
chrome.storage.sync.set({'start':startMemes,'end':deleteMemes},function(){
    console.log('i sent my memes');
});
function displayMeme(){
    let random = Math.floor(Math.random()*1254);
    let endpoint = 'https://api.memeload.us/v1/get?id='+random;

    fetch (endpoint)
    .then(response=> response.json())
    .then(converted => { console.log('i converted to js');
        let memeNew = document.createElement('img');
        memeNew.setAttribute('src',converted["image"]);
        memeNew.setAttribute('max-height','500px');
        memeNew.setAttribute('margin','auto');
        document.querySelector('body').prepend(memeNew);
});
}
function removeMeme(){
    let current = document.querySelector('img');
    current.parentNode.removeChild(current);
}

