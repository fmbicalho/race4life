const testimonials = [
    {
      title: 'Amanda Beard',
      picture: '../pics/testimonials/amanda.jpeg',
      sport: 'Swimming',
      text: '“I would do interviews and have this happy face and talk about how everything is great and I’m having so much fun, but then I would go home and be the exact opposite person. I would be miserable. I would hate myself. I would have this negative loop running through my head.”',
    },
    {
      title: 'Michael Phelps',
      picture: '../pics/testimonials/michael.jpeg',
      sport: 'Swimming',
      text: '“Throughout my career, I had a team of people around me that were paying attention to my physical health. If I needed to get stronger, there were 10 people finding out ways for me to get stronger. But mentally that wasn\’t the case. "My depression and my anxiety is never going to just disappear. I\’m never going to be able to snap my fingers and say \‘Go away. Leave me alone.\’ It makes me. It is a part of me. It\’s always going to be a part of me."',
    },
    {
      title: 'Missy Franklin',
      picture: '../pics/testimonials/missy.jpeg',
      sport: 'Swimming',
      text: '“I feel so fortunate because I had so many incredible athletes pave the way for me. I had Michael Phelps and Allison Schmitt, who were two of my really good friends and teammates for so long; both really openly talk of their depression and what they went through. I just think we need so much more of that.”',
    },
    {
      title: 'Serena Williams',
      picture: '../pics/testimonials/serena.png',
      sport: 'Tennis',
      text: '"Mental fitness for me is just really learning to shut down. I did this years ago before mental health was a topic among everyone’s mind. It was more just like, alright, I’m shutting myself down today. Subconsciously it was something I’ve always done. And now that I know that it’s so important to just put yourself first, especially mentally, I always have shut down moments. I have serious boundaries and I don’t let anyone cross those boundaries. For me, it’s so important to make sure, every day, I have a period of, like… it’s so bad because I really don’t do anything for me; I’m terrible at that! And I’ve said it time and time again – I’m working on it. But more or less, at least prioritising what I need to do. And then when I’m turned off, I’m turned off."',
    },
    {
      title: 'Simone Biles',
      picture: '../pics/testimonials/simone.avif',
      sport: 'Artistic Gymnastic',
      text: '“So, to kind of be put at the forefront, it’s like… I’m still going through my own thing. So how am I supposed to teach people, hey, like, you should do this or this, but everybody goes through that process differently and there are different methods that work for each individual person.” “We think we can do it on our own, but sometimes we just can’t. So, use every outlet given to you.”',
    }
  ];

  async function getTestemonial(index) {
    return testimonials[index]
  };
  
  async function getTestemonials() {
    return testimonials;
  }
  
  export default { getTestemonial, getTestemonials };