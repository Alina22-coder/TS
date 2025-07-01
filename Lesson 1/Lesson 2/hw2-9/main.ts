// #KzrtqyQ
const schedule = prompt('Enter the day of the week:') ;

switch (schedule){
    case 'Monday':
        let monday :{Grammar:string, Reading:string, Vocabulary:string, Writing:string, Speaking:string} = {
            Grammar:'Present Simple: rules and examples',
            Reading:'"Harry Potter" Chapter 1',
            Vocabulary:'Daily routines and common verbs',
            Writing:'Write 5 sentences about your typical day',
            Speaking:'Talk about your daily routine'
        }
        console.log(monday);
        break;
    case 'Tuesday':
        let tuesday :{Listening:string,Grammar:string,Reading:string,Video:string,Discussion:string} = {
            Listening:'Audio story: “A Day in the Life”',
            Grammar:'Present Continuous: usage and structure',
            Reading:'Short story: “Tom’s Busy Day”',
            Video:'Learn new words through a cartoon',
            Discussion:'What do you usually do on weekends?'
        }
        console.log(tuesday);
        break;
    case 'Wednesday':
        let wednesday :{Vocabulary:string,Writing:string,Listening:string,Grammar:string,Culture:string}= {
            Vocabulary:'Food and drinks',
            Writing:'Describe your favorite meal',
            Listening:'Dialogues at a restaurant',
            Grammar:'Countable and uncountable nouns',
            Culture:'Traditional British meals'
        }
        console.log(wednesday);
        break;
    case 'Thursday':
        let thursday:{Reading:string,Speaking:string,Grammar:string,Project:string,Activity:string} = {
            Reading:'“How to Stay Healthy” (article)',
            Speaking:'What do you do to stay healthy?',
            Grammar:'Modal verbs: must, should, can',
            Project:'Create a healthy lifestyle poster',
            Activity:'Word games (crossword, word search)'
        }
        console.log(thursday);
        break;
    case 'Friday':
        let friday :{Test:string,Listening:string,Vocabulary:string,Writing:string,Review:string} = {
            Test:'Present Simple / Continuous, modal verbs',
            Listening:'“Teen Life in the UK”',
            Vocabulary:"Revision of the week's words",
            Writing:'Email to a friend about your week',
            Review:'Kahoot quiz or group Q&A'
        }
        console.log(friday);
        break;
    case 'Saturday':
        let saturday:{Speaking:string,Movie:string,Analysis:string,Practice:string} = {
            Speaking:'Introduce yourself and your hobbies',
            Movie:'“Paddington” (first 20 minutes)',
            Analysis:'“Imagine” by John Lennon (fill in the gaps)',
            Practice:'Choose your own topic and practice'
        }
        console.log(saturday);
        break;
    case 'Sunday':
        let sunday:{Review:string,Lesson:string,Planning:string} = {
            Review:'Grammar and vocabulary recap',
            Lesson:'British and American holidays',
            Planning:'Make your plan for next week'
        }
        console.log(sunday);
        break;
}