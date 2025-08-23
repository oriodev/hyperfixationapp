import { CheckinType } from "./types";

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
      image: 'cavetown.gif'
    },
    {
      title: 'biology',
      image: 'biology.jpg'
    },
    {
      title: 'minecraft',
      image: 'dolphin.jpg'
    },
    {
      title: 'ocean',
      image: 'ocean.jpg'
    },
    {
      title: 'pokemon',
      image: 'pokemonwatertypes.jpg'
    },
    {
      title: 'stardew valley',
      image: 'stardew.png'
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

