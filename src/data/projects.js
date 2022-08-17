// TODO Add a couple lines about each project
const data = [
    {
        title: 'Hangman Game (PHP/MySQL)',
        subtitle: 'CS 3750 Software Engineering II',
        image: '/images/projects/hangman2.JPG',
        link: 'https://denverjensen.epizy.com/hangman',
        date: '2022-06-20',
        desc:
            'A simple PHP hangman game for Software Engineering II (Weber State University).'
            + '\n\n Hangman.php is a standalone application that can be viewed at https://denverjensen.epizy.com/hangman.'
            + '\nThe application includes a full login system with salted and encrypted password authentication (SHA-256) and strong security features'
            + '\nSSL Certification is setup on the site, but my certificate may be expired at the time of viewing. '
            + 'Upon login, the game initializes and selects a word from a list of 10,000 pre-screened commonly used words in the english language between 5 and 9 letters. '
            + 'Users will enter letters to guess into the application to search for their hidden word. Users are given 12 "strikes" or "lives" before the game is ended'
            + '. When the game is over you are taken to a scoreboard. The scoreboard that is generated from the database is filtered to entries for word that had the same'
            + ' number of letters in their word. Only the top 10 results are displayed based on the number of lives remaining so you can play over and over to knock people off the scoreboards'
            + 'upon login, the application allows you to guess letters until you get 11 strikes.',

    },
    //   {
    //     title: 'Harvest',
    //     subtitle: 'Won 3rd. place in 2015 Techcrunch Disrupt SF Hackathon',
    //     link: 'https://devpost.com/software/harvest',
    //     image: '/images/projects/harvest.jpg',
    //     date: '2015-09-20',
    //     desc:
    //       'Won ~ $7000 in prizes for an advanced, low cost monitoring solution '
    //       + 'for crops. Harvest was designed to catch irrigation leaks, overwatering, '
    //       + 'and nutrient deficiencies at an affordable price for the developing world.',
    //   },
    //   {
    //     title: 'Space Potato',
    //     subtitle: 'A kickstarter funded potato powered weather balloon.',
    //     link: 'http://www.spacepotato.org',
    //     image: '/images/projects/spacepotato.jpg',
    //     date: '2015-06-28',
    //     desc:
    //       'Launched a potato battery powered weather balloon with two cameras '
    //       + 'and gps transponder. Resulting photos were published in a coffee table book. '
    //       + 'You can email me for a copy.',
    //   },
    //   {
    //     title: 'Cat Detector',
    //     subtitle: 'A convolutional neural network to classify cats! (and dogs)',
    //     image: '/images/projects/catdetector.jpg',
    //     date: '2015-05-15',
    //     desc:
    //       'Trained a convolutional neural network to classify between ~ 80 cats breeds. '
    //       + 'to continue hosting.',
    //   },
];

export default data;
