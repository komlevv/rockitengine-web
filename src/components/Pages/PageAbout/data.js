import Span from '../../Span/Span';

import imgWide1 from './images/about-main.jpg';
import imgWide1Thumb from './images/about-main-thumb.jpg';
import imgWide2 from './images/about-wide-1.jpg';
import imgWide2Thumb from './images/about-wide-1-thumb.jpg';
import imgWide3 from './images/about-wide-2.jpg';
import imgWide3Thumb from './images/about-wide-2-thumb.jpg';

export const data = {
  main: {
    h: (
      <>
        About <Span>us</Span>
      </>
    ),
    p:
      'RockitEngine is an international distributed collective of like-minded ' +
      'creative professionals. We have talent and experience that will ' +
      'make your project shine. Whatever the question, we’ve got the answer.',
  },
  ourValues: {
    h: 'Our Values',
    p: '',
    items: {
      a: {
        n: '01',
        h: 'All-Remote',
        p:
          'RockitEngine is an all-remote company. We are 100% remote, ' +
          'with no company-owned offices anywhere on the planet. All-remote ' +
          'means that each individual in our company is empowered to work ' +
          'and live where they are most fulfilled. By including the word “all” in ' +
          '“all-remote,” it makes clear that every team member is equal. ',
      },
      b: {
        n: '02',
        h: 'Fast',
        p:
          'We value our clients’ schedules and take pride ' +
          "in not missing deadlines. We're pragmatic, like to keep " +
          'things simple and say no to over-engineering or over-thinking. ' +
          "It's better to do 80% today than 100% tomorrow, and a quicker " +
          'way is usually a better way.',
      },
      c: {
        n: '03',
        h: 'Proactive',
        p:
          'Going the extra mile is what we do in our work. ' +
          'We are not focused on the “what” but on “why”. We always try ' +
          'to understand the reasoning behind our clients’ objectives and ' +
          'produce better solutions. We take the initiative, deliver more ' +
          'than expected, and push the boundaries each day.',
      },
      d: {
        n: '04',
        h: 'Transparent',
        p:
          'In an industry that requires ' +
          'a ton of communication between clients, agencies and ' +
          'vendors, it’s important not to let acronyms, “proprietary ' +
          'processes,” and buzzwords lead to confusion and time lost.' +
          'We stay transparent in what we do, so you stay aware ' +
          'of any difficulties the project faces way before the deadline, ' +
          'and able to act on it rapidly.',
      },
      e: {
        n: '05',
        h: 'Boutique',
        p:
          'Every decision about how to structure a company has some ' +
          'upsides and some downsides. We’re carefully managing our ' +
          'growth, which allows us to know each other personally. ' +
          'It also means we’ve had to sacrifice quantity over quality. ' +
          'Keeping our team small helps us avoid the unnecessary friction ' +
          'and make sure you get the attention you deserve.',
      },
    },
  },
  work: {
    h: 'How We Work',
    p: '',
    items: {
      a: {
        n: '01',
        h: 'Client Managed',
        p:
          'Client managed dedicated team is a perfect setup when ' +
          'your ongoing project demands extra resources. Your Project ' +
          'Manager and our team aligns to your processes and procedures, ' +
          'just like any other remote employees.',
      },
      b: {
        n: '02',
        h: 'RE Managed',
        p:
          'With RockitEngine Managed your dedicated team will be ' +
          'managed by our project managers for end-to-end coverage of ' +
          'your digital needs. You determine the preferred degree of monitoring ' +
          'and involvement, while our team does the rest.',
      },
    },
  },
  process: {
    h: 'Process',
    p: '',
    items: {
      a: {
        n: '01',
        h: 'Job Specification',
        p:
          'The goal of the specification is to understand your business ' +
          'goals and your clients’ needs in order to know the type ' +
          'of team necessary to achieve them.',
      },
      b: {
        n: '02',
        h: 'Candidates Selection',
        p:
          'We select candidates for the project. Our team members ' +
          'possess a wide array of skills, experiences and first-hand knowledge ' +
          'that match project requirements and your expectations. If our ' +
          'expertise doesn’t fully cover the project, we onboard additional team ' +
          'members from our prescreened list of quality talent..',
      },
      c: {
        n: '03',
        h: 'Daily Reports',
        p:
          'We move fast and build things. We update you with daily ' +
          'reports and work in progress snippets of what we’ve ' +
          'been working on and incorporate your input in a timely fashion.',
      },
    },
  },
  contact: {
    h: 'Reach out',
    p: 'If you have an idea, we have the solution! Let’s collaborate',
    p2: 'hello@rockitengine.com',
  },
  media: {
    imgWide: [imgWide1, imgWide2, imgWide3],
    imgSquare: [],
    imgSquareS: [],
    imgSquareSD: [],
    imgVertical: [],
    video: [],
    thumbs: [imgWide1Thumb, imgWide2Thumb, imgWide3Thumb],
  },
};
