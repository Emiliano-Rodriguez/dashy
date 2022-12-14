const quotes = ["If you want to achieve greatness stop asking for permission. ~Anonymous", "Things work out best for those who make the best of how things work out. ~John Wooden", "To live a creative life, we must lose our fear of being wrong. ~Anonymous", "If you are not willing to risk the usual you will have to settle for the ordinary. ~Jim Rohn", "Trust because you are willing to accept the risk, not because it's safe or certain. ~Anonymous", "All our dreams can come true if we have the courage to pursue them. ~Walt Disney", "Good things come to people who wait, but better things come to those who go out and get them. ~Anonymous", "If you do what you always did, you will get what you always got. ~Anonymous", "Success is walking from failure to failure with no loss of enthusiasm. ~Winston Churchill", "Just when the caterpillar thought the world was ending, he turned into a butterfly. ~Proverb", "Successful entrepreneurs are givers and not takers of positive energy. ~Anonymous", "Whenever you see a successful person you only see the public glories, never the private sacrifices to reach them. ~Vaibhav Shah", "Opportunities don't happen, you create them. ~Chris Grosser", "Try not to become a person of success, but rather try to become a person of value. ~Albert Einstein", "Great minds discuss ideas; average minds discuss events; small minds discuss people. ~Eleanor Roosevelt", "I have not failed. I've just found 10,000 ways that won't work. ~Thomas A. Edison", "If you don't value your time, neither will others. Stop giving away your time and talents- start charging for it. ~Kim Garst", "A successful man is one who can lay a firm foundation with the bricks others have thrown at him. ~David Brinkley", "No one can make you feel inferior without your consent. ~Eleanor Roosevelt", "The whole secret of a successful life is to find out what is one's destiny to do, and then do it. ~Henry Ford", "If you're going through hell keep going. ~Winston Churchill", "The ones who are crazy enough to think they can change the world, are the ones that do. ~Anonymous", "Don't raise your voice, improve your argument. ~Anonymous", "What seems to us as bitter trials are often blessings in disguise.~ Oscar Wilde", "The meaning of life is to find your gift. The purpose of life is to give it away. ~Anonymous", "The distance between insanity and genius is measured only by success. ~Bruce Feirstein", "When you stop chasing the wrong things you give the right things a chance to catch you. ~Lolly Daskal", "Don't be afraid to give up the good to go for the great. ~John D. Rockefeller", "No masterpiece was ever created by a lazy artist.~ Anonymous", "Happiness is a butterfly, which when pursued, is always beyond your grasp"
];

const motivation = async()=>{
var i = 1;
    function myLoop() {
      setTimeout(function() {
        console.log(quotes[i]);
        const n1 = document.getElementById('inspo')
        const heading1 = `</br></br><p style="position: absolute; top:15%;padding-right:2%; font-size: 25px; color: #FF7A59; line-height: 80%; font-weight:bold;">${quotes[i]}</p>`
        n1.innerHTML = heading1
        i++;
        if (i < 31) {
          if(i == 30){
            i = 1;
          }
          myLoop();
        }
      }, 7000)
    }
myLoop();
}
motivation();
