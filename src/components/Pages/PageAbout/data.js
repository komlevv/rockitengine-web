import Span from '../../Span/Span';
import { URL_MEDIA } from '../../App/ROUTES';

export const data = {
  main: {
    h: (
      <>
        About <Span>us</Span>
      </>
    ),
    p:
      'RockitEngine is\u00A0an international distributed collective of\u00A0like-minded ' +
      'creative professionals. We have talent and\u00A0experience that will ' +
      'make your project shine. Whatever the\u00A0question, we’ve got the\u00A0answer.',
  },
  ourValues: {
    h: 'Our Values',
    p: '',
    items: {
      a: {
        n: '01',
        h: 'All-Remote',
        p:
          'RockitEngine is\u00A0an all-remote company. We are 100% remote, ' +
          'with no company-owned offices anywhere on\u00A0the\u00A0planet. All-remote ' +
          'means that each individual in\u00A0our company is\u00A0empowered to\u00A0work ' +
          'and live where they are most fulfilled. by\u00A0including the\u00A0word “all” in\u00A0' +
          '“all-remote,” it makes clear that every team member is\u00A0equal. ',
      },
      b: {
        n: '02',
        h: 'Fast',
        p:
          'We value our clients’ schedules and\u00A0take pride ' +
          "in not missing deadlines. We're pragmatic, like to\u00A0keep " +
          'things simple and\u00A0say no to\u00A0over-engineering or over-thinking. ' +
          "It's better to\u00A0do 80% today than 100% tomorrow, and\u00A0a quicker " +
          'way is\u00A0usually a\u00A0better way.',
      },
      c: {
        n: '03',
        h: 'Proactive',
        p:
          'Going the\u00A0extra mile is\u00A0what we do in\u00A0our work. ' +
          'We are not focused on\u00A0the\u00A0“what” but on\u00A0“why”. We always try ' +
          'to\u00A0understand the\u00A0reasoning behind our clients’ objectives and\u00A0' +
          'produce better solutions. We take the\u00A0initiative, deliver more ' +
          'than expected, and\u00A0push the\u00A0boundaries each day.',
      },
      d: {
        n: '04',
        h: 'Transparent',
        p:
          'In an\u00A0industry that requires ' +
          'a\u00A0ton of\u00A0communication between clients, agencies and\u00A0' +
          'vendors, it’s important not to\u00A0let acronyms, “proprietary ' +
          'processes,” and\u00A0buzzwords lead to\u00A0confusion and\u00A0time lost.' +
          'We stay transparent in\u00A0what we do, so you stay aware ' +
          'of\u00A0any difficulties the\u00A0project faces way before the\u00A0deadline, ' +
          'and able to\u00A0act on\u00A0it rapidly.',
      },
      e: {
        n: '05',
        h: 'Boutique',
        p:
          'Every decision about how to\u00A0structure a\u00A0company has some ' +
          'upsides and\u00A0some downsides. We’re carefully managing our ' +
          'growth, which allows us to\u00A0know each other personally. ' +
          'It also means we’ve had to\u00A0sacrifice quantity over quality. ' +
          'Keeping our team small helps us avoid the\u00A0unnecessary friction ' +
          'and make sure you get the\u00A0attention you deserve.',
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
          'Client managed dedicated team is\u00A0a\u00A0perfect setup when ' +
          'your ongoing project demands extra resources. Your Project ' +
          'Manager and\u00A0our team aligns to\u00A0your processes and\u00A0procedures, ' +
          'just like any other remote employees.',
      },
      b: {
        n: '02',
        h: 'RE Managed',
        p:
          'With RockitEngine Managed your dedicated team will be ' +
          'managed by\u00A0our project managers for\u00A0end-to-end coverage of\u00A0' +
          'your digital needs. You determine the\u00A0preferred degree of\u00A0monitoring ' +
          'and involvement, while our team does the\u00A0rest.',
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
          'The goal of\u00A0the\u00A0specification is\u00A0to\u00A0understand your business ' +
          'goals and\u00A0your clients’ needs in\u00A0order to\u00A0know the\u00A0type ' +
          'of\u00A0team necessary to\u00A0achieve them.',
      },
      b: {
        n: '02',
        h: 'Candidates Selection',
        p:
          'We select candidates for\u00A0the\u00A0project. Our team members ' +
          'possess a\u00A0wide array of\u00A0skills, experiences and\u00A0first-hand knowledge ' +
          'that match project requirements and\u00A0your expectations. If our ' +
          'expertise doesn’t fully cover the\u00A0project, we onboard additional team ' +
          'members from our prescreened list of\u00A0quality talent..',
      },
      c: {
        n: '03',
        h: 'Daily Reports',
        p:
          'We move fast and\u00A0build things. We update you with daily ' +
          'reports and\u00A0work in\u00A0progress snippets of\u00A0what we’ve ' +
          'been working on\u00A0and\u00A0incorporate your input in\u00A0a\u00A0timely fashion.',
      },
    },
  },
  contact: {
    h: 'Reach out',
    p: 'If you have an\u00A0idea, we have the\u00A0solution! Let’s collaborate',
    p2: 'hello@rockitengine.com',
  },
  media: {
    img: {
      wide: {
        i1: {
          src: `${URL_MEDIA}/about-main.jpg`,
          thumbnail: `${URL_MEDIA}/about-main-thumb.jpg`,
          width: 1360,
          height: 460,
        },
        i2: {
          src: `${URL_MEDIA}/about-wide-1.jpg`,
          thumbnail: `${URL_MEDIA}/about-wide-1-thumb.jpg`,
          width: 1360,
          height: 460,
        },
        i3: {
          src: `${URL_MEDIA}/about-wide-2.jpg`,
          thumbnail: `${URL_MEDIA}/about-wide-2-thumb.jpg`,
          width: 1360,
          height: 460,
        },
      },
    },
  },
};
