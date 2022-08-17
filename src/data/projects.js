/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
// TODO Add a couple lines about each project
const data = [
    {
        title: 'Hangman Game (PHP/MySQL)',
        subtitle: 'CS 3750 Software Engineering II',
        image: '/images/projects/hangman2.JPG',
        link: 'https://denverjensen.epizy.com/hangman',
		link2: 'https://github.com/DenverJensen/hangman',
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
            + '\n This was an individual assignment and I was the sole contributor to all the code in the project.',

    },
      {
        title: 'Banking Enterprise App (React/.NET/MySQL)',
        subtitle: 'CS 3750 Software Engineering II',
        image: '/images/projects/bank.jpg',
        date: '2022-07-01',
        desc:
          'Full-Stack banking application to track account deposits, withdraws and transfers between accounts. '
          + 'The front end of the application uses React.js technology to dynamically render as account information changes. '
		  + 'A fully encrypted authentication system with custom salt for each user is included. Each user also has the option to view all transactions for any selected account. '
          + 'Axios is used to access data in the application at specific URLS provded by the back end. The back end was created using Entity Framework for .NET. '
		  + 'All data is stored in a MySQL Database. This was a group project for our software engineering class. I was in charge of the front end design and implimentation.'
		  + 'All user inputs and selections are sytlized using Material UI component library and uniform throughout the application',
      },
      {
        title: 'Investing Game (React/.NET/SignalR)',
        subtitle: 'A game to practice trading stocks for a company of your choice',
        image: '/images/projects/spacepotato.jpg',
        date: '2022-07-20',
        desc:
          'Upon launch, the investment balance is set to $10,000 and the user is requested to enter a stock ticker so that stock data can be queried. '
          + 'daily stock prices are pulled for the entered stock beginning on a random day at least 6 months in the past, but not more than one year. '
		  + 'users then progress through each day of stock data and are given the option to buy, sell or hold any amount of stock up to their available investment balance',
      },
      {
        title: 'Nerdle (React/.NET/SignalR)',
        subtitle: 'A 2-player knock off of the classic game Boggle',
        image: '/images/projects/catdetector.jpg',
        date: '2022-07-30',
        desc:
          'A 2-person traditional remake of boggle with a simple, clean design to improve mobile viewing. '
          + 'The application uses SignalR technology to accomplish asyncronys data calls so both players receive the same board and timer'
		  + '',
      },
];

export default data;
