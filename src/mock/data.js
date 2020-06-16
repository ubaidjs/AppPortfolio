import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: 'App Portfolio', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello 👋',
  name: '',
  subtitle: 'Checkout our projects here.',
  cta: '👇',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'greenhope.png',
    title: 'Greenhope',
    info:
      'Features: Appointment booking, Private video call, Private chat, Product information, Account management, Login with google and more',
    info2: '',
    url: 'https://play.google.com/store/apps/details?id=com.greenhopewellness',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'vehicle.png',
    title: 'Vehicle Bazar',
    info:
      'Features: Driver, User and Admin accounts management in single app, Booking, Google maps with location marker and direction, Online payment integeration',
    info2: '',
    url: 'https://www.dropbox.com/s/vwnr53fciq02ubv/VehicleBazar_v1.0.apk?dl=0',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'blueteam.png',
    title: 'Blueteam Serviceman',
    info:
      'Features: Booking management, Notifications, QR scanner, Profile and Edit profile, Calendar, Login and signup',
    info2: '',
    url: 'https://play.google.com/store/apps/details?id=com.laurelit.btserviceman',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'livestock.png',
    title: 'Livestock Loader',
    info:
      'App with 30+ screens with features including add loads and trailers info. Private and Group chat, Add friends, Create groups, profile management, social feeds of load and trailer and much more.',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'chatter.png',
    title: 'Chatter',
    info:
      'Simple chat application where user and signup and start chatting with friends. Uses firebase for storage and authentication. [In development]',
    info2: '',
    url: 'https://www.dropbox.com/s/fycdvnrp0a8ecao/Chatter_1.0.apk?dl=0',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Would you like to work with us?',
  btn: '',
  email: 'badnagarwala52@gmail.com',
  phone: '+918871550451'
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv1(),
      name: 'twitter',
      url: '',
    },
    {
      id: uuidv1(),
      name: 'codepen',
      url: '',
    },
    {
      id: uuidv1(),
      name: 'linkedin',
      url: '',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
