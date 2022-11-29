// This script.js pulls from a news api, then uses a for loop myLoop() with a time delay of 10 seconds and iterates through the list of news every 10 seconds.
//EmilianoRodriguez
//------------------
const nameOfMonth = new Intl.DateTimeFormat('en-US', {month: 'long'}).format(
new Date(),
);

month = nameOfMonth.toUpperCase();

if (month === "JANUARY"){
	list = [ "1 - New Years Day </br> 2 - National Buffet Day </br> 4 - National Spaghetti Day </br> 6 - National Technology Day </br> 7 - National Play Outside Day </br> 9 - National Clean Off Your Desk Day </br> 11 - National Human Trafficking Awareness Day </br> 12 - National Pharmacist Day </br> 13 - National Sticker Day </br> 14 - National Dress Up Your Pet Day </br> 15 - National Hat Day </br> 16 - National MLK Jr. Day </br> 18 - National Winnie the Pooh Day </br> 21 - National Hugging Day </br> 22 - National Celebration of Life Day </br> 23 - National Pie Day </br> 25 - National Opposite Day </br> 28 - National Kazoo Day </br> 31 - National Plan for a Vacation Day </br>" ];
}
else if (month === "FEBRUARY") {
        list = [ "1 - National Texas Day </br> 2 - National Groundhog Day </br> 4 - Ice Cream for Breakfast Day </br> 5 - National Shower with a Friend Day </br> 9 - National Pizza Day </br> 11 - National Inventors' Day </br> 13 - National Clean Out Your Computer Day </br> 14 - Valentine's Day </br> 17 - National Random Acts of Kindness Day </br> 18 - National Drink Wine Day </br> 22 - National Margarita Day </br> 26 - National Set a Good Example Day </br> 27 - National Retro Day" ];
}
else if (month === "MARCH") {
        list = [ "1 - National Pig Day </br> 2 - National Old Stuff Day </br> 3 - National Dress in Blue Day </br> 6 - National Oreo Cookie Day </br> 8 - International Women's Day </br> 10 - National Mario Day </br> 12 - Daylight Saving Time </br> 13 - National Napping Day </br> 14 - National Pi Day </br> 16 - National Panda Day </br> 17 - St. Patrick's Day </br> 20 - Spring Begins </br> 22 - National Goof Off Day </br> 24 - National Cheesesteak Day </br> 29 - National Vietnam War Veterans Day </br> 29 - National Doctors Day" ];
}
else if (month === "APRIL") {
        list = [ "1 - April Fool's Day </br> 3 - World Party Day </br> 6 - New Beer's Eve </br> 7 - National Beer Day </br> 9 - Easter </br> 11 - National Pet Day </br> 14 - Look Up at the Sky Day </br> 15 - National Titanic Remembrance Day </br> 16 - National Wear Your Pajamas to Work  Day </br> 18 - National Animal Crackers Day </br> 20 - Happy 4/20 ;) </br> 22 - National Earth Day </br> 28 - National Superhero Day </br>" ];
}
else if (month === "MAY") {
        list = [ "1 - May Day </br> 2 - National Teacher Appreciation Day </br> 4 - May the 4rce be with you Day </br> 5 - Cinco de Mayo </br> 6 - Kentucky Derby </br> 8 - Have a Coke Day </br> 10 - National Clean Up Your Room Day </br> 11 - National Twilight Zone Day </br> 13 - National Apple Pie Day </br> 14 - National Dance Like a Chicken Day </br> 16 - National Mimosa Day </br> 19 - National Bike to Work Day </br> 24 - Brother's Day </br> 30 - National Creativity Day </br> 31 - Autonomous Vehicle Day" ];
}
else if (month === "JUNE") {
        list = [ "1 - National Go Barefoot Day </br> 3 - National Egg Day </br> 4 - National Cancer Survivor's Day </br> 6 - D-Day </br> 8 - National Best Friends Day </br> 9 - National Donald Duck Day </br> 9 - National Movie Night </br> 14 - Army Birthday </br> 18 - Father's Day </br> 19 - Juneteenth </br> 21 - Summer Begins </br> 27 - National PTSD Awareness Day </br> 30 - National Meteor Watch Day" ];
}
else if (month === "JULY") {
        list = [ "1 - National Creative Ice Cream Flavors Day </br> 3 - National Compliment Your Mirror Day </br> 4 - Independence Day </br> 5 - National Workaholics Day </br> 6 - National Fried Chicken Day </br> 7 - National Dive Bar Day </br> 10 - National Pina Colada Day </br> 11 - National 7-Eleven Day </br> 14 - National 7-Eleven Day </br> 15 - National Give Something Away Day </br> 17 - National Lottery Day </br> 19 - National Daiquiri Day </br> 21 - National Be Someone Day </br> 22 - National Hammock Day </br> 23 - National Parent's Day  </br> 24 - National Amelia Earhart Day </br> 26 - National All or Nothing Day </br> 29 - National Chicken Wing Day" ];
}
else if (month === "AUGUST") {
        list = [ "1 - National Girlfriend Day </br> 3 - National IPA Day </br> 4 - International Beer Day </br> 8 Global Sleep Under The Stars Night </br> 12 - National Bowling Day </br> 13 - National Filet Mignon Day </br> 16 - National Roller Coaster Day </br> 21 National Senior Citizens Day </br> 26 - National Dog Day </br> 28 - National Bow Tie Day </br> 30 - National Beach Day" ];
}
else if (month === "SEPTEMBER") {
        list = [ "1 - National Food Bank Day </br> 2 - World Beard Day </br> 3 - National Cinema Day </br> 7 - National Salami Day </br> 8 - Star Trek Day </br> 11 - 9/11 </br> 12 - National Video Games Day </br> 13 - Uncle Sam Day </br> 14 - National Sober Day  </br> 15 - National Online Learning Day </br> 18 - Air Force Birthday </br> 19 - Talk Like a Pirate Day </br> 22 - Hobbit Day </br> 24 - National Singles Day </br> 26 - National Pancake Day </br> 27 - National Chocolate Milk Day </br> 29 - National Coffee Day </br> 30 - National Chewing Gum Day" ];
}
else if (month === "OCTOBER") {
        list = [ "1 - National Hair Day </br> 2 - National Custodial Worker's Recognition Day </br> 3 - National Boyfriend Day </br> 4 - National Vodka Day </br> 6 - National Mad Hatter Day </br> 7 - National Body Language Day </br> 8 - National Hero Day </br> 9 - National Leif Erikson Day </br> 13 - National No Bra Day </br> 14 - Birthday! </br> 17 - National Pasta Day </br> 20 - National Chicken and Waffles Day </br> 21 - Back To the Future Day </br> 22 - National Nut Day </br> 31 - Halloween Day" ];
}
else if (month === "NOVEMBER") {
        list = [ "2 - National Stress Awareness Day </br> 3 - National Sandwich Day </br> 4 - National Chicken Lady Day </br> 5 - National Donut Day </br> 6 - Daylight Saving Time Ends </br> 8 - National STEM/STEAM Day </br> 10 - Marine Corps Birthday </br> 11 - Veteran's Day </br> 14 - National Pickle Day </br> 16 - National Fast Food Day </br> 18 - Mickey Mouse Birthday </br> 19 - National Play Monopoly Day </br> 21 - National Stuffing Day </br> 24 - Thanksgiving Day  </br> 26 - National Cake Day </br> 28 - Cyber Monday </br> 30 - Stay Home Because You're Well Day" ];
}
else if (month === "DECEMBER") {
        list = [ "1 - Rosa Parks Day </br> 2 - National Bartender Day </br> 4 - National Sock Day </br> 5 - International Ninja Day </br> 6 - St. Nicholas Day </br> 8 - Pretend to Be a Time Traveler Day </br> 13 - National Guard Birthday </br> 14 - Monkey Day </br> 16 - Underdog Day </br> 17 - Wright Brothers Day </br> 18 - National Twin Day </br> 23 - Festivus </br> 24 - Christmas Eve </br> 25 - Christmas </br> 27 - National Fruitcake Day </br> 30 - Bacon Day </br> 31 - New Years Eve" ];
}
else {
        list = [ "LIST IS EMPTY - please check valid month" ];
}




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
