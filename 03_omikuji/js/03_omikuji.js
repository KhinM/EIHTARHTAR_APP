"use strict";
let n = "";
let nbefore = "";
window.addEventListener("DOMContentLoaded",
 function(){
    $("header").textillate({
        loop: false, // ループのオンオフ
        minDisplayTime: 2000, // テキストが置き換えられるまでの表示時間
        initialDelay: 2000, // 遅延時間
        autoStart: true, // アニメーションを自動的にスタート
        in: { // フェードインのエフェクトの詳細設定
        effect: "fadeInLeftBig", // エフェクトの名前(animate.css参照)
        delayScale: 1.5, // 遅延時間の指数
        delay: 50, // 文字ごとの遅延時間
        sync: false, // trueはアニメーションをすべての文字に同時に適用
        shuffle: true // trueは文字を順番にではなく、ランダムに
        }
        });
        // おみくじボタン(id="btn1") ボヤァと表示させる
    $(function(){
    ScrollReveal().reveal("#btn1", { duration: 9000 });
    });
    setTimeout(
        function(){
            let popMessage="いらっしゃ！おみくじ引いてって！";
            window.alert(popMessage);
            },
        "5000"
        );
},false
);
//let resultSound =["sound/omikuji_sound1.mp3","sound/omikuji_sound2.mp3","sound/omikuji_sound3.pm3","sound/omikuji_sound4.pm3","sound/omikuji_sound5.pm3","sound/omikuji_sound1.pm3"];
let soundEndflag ="0";
const btn1= document.getElementById("btn1");
const omikujiText=document.getElementById("omikujiText");
const omikujiTextImage=document.getElementById("omikujiTextImage");

btn1.addEventListener("click",
 function(){
    //  let n = Math.floor(Math.random()*3);
    //  switch (n) {
    //     case 0:
    //         btn1.textContent = "Very Happy!!";
    //         btn1.style.color = "#FF0000";
    //         btn1.style.fontSize = "40px";
    //         break;
    //     case 1:
    //         btn1.textContent = "Happy!";
    //         btn1.style.color = "#0000FF";
    //         btn1.style.fontSize= "30px";
    //         break;
    //     case 2:
    //         btn1.textContent = "UnHappy!";
    //         btn1.style.color = "#00FF00";
    //         btn1.style.fontSize = "20px";
    //         break;
    //  }
    if(soundEndflag === "1"){
        soundControl("end","");
    }
    
        let resultText = ["img/daikichi.png","img/chukichi.png","img/syokichi.png","img/suekichi.png","img/daikyo.png"];
        let resultMaxSpeed = [10,10,8,5,5];
        let resultMaxSize = [15,15,15,20,15];
        let resultImage = ["img/star.png","img/sakura_hanabira.png","img/butterfly1.png","img/snowflakes.png","img/zenitsu.png"];
        let resultSound = ["sound/omikuji_sound1.mp3","sound/omikuji_sound2.mp3","sound/omikuji_sound2.mp3","sound/omikuji_sound4.mp3","sound/omikuji_sound3.mp3"];
        
    /*let resultText =["大吉!!!!!","吉!!!!","中吉!!!","小吉!!","末吉!","凶..."];
    let resultColor =["#ff0000","#c71585","#ff1493","#ff69b4","#ff8c00","#1e90ff"];
    let resultFontSize =["90px","80px","70px","60px","50px","40px"];*/

    //let n =Math.floor(Math.random()*resultText.length);

    while(n==nbefore){
        n = Math.floor(Math.random() * resultText.length);
    }
    nbefore = n;


    omikujiTextImage.src=resultText[n];
    omikujiTextImage.classList.add("omikujiPaper");
    omikujiTextImage.addEventListener("animationend",
    function(){
        omikujiTextImage.classList.remove("omikujiPaper");

    },false
    );
    
   /*omikujiText.textContent = resultText[n];
    omikujiText.style.color = resultColor[n];
    omikujiText.style.fontSize = resultFontSize[n];*/


    
    
    //snowfall stop
    w_sound =resultSound[n];
    soundControl("start",w_sound);
    soundEndflag ="1";
   $(document).snowfall("clear");
   setTimeout(
    function(){
        $(document).ready(function(){
            $(document).snowfall({
                maxSpeed : resultMaxSpeed[n],
                minSpeed : 1,
                maxSize : resultMaxSize[n],
                minSize :1,
                image : resultImage[n]
            });
        });
    },
    "200"
);

   // jQueryのsnowfall
   /*$(document).ready(function(){
   $(document).snowfall({
   maxSpeed : resultMaxSpeed[n], // 最大速度
   minSpeed : 1, // 最小速度
   maxSize :  resultMaxSiz[n], // 最大サイズ
   minSize : 1, // 最小サイズ
   image : resultImage[n]

});
});*/
 
    
},false
);
let w_sound
let music
 function soundControl(status,w_sound){
     if(status ==="start"){
         music=new Audio(w_sound);
         music.currentTime=0;
         music.play();
     }else if(status ==="end"){
         music.pause();
         music.currentTime=0;
     }
     }
 

