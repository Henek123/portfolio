const projects = [
  {
    title: 'D&D Spell List',
    img: '/img/spell-list.png',
    descShort: 'Lookup and save spells from Dungeons and Dragons 5E',
    descLong: 'Simple website that allows user to browse spells from D&D 5E. User can use filters and search bar to find spells. Website allows to create account and assign desired spells to account.',
    github: 'https://github.com/Henek123/dnd-spell-list/',
    live: 'https://henek123.github.io/dnd-spell-list/',
    technologies: ['JavaScript', 'HTML', 'CSS', 'React', 'GraphQL', 'D&D 5E API', 'Apollo Client', 'Firebase Authentication', 'Firebase Firestore']
  },
  {
    title: 'D&D Character Sheet',
    img: '/img/character-sheet.png',
    descShort: 'Save your character sheet in browser',
    descLong: 'Website based on official design of the Dungeons & Dragons character sheet. User can input thier data which is saved to local storage. Some things like ability bonus are automatically calculated from user input.',
    github: 'https://github.com/Henek123/dnd-character-sheet/',
    live: 'https://henek123.github.io/dnd-character-sheet/',
    technologies: ['JavaScript', 'HTML', 'CSS']
  },
  {
    title: 'Crypto',
    img: '/img/crypto.png',
    descShort: 'Lookup current prices of some cryptocurrencies',
    descLong: 'Website uses API to download price history of desired cryptocurrency. Chart is drawn using D3.js library.',
    github: 'https://github.com/Henek123/crypto/',
    live: 'https://henek123.github.io/crypto/',
    technologies: ['JavaScript', 'HTML', 'CSS', 'D3.js', 'Rest API']
  },
]
export default projects;