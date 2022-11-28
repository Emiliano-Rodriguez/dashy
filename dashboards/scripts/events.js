// This script.js pulls from a news api, then uses a for loop myLoop() with a time delay of 10 seconds and iterates through the list of news every 10 seconds.
//EmilianoRodriguez
//------------------
const nameOfMonth = new Intl.DateTimeFormat('en-US', {month: 'long'}).format(
new Date(),
);

month = nameOfMonth.toUpperCase();
//#list = [ "21 Back to the future day</br>22 National make a difference day</br>24 UN day</br>27 National american beer day</br>31 Haloween</br></br>"
//];
list = [ " NATIONAL PHILANTHROPY DAY - November 15</br> NATIONAL TAKE A HIKE DAY - November 17</br>Mickey Mouse Birthday - November 18</br>NATIONAL CARBONATED BEVERAGE WITH CAFFEINE DAY - November 19</br>NATIONAL PLAY MONOPOLY DAY - November 19</br>NATIONAL ABSURDITY DAY - November 20</br>NATIONAL ESPRESSO DAY - November 23</br>THANKSGIVING DAY - November 24</br>Turkey Free Thanksgiving - November 28</br>Black Friday - November 25</br>NATIONAL NATIVE AMERICAN HERITAGE DAY - November 25</br>Cyber Monday - November 28</br>National Meth Awareness Day - November 30</br>" ];



const events = async()=>{
var i = 1;
    function myLoop() {
      setTimeout(function() {
        console.log();
        const n1 = document.getElementById('events')
        const heading1 = `<p style="text-align:center;font-size: 25px; color: #16dbff; font-weight:bold;">UPCOMING EVENTS MONTH OF</br>${month}</p><p style="color:white;">${list}</p>`
        n1.innerHTML = heading1
        i++;
        if (i < 10) {
          if(i == 9){
            i = 1;
          }
          myLoop();
        }
      }, 10000)
    }
myLoop();
}
events();
