import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import {  NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { LightgalleryModule } from 'lightgallery/angular';

interface blogs {
  src: string;
  alt: string;
  link: string;
}

interface SocialLink {
  icon: string;
  label: string;
  link: any[];
}
interface Comment {
  avatar: string;
  name: string;
  date: string;
  text: string;
  likes?: number;
  extraclass?:string;
}

@Component({
  selector: 'single-blog-detail',
  standalone: true,
  imports: [LightgalleryModule, NgbDropdownModule,RouterLink],
  templateUrl: './blog-detail.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './blog-detail.scss',
})
export class BlogDetail {
  blog: blogs[] = [
    {
      src: 'assets/images/blog/4by4/01.jpg',
      alt: 'blog-img',
      link: 'assets/images/blog/4by4/01.jpg',
    },
    {
      src: 'assets/images/blog/4by4/03.jpg',
      alt: 'blog-img',
      link: 'assets/images/blog/4by4/03.jpg',
    },
    {
      src: 'assets/images/blog/4by4/04.jpg',
      alt: 'blog-img',
      link: 'assets/images/blog/4by4/04.jpg',
    },
  ];

  socialLinks: SocialLink[] = [
    {
      icon: 'bi bi-facebook fa-fw me-2',
      label: 'Facebook',
      link: [],
    },
    {
      icon: 'bi bi-instagram fa-fw me-2',
      label: 'Instagram',
      link: [],
    },
    {
      icon: 'bi bi-whatsapp fa-fw me-2',
      label: 'Whatsapp',
      link: [],
    },
    {
      icon: 'bi bi-copy fa-fw me-2',
      label: 'Copy link',
      link: [],
    },
  ];

  popularTags = [
    'blog',
    'business',
    'bootstrap',
    'data science',
    'deep learning',
  ];

  comments: Comment[] = [
    {
      avatar: 'assets/images/avatar/01.jpg',
      name: 'Frances Guerrero',
      date: 'June 11, 2021 at 6:01 am',
      text: `Satisfied conveying a dependent contented he gentleman agreeable do be. 
           Warrant private blushes removed an in equally totally if. Delivered dejection necessary objection do Mr prevailed. 
           Mr feeling does chiefly cordial in do.`,
      likes: 1,
    },
    {
      avatar: 'assets/images/avatar/06.jpg',
      name: 'Allen Smith',
      date: 'June 12, 2021 at 7:30 am',
      text: 'Water timed folly right aware if oh truth.',
      extraclass:'ps-3 ps-md-4'
    },
    {
      avatar: 'assets/images/avatar/04.jpg',
      name: 'Judy Nguyen',
      date: 'June 18, 2021 at 11:55 am',
      text: `Fulfilled direction use continual set him propriety continued. 
           Saw met applauded favorite deficient engrossed concealed and her. 
           Concluded boy perpetual old supposing. Farther-related bed and passage comfort civilly.`,
    },
  ];

  article = {
  steps: [
    {
      title: 'Step 1: Shifting Perspective: From Lack to Abundance',
      paragraph: `Gratitude has the unique ability to shift our perspective from focusing on what we lack to appreciating what we have. Often, we get caught up in the pursuit of material possessions or achievements, believing that they will bring us happiness. However, true abundance is found in appreciating the present moment and recognizing the blessings that already exist in our lives. Cultivating gratitude allows us to break free from the cycle of perpetual longing and embrace the abundance that surrounds us.`
    },
    {
      title: 'Step 2: The Ripple Effect of Gratitude',
      list: [
        'Shift in Perspective: Gratitude allows us to shift our perspective from focusing on what we lack to appreciating what we have.',
        'By recognizing and acknowledging the blessings in our lives, we invite a sense of abundance and contentment.',
        'Scientific research has demonstrated that gratitude positively impacts our mental and physical health.',
        [
          'It allows us to focus on the positive aspects.',
          'It enables us to reframe obstacles as opportunities.',
          'The power of gratitude extends beyond ourselves.'
        ],
        'Enables us to reframe obstacles as opportunities for growth and learning. By embracing a mindset of gratitude.',
        'Recognizing and acknowledging the blessings in our lives, we invite a sense of abundance and contentment.'
      ]
    }
  ],
  quote: {
    text: `Fulfilled direction use continual set him propriety continued. Farther-related bed and passage comfort civilly. Concluded boy perpetual old supposing.`,
    author: 'Albert Schweitzer'
  },
  popularTags: ['Motivation', 'Mindset', 'Inspiration', 'Success', 'Life'],
  feedback: {
    question: 'Was this article helpful?',
    stats: '25 out of 78 found this helpful'
  }
};

  setting = {
    selector: 'a',
  };
}
