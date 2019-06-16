function waitAFuckingMinute(){
    chrome.storage.sync.get(['img'],function(result){
        document.querySelector('#plswork').src = result.img;
        console.log('epicly bad ' + result.img);
    })
    console.log('in popup');
}
setTimeout(waitAFuckingMinute,1000);


let inputVal = document.querySelector('#memer').value
$(document).ready(function(){
    $("#memer").on("input", function(){
        // Print entered value in a div box
        $("#meme-text").text($(this).val());    
    })
})

document.querySelector('#new-color').addEventListener('click', ()=>{
    document.querySelector('#meme-text').style.color = document.querySelector('#color').value
})


$(function () {
    $(":file").change(function () {
        if (this.files && this.files[0]) {
            var reader = new FileReader();
            reader.onload = imageIsLoaded;
            reader.readAsDataURL(this.files[0]);
        }
    });
});
//

fetch ('https://api.imgflip.com/get_memes')
.then(response=> response.json())
.then(converted => { console.log('i converted to js');
    document.querySelector('#plswork').setAttribute('src',converted["image"]);
    //console.log(converted);
   // parseMemes(converted);
});

function parseMemes(converted){
    let memeList = {};
    console.log('we parsing');
    console.log(converted);
    for(let meme of converted.data.memes){
        memeList['name'] = {};
        memeList['name']['url'] = meme['url'];
        memeList['name']['width'] = meme['width'];
        memeList['name']['height'] = meme['height'];
        memeList['name']['box_count'] = meme['box_count'];
        console.log('hi ' + memeList['name']);
    }
}
