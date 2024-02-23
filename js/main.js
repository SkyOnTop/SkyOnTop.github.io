let sliderData={current:0,texts:[{title:"Reliable",desc:`Our account generator stands out for its exceptional reliability. It's been rigorously tested under various scenarios to ensure it functions smoothly at all times. Users can count on consistent performance and minimal downtime, making it a dependable tool for their needs.`},{title:"Speed",desc:`Speed is a key advantage of our generator. It's designed for efficiency, creating accounts swiftly without sacrificing accuracy or quality. This rapid performance saves valuable time for users, enabling them to focus on other important tasks.`},{title:"User-Friendly Interface",desc:`Our account generator features a user-friendly interface that is easy to navigate, even for those with minimal technical knowledge. This accessibility ensures that all users can efficiently utilize the tool without a steep learning curve.`},{title:"Regular Updates",desc:`We are committed to continual improvement. Regular updates are released for our generator, ensuring it stays ahead of the curve with the latest features and enhancements. This commitment to growth means the tool you're investing in today will only get better over time.`}]}
function switchSlider(){if(sliderData.current+1>3){$(".progress-active").remove()
sliderData.current=0}else{sliderData.current=sliderData.current+1;}
$(".slider-title").html(sliderData.texts[sliderData.current].title)
$(".slider-desc").html(sliderData.texts[sliderData.current].desc)
$(`.slider-title`).animate({opacity:'1'},250)
$(`.slider-desc`).animate({opacity:'1'},250,()=>{})
$(".progress-slider .progress:nth-child("+(sliderData.current+1)+")").html(`<div class="progress-active progress-id-${sliderData.current}"></div>`)
$(`.progress-id-${sliderData.current}`).animate({width:'100%'},5000,()=>{$(`.slider-title`).animate({opacity:'0'},250)
$(`.slider-desc`).animate({opacity:'0'},250,()=>{switchSlider()})})}
$(document).ready(()=>{$(".slider-title").html(sliderData.texts[sliderData.current].title)
$(".slider-desc").html(sliderData.texts[sliderData.current].desc)
$(".progress-slider .progress:nth-child("+(sliderData.current+1)+")").html(`<div class="progress-active progress-id-${sliderData.current}"></div>`)
$(`.progress-id-${sliderData.current}`).animate({width:'100%'},5000,()=>{$(`.slider-title`).animate({opacity:'0'},250)
$(`.slider-desc`).animate({opacity:'0'},250,()=>{switchSlider()})})})