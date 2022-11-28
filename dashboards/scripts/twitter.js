const quotes_twitter = ["Trump","Trending on Twitter","Russia vs Ukraine"];

const twitter = async()=>{
var i = 1;
        const n1 = document.getElementById('twitter')
        const heading1 = `</br><p style=" text-align: center;position: relative;right:-12%; font-size: 25px; color: #00acee;bottom:-15%;  font-weight:bold;">${quotes_twitter[i]}</br></br>Trump</br>Andrew Tate</br>Russia</br>Ukraine</br>Qatar</br>UFC</br>Twitter Migration</br>Crypto</br>Inflation</br>Elon Musk</br></p>`
        n1.innerHTML = heading1
}
twitter();
