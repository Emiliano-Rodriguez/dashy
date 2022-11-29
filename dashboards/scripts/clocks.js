function showTime(){

    var currentDateNY = new Date(new Date().toLocaleString("en-US", {timeZone: "America/New_York"}));
    var currentDateTK = new Date(new Date().toLocaleString("en-US", {timeZone: "Asia/Tokyo"}));
    var currentDateMD = new Date(new Date().toLocaleString("en-US", {timeZone: "Europe/Madrid"}));
    var date = new Date();
    var session = "AM";
    var sessionNY = "AM";
    var sessionTK = "AM";
    var sessionMD = "AM";


//MD
    var hMD = currentDateMD.getHours(); // 0 - 23
    var mMD = currentDateMD.getMinutes(); // 0 - 59

    if(hMD == 0){
        hMD = 12;
    }

    if(hMD > 12){
        hMD = hMD - 12;
        sessionMD = "PM";
    }

    hMD = (hMD < 10) ? "0" + hMD : hMD;
    mMD = (mMD < 10) ? "0" + mMD : mMD;

    var timeMD = hMD + ":" + mMD + " " + sessionMD;
    document.getElementById("MyClockDisplayMD").innerText = timeMD;
    document.getElementById("MyClockDisplayMD").textContent = timeMD;

//TK
    var hTK = currentDateTK.getHours(); // 0 - 23
    var mTK = currentDateTK.getMinutes(); // 0 - 59

    if(hTK == 0){
        hTK = 12;
    }

    if(hTK > 12){
        hTK = hTK - 12;
        sessionTK = "PM";
    }

    hTK = (hTK < 10) ? "0" + hTK : hTK;
    mTK = (mTK < 10) ? "0" + mTK : mTK;

    var timeTK = hTK + ":" + mTK + " " + sessionTK;
    document.getElementById("MyClockDisplayTK").innerText = timeTK;
    document.getElementById("MyClockDisplayTK").textContent = timeTK;

//NY

    var hNY = currentDateNY.getHours(); // 0 - 23
    var mNY = currentDateNY.getMinutes(); // 0 - 59

    if(hNY == 0){
        hNY = 12;
    }

    if(hNY > 12){
        hNY = hNY - 12;
        sessionNY = "PM";
    }

    hNY = (hNY< 10) ? "0" + hNY : hNY;
    mNY = (mNY < 10) ? "0" + mNY : mNY;

    var timeNY = hNY + ":" + mNY + " " + sessionNY;
    document.getElementById("MyClockDisplayNY").innerText = timeNY;
    document.getElementById("MyClockDisplayNY").textContent = timeNY;

//USCENTRAL
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59


    if(h == 0){
        h = 12;
    }

    if(h > 12){
        h = h - 12;
        session = "PM";
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;

    var time = h + ":" + m + " " + session;
    document.getElementById("MyClockDisplaySA").innerText = time;
    document.getElementById("MyClockDisplaySA").textContent = time;

    setTimeout(showTime, 1000);
}

showTime();
