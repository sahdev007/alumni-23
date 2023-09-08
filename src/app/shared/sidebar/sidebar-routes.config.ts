import { RouteInfo } from './sidebar.metadata';

//Sidebar menu Routes and data
export const ROUTES: RouteInfo[] = [

    { path: '/dashboard', title: 'Dashboard', icon: 'fa fa-dashboard', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    { path: '/alumni-directory/list', title: 'Alumni Directory', icon: 'bx bx-coin-stack', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []},
    { path: '/donations/donations-list', title: 'Donations', icon: 'bx bx-donate-blood', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []},
    {
        path: '', title: 'Manage User', icon: 'bx bx-user', class: 'sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
            { path: '/dashboard/all-users', title: 'All-User', icon: 'ms-2 bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/dashboard/manage-request', title: 'Manage Request', icon: 'ms-2 bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            // { path: '/dashboard/user-role', title: 'User Role', icon: 'ms-2 bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '',  isRole: 0, isExternalLink: false, submenu: [], }
        ]
    },
    {
        path: '', title: 'About Us', icon: 'bx bx-home-circle', class: 'sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
            { path: '/about-us/leadership-team', title: 'Leadership Team', icon: 'ms-2 bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
        ]
    },
    { path: '', title: 'Community', icon: 'bx bx-category', class: 'sub', badge: '', badgeClass: '', isExternalLink: false, 
        submenu: [
            { path: '/community/clubs', title: 'Clubs', icon: 'ms-2 bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []},
            { path: '/community/club-types', title: 'Club Types', icon: 'ms-2 bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []},
            { path: '/community/business-ventures', title: 'Business Ventures', icon: 'ms-2 bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
        ]
    },
    {
        path: '', title: 'Events', icon: 'fa fa-calendar', class: 'sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
            { path: '/connect/admin-events', title: 'Admin Events', icon: 'ms-2 bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/connect/alumni-events', title: 'Alumni Events', icon: 'ms-2 bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/connect/add-event-types', title: 'Event Types', icon: 'ms-2 bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
        ]
    },
    {
        path: '', title: 'Collaborate', icon: 'bx bx-analyse', class: 'sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
            // {
            //     path: '', title: 'Mentorship', icon: 'bx bx-vector', class: 'sub', badge: '', badgeClass: '', isExternalLink: false, submenu: [
            //         { path: '/collaborate/mentor', title: 'Mentor', icon: 'ms-2 bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            //         { path: '/collaborate/mentee', title: 'Mentee', icon: 'ms-2 bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
            //     ]
            // },
            // {
            //     path: '', title: 'Careers & Jobs', icon: 'fa fa-briefcase', class: 'sub', badge: '', badgeClass: '', isExternalLink: false, submenu: [
            //         { path: '/collaborate/admin-jobs', title: 'Admin Jobs', icon: 'ms-2 bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            //         { path: '/collaborate/alumni-jobs', title: 'Alumni Jobs', icon: 'ms-2 bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            //         { path: '/collaborate/job-type', title: 'Job Types', icon: 'ms-2 bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
            //     ]
            // },
            { path: '/collaborate/special-projects', title: 'Special Projects', icon: 'ms-2 bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/collaborate/participate-in-admission-panel', title: 'Participate In Admission Panel', icon: 'ms-2 bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/collaborate/offer-expertise', title: 'Offer Expertise', icon: 'ms-2 bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/collaborate/share-opportunities', title: 'Share Opportunities', icon: 'ms-2 bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
        ]
    },
    {
        path: '', title: 'Mentorship', icon: 'bx bx-vector', class: 'sub', badge: '', badgeClass: '', isExternalLink: false, submenu: [
            { path: '/mentorship/mentor', title: 'Mentor', icon: 'ms-2 bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/mentorship/mentee', title: 'Mentee', icon: 'ms-2 bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
        ]
    },
    {
        path: '', title: 'Careers & Jobs', icon: 'fa fa-briefcase', class: 'sub', badge: '', badgeClass: '', isExternalLink: false, submenu: [
            { path: '/careers-jobs/admin-jobs', title: 'Admin Jobs', icon: 'ms-2 bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/careers-jobs/alumni-jobs', title: 'Alumni Jobs', icon: 'ms-2 bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/careers-jobs/job-type', title: 'Job Types', icon: 'ms-2 bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
        ]
    },
    { path: '', title: 'Celebrate', icon: 'bx bxs-star', class: 'sub', badge: '', badgeClass: '', isExternalLink: false, 
        submenu: [
            { path: '/celebrate/featured-alumni', title: 'Featured Alumni', icon: 'ms-2 bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/celebrate/journey', title: 'Journey', icon: 'ms-2 bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/celebrate/achievements', title: 'Achievements', icon: 'ms-2 bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/celebrate/passion', title: 'Passion', icon: 'ms-2 bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/celebrate/birthday', title: 'Birthday', icon: 'ms-2 bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/celebrate/anniversary', title: 'Anniversary', icon: 'ms-2 bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }

        ]
    },
    { path: '', title: 'Media', icon: 'bx bx-images', class: 'sub', badge: '', badgeClass: '', isExternalLink: false, 
    submenu: [
        { path: '/media/gallery', title: 'Gallery', icon: 'ms-2 bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        { path: '/media/youtube-links', title: 'Youtube links', icon: 'ms-2 bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        { path: '/media/magazine', title: 'Magazine', icon: 'ms-2 bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        { path: '/media/news-and-updates', title: 'News & Updates', icon: 'ms-2 bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }

    ]
},
    {
        path: '', title: 'Communication', icon: 'bx bx-station', class: 'sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
            { path: '/communication/email-app', title: 'Email', icon: 'ms-2 bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/communication/chat-box', title: 'Chat', icon: 'ms-2 bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/communication/contatcs', title: 'Contacts', icon: 'ms-2 bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/communication/calendar', title: 'Calendar', icon: 'ms-2 bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        ]
    },

    {
        path: '', title: 'Contact', icon: 'bx bxs-contact', class: 'sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
            { path: '/contact/key-contact', title: 'Key Contact', icon: 'ms-2 bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/contact/sbup-alumni-social-channel', title: 'Alumni Social Channel', icon: 'ms-2 bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        ]
    },
   
    {
        path: '', title: 'Organization', icon: 'fa fa-university', class: 'sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
            { path: '/organization/institutes', title: 'Institutes/Colleges', icon: 'ms-2 bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/organization/batch', title: 'Batches', icon: 'ms-2 bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/organization/under-graduate', title: 'Under Graduate', icon: 'ms-2 bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/organization/post-graduate', title: 'Post Graduate', icon: 'ms-2 bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/organization/phd', title: 'PHD', icon: 'ms-2 bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            // {
            //     path: '', title: 'Industry', icon: 'bx bx-repeat', class: 'sub', badge: '', badgeClass: '', isExternalLink: false,
            //     submenu: [
            //         { path: '/organization/primary-industry', title: 'Primary', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            //         { path: '/organization/secondary-industry', title: 'Secondary', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            //     ]
            // },
            // {
            //     path: '', title: 'Funcational Area', icon: 'bx bx-right-arrow-alt', class: 'sub', badge: '', badgeClass: '', isExternalLink: false,
            //     submenu: [
            //         { path: '/organization/primary-function', title: 'Primary', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            //         { path: '/organization/secondary-function', title: 'Secondary', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            //     ]
            // },
            // { path: '/organization/skills', title: 'Skills', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            // { path: '/organization/security-questions', title: 'Security Questions', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        ]
    },
    // { path: '/sitemap', title: 'Sitemap', icon: 'fa fa-sitemap', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []},
    // { path: '/widgets', title: 'Widgets', icon: 'bx bx-cookie', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []},
    {
        path: '', title: 'Log Viewer', icon: 'bx bx-repeat', class: 'sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
            { path: '/log-viewer/log-viewer-dashboard', title: 'Log Viewer Dashboard', icon: 'ms-2 bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            // { path: '/log-viewer/logs-by-date', title: 'Logs by Days', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        ]
    },
    {
        path: '', title: 'Meta', icon: 'bx bxs-contact', class: 'sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
            { path: '/community/club-types', title: 'Club Types', icon: 'ms-2 bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/connect/add-event-types', title: 'Event Types', icon: 'ms-2 bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/careers-jobs/job-type', title: 'Job Types', icon: 'ms-2 bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/organization/primary-industry', title: 'Primary Industry', icon: 'ms-2 bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/organization/secondary-industry', title: 'Secondary Industry', icon: 'ms-2 bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/organization/primary-function', title: 'Primary Function Area', icon: 'ms-2 bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/organization/secondary-function', title: 'Secondary Function Area', icon: 'ms-2 bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/organization/skills', title: 'Skills', icon: 'ms-2 bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/organization/security-questions', title: 'Security Questions', icon: 'ms-2 bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/media/gallery-type', title: 'Gallery Type', icon: 'ms-2 bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/donations/donations-category', title: 'Donation Category', icon: 'ms-2 bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        ]
    },
    { path: '/settings/general', title: 'Settings', icon: 'bx bx-cog', class: '', badge: '', badgeClass: '', isExternalLink: false, isRole: 0, submenu: []},


];