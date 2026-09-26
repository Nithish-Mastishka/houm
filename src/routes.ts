import { lazy, type ComponentType, type LazyExoticComponent } from 'react';

export type RouteGroup = 'Home' | 'Company' | 'Product' | 'Solutions' | 'Partner Connect' | 'Support' | 'Training' | 'Marketing' | 'Account';

export interface SiteRoute {
  slug: string;
  path: string;
  title: string;
  group: RouteGroup;
  /** false = full-screen page without the top bar and navbar */
  chrome: boolean;
  /** Figma frame the page was built from */
  figmaNode: string;
  component: LazyExoticComponent<ComponentType>;
}

export const routes: SiteRoute[] = [
  { slug: 'home', path: '/', title: "Home", group: 'Home', chrome: true, figmaNode: '1:10902', component: lazy(() => import('./pages/home')) },
  { slug: 'about', path: '/about', title: "About Us", group: 'Company', chrome: true, figmaNode: '1:11471', component: lazy(() => import('./pages/about')) },
  { slug: 'working-with-us', path: '/working-with-us', title: "Working With Us", group: 'Company', chrome: true, figmaNode: '1:11047', component: lazy(() => import('./pages/working-with-us')) },
  { slug: 'career', path: '/career', title: "Careers", group: 'Company', chrome: true, figmaNode: '1:11704', component: lazy(() => import('./pages/career')) },
  { slug: 'live-camera', path: '/live-camera', title: "Live Camera", group: 'Company', chrome: false, figmaNode: '1:11239', component: lazy(() => import('./pages/live-camera')) },
  { slug: 'contact', path: '/contact', title: "Contact Us", group: 'Company', chrome: true, figmaNode: '1:251', component: lazy(() => import('./pages/contact')) },
  { slug: 'products', path: '/products', title: "All Products", group: 'Product', chrome: true, figmaNode: '1:10348', component: lazy(() => import('./pages/products')) },
  { slug: 'smart-fixed-camera', path: '/smart-fixed-camera', title: "Smart Fixed Camera", group: 'Product', chrome: true, figmaNode: '1:10392', component: lazy(() => import('./pages/smart-fixed-camera')) },
  { slug: 'smart-wifi-dome-cameras', path: '/smart-wifi-dome-cameras', title: "Smart Wi-Fi Dome Cameras", group: 'Product', chrome: true, figmaNode: '1:10493', component: lazy(() => import('./pages/smart-wifi-dome-cameras')) },
  { slug: 'product-detail', path: '/product-detail', title: "Product Detail", group: 'Product', chrome: true, figmaNode: '1:10591', component: lazy(() => import('./pages/product-detail')) },
  { slug: 'sol-banking', path: '/sol-banking', title: "Banking", group: 'Solutions', chrome: true, figmaNode: '1:564', component: lazy(() => import('./pages/sol-banking')) },
  { slug: 'sol-campus', path: '/sol-campus', title: "Campus", group: 'Solutions', chrome: true, figmaNode: '1:812', component: lazy(() => import('./pages/sol-campus')) },
  { slug: 'sol-hospitality', path: '/sol-hospitality', title: "Hospitality", group: 'Solutions', chrome: true, figmaNode: '1:2127', component: lazy(() => import('./pages/sol-hospitality')) },
  { slug: 'sol-industrial', path: '/sol-industrial', title: "Industrial", group: 'Solutions', chrome: true, figmaNode: '1:1926', component: lazy(() => import('./pages/sol-industrial')) },
  { slug: 'sol-law-enforcement', path: '/sol-law-enforcement', title: "Law Enforcement", group: 'Solutions', chrome: true, figmaNode: '1:1205', component: lazy(() => import('./pages/sol-law-enforcement')) },
  { slug: 'sol-oil-gas', path: '/sol-oil-gas', title: "Oil & Gas", group: 'Solutions', chrome: true, figmaNode: '1:1562', component: lazy(() => import('./pages/sol-oil-gas')) },
  { slug: 'sol-real-estate', path: '/sol-real-estate', title: "Real Estate", group: 'Solutions', chrome: true, figmaNode: '1:375', component: lazy(() => import('./pages/sol-real-estate')) },
  { slug: 'sol-retail', path: '/sol-retail', title: "Retail", group: 'Solutions', chrome: true, figmaNode: '1:2453', component: lazy(() => import('./pages/sol-retail')) },
  { slug: 'sol-safe-city', path: '/sol-safe-city', title: "Safe City", group: 'Solutions', chrome: true, figmaNode: '1:2966', component: lazy(() => import('./pages/sol-safe-city')) },
  { slug: 'sol-smart-traffic', path: '/sol-smart-traffic', title: "Smart Traffic", group: 'Solutions', chrome: true, figmaNode: '1:3276', component: lazy(() => import('./pages/sol-smart-traffic')) },
  { slug: 'sol-transport', path: '/sol-transport', title: "Transport", group: 'Solutions', chrome: true, figmaNode: '1:3601', component: lazy(() => import('./pages/sol-transport')) },
  { slug: 'partner-experience-center', path: '/partner-experience-center', title: "Experience Center", group: 'Partner Connect', chrome: true, figmaNode: '1:4107', component: lazy(() => import('./pages/partner-experience-center')) },
  { slug: 'partner-galaxy-store', path: '/partner-galaxy-store', title: "Galaxy Store", group: 'Partner Connect', chrome: true, figmaNode: '1:4169', component: lazy(() => import('./pages/partner-galaxy-store')) },
  { slug: 'partner-case-study', path: '/partner-case-study', title: "Detailed Case Study", group: 'Partner Connect', chrome: true, figmaNode: '1:4235', component: lazy(() => import('./pages/partner-case-study')) },
  { slug: 'support-firmware', path: '/support-firmware', title: "Firmware", group: 'Support', chrome: true, figmaNode: '1:4797', component: lazy(() => import('./pages/support-firmware')) },
  { slug: 'support-firmware-extended', path: '/support-firmware-extended', title: "Firmware (Extended)", group: 'Support', chrome: true, figmaNode: '1:6302', component: lazy(() => import('./pages/support-firmware-extended')) },
  { slug: 'support-software', path: '/support-software', title: "Software", group: 'Support', chrome: true, figmaNode: '1:5278', component: lazy(() => import('./pages/support-software')) },
  { slug: 'support-software-extended', path: '/support-software-extended', title: "Software (Extended)", group: 'Support', chrome: true, figmaNode: '1:6473', component: lazy(() => import('./pages/support-software-extended')) },
  { slug: 'support-software-datasheet', path: '/support-software-datasheet', title: "Software Datasheet", group: 'Support', chrome: true, figmaNode: '1:5713', component: lazy(() => import('./pages/support-software-datasheet')) },
  { slug: 'support-user-manual', path: '/support-user-manual', title: "User Manual / QIG", group: 'Support', chrome: true, figmaNode: '1:4286', component: lazy(() => import('./pages/support-user-manual')) },
  { slug: 'support-user-manual-extended', path: '/support-user-manual-extended', title: "User Manual (Extended)", group: 'Support', chrome: true, figmaNode: '1:5904', component: lazy(() => import('./pages/support-user-manual-extended')) },
  { slug: 'support-certificate', path: '/support-certificate', title: "Certificate", group: 'Support', chrome: true, figmaNode: '1:5775', component: lazy(() => import('./pages/support-certificate')) },
  { slug: 'support-sira-certificate', path: '/support-sira-certificate', title: "SIRA Certificate", group: 'Support', chrome: true, figmaNode: '1:7119', component: lazy(() => import('./pages/support-sira-certificate')) },
  { slug: 'support-sira-camera-hd', path: '/support-sira-camera-hd', title: "SIRA Camera HD", group: 'Support', chrome: true, figmaNode: '1:6632', component: lazy(() => import('./pages/support-sira-camera-hd')) },
  { slug: 'support-sira-camera-ip', path: '/support-sira-camera-ip', title: "SIRA Camera IP", group: 'Support', chrome: true, figmaNode: '1:6876', component: lazy(() => import('./pages/support-sira-camera-ip')) },
  { slug: 'support-sira-camera-ip-ptz', path: '/support-sira-camera-ip-ptz', title: "SIRA Camera IP PTZ", group: 'Support', chrome: true, figmaNode: '1:6754', component: lazy(() => import('./pages/support-sira-camera-ip-ptz')) },
  { slug: 'support-sira-camera-thermal', path: '/support-sira-camera-thermal', title: "SIRA Camera Thermal", group: 'Support', chrome: true, figmaNode: '1:6997', component: lazy(() => import('./pages/support-sira-camera-thermal')) },
  { slug: 'support-sira-recorder-hd', path: '/support-sira-recorder-hd', title: "SIRA Recorder HD", group: 'Support', chrome: true, figmaNode: '1:7234', component: lazy(() => import('./pages/support-sira-recorder-hd')) },
  { slug: 'support-sira-recorder-ip', path: '/support-sira-recorder-ip', title: "SIRA Recorder IP", group: 'Support', chrome: true, figmaNode: '1:7356', component: lazy(() => import('./pages/support-sira-recorder-ip')) },
  { slug: 'support-lens-calculator', path: '/support-lens-calculator', title: "Lens Calculator", group: 'Support', chrome: true, figmaNode: '1:7842', component: lazy(() => import('./pages/support-lens-calculator')) },
  { slug: 'support-hdd-calculator', path: '/support-hdd-calculator', title: "HDD & Bandwidth Calculator", group: 'Support', chrome: true, figmaNode: '1:8234', component: lazy(() => import('./pages/support-hdd-calculator')) },
  { slug: 'support-carkam-calculator', path: '/support-carkam-calculator', title: "CarKam Storage Calculator", group: 'Support', chrome: true, figmaNode: '1:8032', component: lazy(() => import('./pages/support-carkam-calculator')) },
  { slug: 'support-service', path: '/support-service', title: "Service", group: 'Support', chrome: true, figmaNode: '1:9026', component: lazy(() => import('./pages/support-service')) },
  { slug: 'support-warranty', path: '/support-warranty', title: "Warranty Document", group: 'Support', chrome: true, figmaNode: '1:8806', component: lazy(() => import('./pages/support-warranty')) },
  { slug: 'support-network', path: '/support-network', title: "Service Network", group: 'Support', chrome: true, figmaNode: '1:8931', component: lazy(() => import('./pages/support-network')) },
  { slug: 'support-faqs', path: '/support-faqs', title: "FAQs", group: 'Support', chrome: true, figmaNode: '1:7479', component: lazy(() => import('./pages/support-faqs')) },
  { slug: 'support-technical-videos', path: '/support-technical-videos', title: "Technical Videos", group: 'Support', chrome: true, figmaNode: '1:8548', component: lazy(() => import('./pages/support-technical-videos')) },
  { slug: 'support-technical-videos-2', path: '/support-technical-videos-2', title: "Technical Videos (Playlist)", group: 'Support', chrome: true, figmaNode: '1:8625', component: lazy(() => import('./pages/support-technical-videos-2')) },
  { slug: 'support-compatibility', path: '/support-compatibility', title: "Compatibility List", group: 'Support', chrome: true, figmaNode: '1:7621', component: lazy(() => import('./pages/support-compatibility')) },
  { slug: 'support-troubleshooting', path: '/support-troubleshooting', title: "Troubleshooting", group: 'Support', chrome: true, figmaNode: '1:7715', component: lazy(() => import('./pages/support-troubleshooting')) },
  { slug: 'support-security-advisories', path: '/support-security-advisories', title: "Security Advisories", group: 'Support', chrome: true, figmaNode: '1:8665', component: lazy(() => import('./pages/support-security-advisories')) },
  { slug: 'training-webinars', path: '/training-webinars', title: "HOUM Webinars", group: 'Training', chrome: true, figmaNode: '1:9934', component: lazy(() => import('./pages/training-webinars')) },
  { slug: 'training-webinar-detail', path: '/training-webinar-detail', title: "Webinar Session Detail", group: 'Training', chrome: true, figmaNode: '1:9642', component: lazy(() => import('./pages/training-webinar-detail')) },
  { slug: 'training-webinar-detail-error', path: '/training-webinar-detail-error', title: "Webinar Detail (Form Errors)", group: 'Training', chrome: true, figmaNode: '1:9800', component: lazy(() => import('./pages/training-webinar-detail-error')) },
  { slug: 'training-programme', path: '/training-programme', title: "Mission Tech Training Programme", group: 'Training', chrome: true, figmaNode: '1:10016', component: lazy(() => import('./pages/training-programme')) },
  { slug: 'training-workshops', path: '/training-workshops', title: "Hands-on Workshops", group: 'Training', chrome: true, figmaNode: '1:10296', component: lazy(() => import('./pages/training-workshops')) },
  { slug: 'training-ptm', path: '/training-ptm', title: "Partners' Meet & Training", group: 'Training', chrome: true, figmaNode: '1:10102', component: lazy(() => import('./pages/training-ptm')) },
  { slug: 'training-ptm-alt', path: '/training-ptm-alt', title: "Partners' Meet & Training (Alt)", group: 'Training', chrome: true, figmaNode: '1:9562', component: lazy(() => import('./pages/training-ptm-alt')) },
  { slug: 'training-request', path: '/training-request', title: "Training Request", group: 'Training', chrome: true, figmaNode: '1:10231', component: lazy(() => import('./pages/training-request')) },
  { slug: 'training-feedback', path: '/training-feedback', title: "Training Feedback", group: 'Training', chrome: true, figmaNode: '1:9139', component: lazy(() => import('./pages/training-feedback')) },
  { slug: 'mkt-advertisement', path: '/mkt-advertisement', title: "Advertisement", group: 'Marketing', chrome: true, figmaNode: '1:12096', component: lazy(() => import('./pages/mkt-advertisement')) },
  { slug: 'mkt-brochures', path: '/mkt-brochures', title: "Brochures", group: 'Marketing', chrome: true, figmaNode: '1:12051', component: lazy(() => import('./pages/mkt-brochures')) },
  { slug: 'mkt-videos', path: '/mkt-videos', title: "Videos", group: 'Marketing', chrome: true, figmaNode: '1:11942', component: lazy(() => import('./pages/mkt-videos')) },
  { slug: 'mkt-mailers', path: '/mkt-mailers', title: "Mailers", group: 'Marketing', chrome: true, figmaNode: '1:12005', component: lazy(() => import('./pages/mkt-mailers')) },
  { slug: 'mkt-newspaper', path: '/mkt-newspaper', title: "Newsletter", group: 'Marketing', chrome: true, figmaNode: '1:12138', component: lazy(() => import('./pages/mkt-newspaper')) },
  { slug: 'mkt-corporate-logo', path: '/mkt-corporate-logo', title: "Corporate Logo", group: 'Marketing', chrome: true, figmaNode: '1:12178', component: lazy(() => import('./pages/mkt-corporate-logo')) },
  { slug: 'mkt-corporate-profile', path: '/mkt-corporate-profile', title: "Corporate Profile", group: 'Marketing', chrome: true, figmaNode: '1:12270', component: lazy(() => import('./pages/mkt-corporate-profile')) },
  { slug: 'mkt-tv-commercial', path: '/mkt-tv-commercial', title: "TV Commercials", group: 'Marketing', chrome: true, figmaNode: '1:12332', component: lazy(() => import('./pages/mkt-tv-commercial')) },
  { slug: 'mkt-blog', path: '/mkt-blog', title: "Blog", group: 'Marketing', chrome: true, figmaNode: '1:12400', component: lazy(() => import('./pages/mkt-blog')) },
  { slug: 'mkt-blog-detail', path: '/mkt-blog-detail', title: "Blog Detail", group: 'Marketing', chrome: true, figmaNode: '1:12451', component: lazy(() => import('./pages/mkt-blog-detail')) },
  { slug: 'mkt-news', path: '/mkt-news', title: "News", group: 'Marketing', chrome: true, figmaNode: '1:12819', component: lazy(() => import('./pages/mkt-news')) },
  { slug: 'mkt-news-detail', path: '/mkt-news-detail', title: "News Detail", group: 'Marketing', chrome: true, figmaNode: '1:12884', component: lazy(() => import('./pages/mkt-news-detail')) },
  { slug: 'mkt-galleries', path: '/mkt-galleries', title: "Gallery", group: 'Marketing', chrome: true, figmaNode: '1:12581', component: lazy(() => import('./pages/mkt-galleries')) },
  { slug: 'mkt-gallery-view', path: '/mkt-gallery-view', title: "Gallery View", group: 'Marketing', chrome: true, figmaNode: '1:12767', component: lazy(() => import('./pages/mkt-gallery-view')) },
  { slug: 'mkt-case-studies', path: '/mkt-case-studies', title: "Case Studies", group: 'Marketing', chrome: true, figmaNode: '1:12503', component: lazy(() => import('./pages/mkt-case-studies')) },
  { slug: 'mkt-case-study-detail', path: '/mkt-case-study-detail', title: "Case Study Detail", group: 'Marketing', chrome: true, figmaNode: '1:12939', component: lazy(() => import('./pages/mkt-case-study-detail')) },
  { slug: 'login', path: '/login', title: "Log In", group: 'Account', chrome: false, figmaNode: '1:9335', component: lazy(() => import('./pages/login')) },
  { slug: 'forgot-password', path: '/forgot-password', title: "Forgot Password", group: 'Account', chrome: false, figmaNode: '1:9366', component: lazy(() => import('./pages/forgot-password')) },
  { slug: 'register', path: '/register', title: "Register", group: 'Account', chrome: false, figmaNode: '1:9396', component: lazy(() => import('./pages/register')) },
  { slug: 'register-2', path: '/register-2', title: "Register – Step 2", group: 'Account', chrome: false, figmaNode: '1:9460', component: lazy(() => import('./pages/register-2')) },
  { slug: 'register-3', path: '/register-3', title: "Register – Step 3", group: 'Account', chrome: false, figmaNode: '1:9505', component: lazy(() => import('./pages/register-3')) },
];

export const routeBySlug = Object.fromEntries(routes.map((r) => [r.slug, r])) as Record<string, SiteRoute>;
