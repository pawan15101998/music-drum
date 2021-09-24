
window.addEventListener('keydown', function(e){
   const audio =   document.querySelector( `audio[data-key = "${e.keyCode}"]`)
   const key =   document.querySelector( `.key[data-key = "${e.keyCode}"]`)
   if(!audio){}
   audio.currentTime = 0;
   audio.play()
   key.classList.add('playing')
   setTimeout(function(){
         key.classList.remove('playing')
   }, 100)
})
      








































































// var small = document.querySelector('small');
// var main = document.querySelector('.main');
// var h1 = document.querySelector('#h')
// var audio = document.querySelectorAll("audio")




// window.addEventListener("keypress", function(det){
//             if(det.key ==='a'){
//                   audio[0].currentTime = 0;
//                   audio[0].play()
//             }
//             else if(det.key==='b'){
//                   audio[1].currentTime = 0;
//                   audio[1].play()
//             }
//             else if(det.key==='c'){
//                   audio[2].currentTime = 0;
//                   audio[2].play()
//             }
//             else if(det.key==='d'){
//                   audio[3].currentTime = 0;
//                   audio[3].play()
//             }
//             else if(det.key==='e'){
//                   audio[4].currentTime = 0;
//                   audio[4].play()
//             }
//             else if(det.key==='f'){
//                   audio[5].currentTime = 0;
//                   audio[5].play()
//             }
//             else if(det.key==='g'){
//                   audio[6].currentTime = 0;
//                   audio[6].play()
//             }
//             else if(det.key==='h'){
//                   audio[7].currentTime = 0;
//                   audio[7].play()
//             }
//             else if(det.keyCode===32){
//                   audio[8].currentTime = 0;
//                   audio[8].play()
//             }     
//       })