import BlogImage1 from '../../assets/image/agency/blog/blog-img1.png';
import BlogImage2 from '../../assets/image/agency/blog/blog-img2.png';
import BlogImage3 from '../../assets/image/agency/blog/blog-img3.png';
import Member1 from '../../assets/image/agency/team/member-1.jpg';
import Member2 from '../../assets/image/agency/team/member-2.jpg';
import Member3 from '../../assets/image/agency/team/member-3.jpg';
import Denny from '../../assets/image/agency/client/denny.png';
import Menny from '../../assets/image/agency/client/menny.png';

const data = {
  menuItems: [
    {
      label: 'Feature',
      path: '#featureSection',
      offset: '80'
    },
    {
      label: 'Work History',
      path: '#workHistorySection',
      offset: '100'
    },
    {
      label: 'Portfolio',
      path: '#blogSection',
      offset: '100'
    },
    {
      label: 'Quality feature',
      path: '#qualitySection',
      offset: '100'
    },
    {
      label: 'Testimonial',
      path: '#testimonialSection',
      offset: '100'
    },
    {
      label: 'Team Member',
      path: '#teamSection',
      offset: '67'
    },
    {
      label: 'FAQ',
      path: '#faqSection',
      offset: '100'
    }
  ],
  aboutus: [
    {
      id: 1,
      title: 'Amazing communication experience.',
      icon: 'flaticon-next'
    },
    {
      id: 2,
      title: 'Best designing experience with trending tools and sizes.',
      icon: 'flaticon-next'
    },
    {
      id: 3,
      title: 'Training and communication method remotely.',
      icon: 'flaticon-next'
    },
    {
      id: 4,
      title: '24/7 Hour onine supports.',
      icon: 'flaticon-next'
    }
  ],
  features: [
    {
      id: 1,
      icon: 'flaticon-code',
      title: 'Software Development',
      description:
        'Design and develop new software using the latest technologies'
    },
    {
      id: 2,
      icon: 'flaticon-pencil-case',
      title: 'Ui/UX Design',
      description:
        'We provide the best UI/UX Design by following the latest trends of the market .'
    },
    {
      id: 3,
      icon: 'flaticon-flask',
      title: 'Analytics',
      description:
        'Find the best offer to the customers at the right time '
    }
  ],
  qualityFeature: [
    {
      id: 1,
      icon: 'flaticon-code',
      title: 'Software Development',
      description:
        'Design and develop new software using the latest technologies'
    },
    {
      id: 2,
      icon: 'flaticon-pencil-case',
      title: 'Ui/UX Design',
      description:
        'We provide the best UI/UX Design by following the latest trends of the market .'
    },
    {
      id: 3,
      icon: 'flaticon-flask',
      title: 'Analytics',
      description:
        'Find the best offer to the customers at the right time '
    }
  ],
  blog: [
    {
      id: 1,
      title: 'Real home corporation',
      thumbnail_url: BlogImage1,
      date: 'November 02, 2018',
      postLink: '#1'
    },
    {
      id: 2,
      title: 'Sheltech developer ltd.',
      thumbnail_url: BlogImage2,
      date: 'November 12, 2018',
      postLink: '#2'
    },
    {
      id: 3,
      title: 'Alt architecture co.',
      thumbnail_url: BlogImage3,
      date: 'December 09, 2018',
      postLink: '#3'
    }
  ],
  teamMember: [
    {
      id: 1,
      name: 'Pablo Díaz',
      thumbnail_url: Member1,
      designation: 'Co Founder',
      social_links: [
        'flaticon-facebook-logo',
        'flaticon-twitter-logo-silhouette',
        'flaticon-instagram',
      ]
    },
    {
      id: 2,
      name: 'Adolfo Morales',
      thumbnail_url: Member2,
      designation: 'Co Founder',
      social_links: [
        'flaticon-facebook-logo',
        'flaticon-twitter-logo-silhouette',
        'flaticon-instagram',
      ]
    },
    {
      id: 3,
      name: 'Handdy Albuzz',
      thumbnail_url: Member3,
      designation: 'Article Writter',
      social_links: [
        'flaticon-dribble-logo',
        'flaticon-twitter-logo-silhouette',
        'flaticon-instagram',
        'flaticon-facebook-logo'
      ]
    }
  ],
  testimonial: [
    {
      id: 1,
      name: 'Denny Albuz',
      designation: 'CEO of Denish Co.',
      comment:
        'Best working experience  with this amazing team & in future, we want to work together',
      avatar_url: Denny
    },
    {
      id: 2,
      name: 'Roman Ul Oman',
      designation: 'Co-founder of QatarDiaries',
      comment:
        'Impressed with master class support of the team and really look forward for the future.',
      avatar_url: Menny
    },
    {
      id: 3,
      name: 'Caroleane Mina',
      designation: 'Director of Beauty-queen',
      comment:
        'I have bought more than 10 themes on ThemeForest, and this is the first one I review. Wow! Amazing React Theme',
      avatar_url: Denny
    },
    {
      id: 4,
      name: 'Roman Ul Oman',
      designation: 'Co-founder of QatarDiaries',
      comment:
        'Impressed with master class support of the team and really look forward for the future.',
      avatar_url: Menny
    }
  ],
  faq: [
    {
      id: 1,
      expend: true,
      title: 'How to contact with Customer Service?',
      description:
        'Our Customer Experience Team is available 7 days a week and we offer 2 ways to get in contact.Email and Chat . We try to reply quickly, so you need not to wait too long for a response!. '
    },
    {
      id: 2,
      title: 'App installation failed, how to update system information?',
      description:
        'Please read the documentation carefully . We also have some online  video tutorials regarding this issue . If the problem remains, Please Open a ticket in the support forum . '
    },
    {
      id: 3,
      title: 'Website reponse taking time, how to improve?',
      description:
        'At first, Please check your internet connection . We also have some online  video tutorials regarding this issue . If the problem remains, Please Open a ticket in the support forum .'
    },
    {
      id: 4,
      title: 'New update fixed all bug and issues?',
      description:
        'We are giving the update of this theme continuously . You will receive an email Notification when we push an update. Always try to be updated with us .'
    }
  ],
  menuWidget: [
    {
      id: 1,
      title: 'About Us',
      menuItems: [
        {
          id: 1,
          url: '#1',
          text: 'Support Center'
        },
        {
          id: 3,
          url: '#3',
          text: 'About Us'
        },
        {
          id: 4,
          url: '#4',
          text: 'Copyright'
        }
      ]
    },
    {
      id: 2,
      title: 'Our Information',
      menuItems: [
        {
          id: 2,
          url: '#2',
          text: 'Privacy Policy'
        },
        {
          id: 3,
          url: '#2',
          text: 'Terms & Conditions'
        }
      ]
    }
  ],
  social_profile: [
    {
      id: 1,
      icon: 'flaticon-facebook-logo',
      link: '#1'
    },
    {
      id: 2,
      icon: 'flaticon-twitter-logo-silhouette',
      link: '#2'
    },
    {
      id: 3,
      icon: 'flaticon-instagram',
      link: '#3'
    },
    {
      id: 4,
      icon: 'flaticon-tumblr-logo',
      link: '#4'
    },
    {
      id: 5,
      icon: 'flaticon-dribble-logo',
      link: '#5'
    }
  ]
};
export default data;
