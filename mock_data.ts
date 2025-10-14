import { CheckinType, User } from "./types";

// DIFFERENT USERNAME LENGTHS FOR TESTING
// lucabear - 8
// lucabear10 - 10
// lucabear15lucab - 15
// lucabear20lucabear - 20

// 'i like the ocean and pokemon and cavetown' (48)
// 'i like the ocean and pokemon and cavetown and cakei like the ocean and pokemon and cavetown and cake' (100)

export const mock_user = {
  id: '1',
  email: 'lucabear@email.com',
  username: 'lucabear',
  hashedPassword: 'hashedpassword',
  bio: 'i like the ocean and pokemon and cavetown',
  pronouns: 'he/him',
  profilePicture: 'lucabear.jpg',
  profileTags: ['pokemon', 'cavetown', 'science', 'minecraft'],
  pinnedInfodumps: [
    {
      title: '#001 [ best cavetown albums ]',
      image: 'cavetown.gif'
    },
    {
      title: '#012 [ accuracy of minecraft marine life ]',
      image: 'dolphin.jpg'
    },
    {
      title: '#004 [ best pokemon water types ]',
      image: 'pokemonwatertypes.jpg'
    }
  ],
  fixations: [
    {
      title: 'cavetown',
      image: 'cavetown.gif',
      starred: true
    },
    {
      title: 'biology',
      image: 'biology.jpg',
      starred: false
    },
    {
      title: 'minecraft',
      image: 'dolphin.jpg',
      starred: true
    },
    {
      title: 'ocean',
      image: 'ocean.jpg',
      starred: true
    },
    {
      title: 'pokemon',
      image: 'pokemonwatertypes.jpg',
      starred: true
    },
    {
      title: 'stardew valley',
      image: 'stardew.png',
      starred: false
    }
  ],
  checkins: [
    {
      type: CheckinType.book,
      text: 'the trials of life'
    },
    {
      type: CheckinType.game,
      text: 'pokemon'
    },
    {
      type: CheckinType.music,
      text: 'cavetown'
    }
  ]
}