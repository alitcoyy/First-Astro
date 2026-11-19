// Site-wide details, taken from www.sdbagency.com.
export const SITE = {
  name: 'SDB Agency',
  legalName: 'SDB Agency Pte. Ltd.',
  description:
    'SDB Agency helps growth-stage SaaS teams design, build, and manage scalable website systems that improve conversions, support execution, and drive growth.',
  email: 'hello@sdbagency.com',
  address: '68 Circular Road, #02-01, 049422, Singapore',
  // Web3Forms access key: public by design (it's sent with every form submission).
  web3formsKey: '078d7541-bd4e-4dd4-ab63-01ae055e5fe8',
};

export const NAV = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/careers', label: 'Careers' },
  { href: '/contact', label: 'Contact' },
];

export const SOCIAL = [
  { href: 'https://www.linkedin.com/company/sdbagency', label: 'LinkedIn' },
  { href: 'https://www.instagram.com/sdbagency/', label: 'Instagram' },
  { href: 'https://dribbble.com/sdbagency', label: 'Dribbble' },
  { href: 'https://www.facebook.com/sdbagency/', label: 'Facebook' },
  { href: 'https://x.com/sdbagency', label: 'X' },
];

// `icon` is a 24×24 stroked SVG path, rendered with the global `.icon` class.
export const SERVICES = [
  { title: 'Website Strategy & UX', text: 'Clearer structure, stronger user journeys, and better foundations for a website that supports growth.', icon: 'M12 3a9 9 0 100 18 9 9 0 000-18zM15.5 8.5l-2 5-5 2 2-5 5-2z' },
  { title: 'Website Design & Revamps', text: 'High-performing websites designed to improve conversions, strengthen your brand, & support scale.', icon: 'M4 4h16v16H4zM4 9h16M9 9v11' },
  { title: 'WordPress & Webflow Development', text: 'Websites designed for scalability, offering your team flexibility and essential SEO for growth.', icon: 'M8 7l-5 5 5 5M16 7l5 5-5 5M14 4l-4 16' },
  { title: 'Conversion Optimization', text: 'Testing, analysis, and improvements focused on increasing conversions and getting more traffic.', icon: 'M3 17l6-6 4 4 8-8M15 7h6v6' },
  { title: 'Website Operations & Support', text: 'Ongoing improvements, updates, and hands-on support to keep your website moving on track.', icon: 'M12 3a9 9 0 100 18 9 9 0 000-18zM12 8a4 4 0 100 8 4 4 0 000-8zM5.6 5.6l3.6 3.6M14.8 14.8l3.6 3.6M18.4 5.6l-3.6 3.6M9.2 14.8l-3.6 3.6' },
  { title: 'Creative & Graphic Design', text: 'Design support for sales collateral, newsletters, ads, and other brand assets your team needs.', icon: 'M12 19l7-7 3 3-7 7-3-3zM18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5zM2 2l7.6 7.6M11 13a2 2 0 100-4 2 2 0 000 4z' },
];

export const initials = (name: string) => name.split(' ').map((w) => w[0]).join('');

export const STATS = [
  { value: '170+', label: 'Completed projects' },
  { value: '15', label: 'Years of experience' },
  { value: '99%', label: 'Customer satisfaction' },
];

export const CLIENTS = [
  'OfficeSpace Software', 'Vector', 'Revenue Analytics', 'Markup AI', 'Workzone', 'DocLib',
  'Datacoves', 'Keeping', 'Suggestion Ox', 'MyPlace', 'Brandchamp', 'Rankbreeze',
  'Avive', 'Easy Crypto', 'Acrolinx', 'Knackly',
];

export const TESTIMONIALS = [
  {
    quote: 'I would 100% recommend SDB again for another project in the future.',
    name: 'Cody Duval',
    role: 'Founder & CEO of Keeping, a TinySeed company',
  },
  {
    quote: 'I wholeheartedly endorse him as a partner for anyone in need of top-notch UX/UI design or WordPress development.',
    name: 'Andrew Berkowitz',
    role: 'Founder of Suggestion Ox, a TinySeed company',
  },
  {
    quote: 'Great work and service.',
    name: 'Janine Grainger',
    role: 'Co-Founder & CEO of Easy Crypto',
  },
];
