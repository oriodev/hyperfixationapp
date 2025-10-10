import { CheckinType } from "./types";

// DIFFERENT USERNAME LENGTHS FOR TESTING
// lucabear - 8
// lucabear10 - 10
// lucabear15lucab - 15
// lucabear20lucabear - 20

// 'i like the ocean and pokemon and cavetown' (48)
// 'i like the ocean and pokemon and cavetown and cakei like the ocean and pokemon and cavetown and cake' (100)

export const user = {
  username: 'lucabear',
  bio: 'i like the ocean and pokemon and cavetown',
  profile_picture: 'lucabear.jpg',
  profile_tags: ['pokemon', 'cavetown', 'science', 'minecraft'],
  pinned_infodumps: [
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
  checkin: [
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

