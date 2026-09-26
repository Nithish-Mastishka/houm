/** Navbar dropdown content, taken from the Figma "Drop down" frames. `to` is a route slug. */
export interface NavLinkItem {
  label: string;
  to: string;
}

export interface NavColumn {
  heading?: string;
  links: NavLinkItem[];
}

export interface NavMenu {
  label: string;
  /** route group used to highlight the active menu */
  group: string;
  /** Product menu has a left category rail */
  categories?: { label: string; active?: boolean }[];
  columns: NavColumn[];
}

const l = (label: string, to: string): NavLinkItem => ({ label, to });

export const NAV_MENUS: NavMenu[] = [
  {
    label: 'Product',
    group: 'Product',
    categories: [{ label: 'Cameras', active: true }, { label: 'Smart Plugs' }],
    columns: [
      { links: [l('Smart Fixed Camera', 'smart-fixed-camera'), l('Dual Lens Camera', 'products'), l('Smart Bulb Camera', 'products'), l('Smart Wi-Fi P/T Indoor Camera', 'products'), l('Smart Wi-Fi PTZ Indoor Camera', 'products'), l('Low-Power Intelligent Wi-Fi Camera', 'products')] },
      { links: [l('Smart Battery Camera', 'products'), l('Doorbell', 'products'), l('Outdoor Lantern Camera', 'products'), l('Outdoor Floodlight Camera', 'products'), l('4G Outdoor Camera', 'products')] },
      { links: [l('Outdoor Bullet Camera', 'products'), l('Smart Wi-Fi Dome Camera', 'smart-wifi-dome-cameras'), l('4G Battery Outdoor Camera', 'products'), l('All Products', 'products'), l('Product Detail', 'product-detail')] },
    ],
  },
  {
    label: 'Marketing',
    group: 'Marketing',
    columns: [
      { heading: 'Channel Marketing', links: [l('Advertisement', 'mkt-advertisement'), l('Brochures', 'mkt-brochures'), l('Videos', 'mkt-videos'), l('Mailers', 'mkt-mailers'), l('Newsletter', 'mkt-newspaper')] },
      { heading: 'Corporate Marketing', links: [l('Corporate logo', 'mkt-corporate-logo'), l('Corporate profile', 'mkt-corporate-profile'), l('TV Commercials', 'mkt-tv-commercial'), l('Blog', 'mkt-blog')] },
      { heading: 'Others', links: [l('News', 'mkt-news'), l('Gallery', 'mkt-galleries'), l('Case Studies', 'mkt-case-studies')] },
    ],
  },
  {
    label: 'Solutions',
    group: 'Solutions',
    columns: [
      { heading: 'Industries', links: [l('Banking', 'sol-banking'), l('Campus', 'sol-campus'), l('Hospitality', 'sol-hospitality'), l('Industrial', 'sol-industrial')] },
      { heading: ' ', links: [l('Law Enforcement', 'sol-law-enforcement'), l('Oil & Gas', 'sol-oil-gas'), l('Real Estate', 'sol-real-estate'), l('Retail', 'sol-retail')] },
      { heading: ' ', links: [l('Safe City', 'sol-safe-city'), l('Smart Traffic', 'sol-smart-traffic'), l('Transport', 'sol-transport')] },
    ],
  },
  {
    label: 'Support',
    group: 'Support',
    columns: [
      { heading: 'Download', links: [l('Firmware', 'support-firmware'), l('Software', 'support-software'), l('Software Datasheet', 'support-software-datasheet'), l('User Manual/QIG', 'support-user-manual'), l('Certificate', 'support-certificate'), l('SIRA Certificate', 'support-sira-certificate')] },
      { heading: 'Tools', links: [l('Lens Calculator', 'support-lens-calculator'), l('HDD & Bandwidth Calculator', 'support-hdd-calculator'), l('CarKam Storage Calculator', 'support-carkam-calculator')] },
      { heading: 'Service', links: [l('Service', 'support-service'), l('Warranty Document', 'support-warranty'), l('Service Network', 'support-network')] },
      { heading: 'Others', links: [l('FAQs', 'support-faqs'), l('Technical Videos', 'support-technical-videos'), l('Compatibility List', 'support-compatibility'), l('Troubleshooting', 'support-troubleshooting'), l('Security Advisories', 'support-security-advisories')] },
    ],
  },
  {
    label: 'Training',
    group: 'Training',
    columns: [
      { heading: 'Training', links: [l('HOUM Webinars – Online Sessions', 'training-webinars'), l('HOUM Mission Tech Training Programme', 'training-programme'), l('HOUM Hands-on Workshops', 'training-workshops'), l('HOUM Partners’ Meet & Training (PMT)', 'training-ptm')] },
      { heading: 'Requests', links: [l('Training Request', 'training-request'), l('Training Feedback', 'training-feedback')] },
    ],
  },
  {
    label: 'Partner Connect',
    group: 'Partner Connect',
    columns: [
      { heading: 'Partner Connect', links: [l('Experience Center', 'partner-experience-center'), l('Galaxy Store', 'partner-galaxy-store'), l('Case Study', 'partner-case-study')] },
    ],
  },
];
