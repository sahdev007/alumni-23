import { RouteInfo } from './sidebar.metadata';

//Sidebar menu Routes and data
export const ROUTES: RouteInfo[] = [

    {
        path: '', title: 'Dashboard', icon: 'fa fa-dashboard', class: 'sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
            { path: '/dashboard', title: 'Dashboard', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/dashboard/all-users', title: 'All-User', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/dashboard/manage-request', title: 'Manage Request', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
        ]
    },
    {
        path: '', title: 'About Us', icon: 'bx bx-home-circle', class: 'sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
            { path: '/about-us/leadership-team', title: 'Leadership Team', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
        ]
    },
    { path: '', title: 'Community', icon: 'bx bx-category', class: 'sub', badge: '', badgeClass: '', isExternalLink: false, 
        submenu: [
            { path: '/community/clubs', title: 'Clubs', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []},
            { path: '/community/add-club-type', title: 'Club Types', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []},
            { path: '/community/business-ventures', title: 'Business Ventures', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
        ]
    },
    {
        path: '', title: 'Connect', icon: 'bx bx-network-chart', class: 'sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
            { path: '/connect/admin-events', title: 'Admin Events', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/connect/alumni-events', title: 'Alumni Events', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/connect/add-event-types', title: 'Event Types', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
        ]
    },
    {
        path: '', title: 'Collaborate', icon: 'bx bx-analyse', class: 'sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
            {
                path: '', title: 'Mentorship', icon: 'bx bx-vector', class: 'sub', badge: '', badgeClass: '', isExternalLink: false, submenu: [
                    { path: '/collaborate/mentor', title: 'Mentor', icon: 'ms-2 bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/collaborate/mentee', title: 'Mentee', icon: 'ms-2 bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
                ]
            },
            {
                path: '', title: 'Careers & Jobs', icon: 'fa fa-briefcase', class: 'sub', badge: '', badgeClass: '', isExternalLink: false, submenu: [
                    { path: '/collaborate/admin-jobs', title: 'Admin Jobs', icon: 'ms-2 bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/collaborate/alumni-jobs', title: 'Alumni Jobs', icon: 'ms-2 bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/collaborate/add-job-type', title: 'Job Types', icon: 'ms-2 bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
                ]
            },
            { path: '/collaborate/special-projects', title: 'Special Projects', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/collaborate/participate-in-admission-panel', title: 'Participate In Admission Panel', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/collaborate/offer-expertise', title: 'Offer Expertise', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/collaborate/share-opportunities', title: 'Share Opportunities', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
        ]
    },
    { path: '', title: 'Celebrate', icon: 'bx bxs-star', class: 'sub', badge: '', badgeClass: '', isExternalLink: false, 
        submenu: [
            { path: '/celebrate/featured-alumni', title: 'Featured Alumni', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/celebrate/journey', title: 'Journey', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/celebrate/achievements', title: 'Achievements', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/celebrate/passion', title: 'Passion', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/celebrate/gallery', title: 'Gallery', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/celebrate/youtube-links', title: 'Youtube links', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/celebrate/magazine', title: 'Magazine', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/celebrate/news-and-updates', title: 'News & Updates', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/celebrate/birthday', title: 'Birthay', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/celebrate/anniversary', title: 'Anniversary', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }

        ]
    },
    {
        path: '', title: 'Communication', icon: 'bx bx-station', class: 'sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
            { path: '/communication/email-app', title: 'Email', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/communication/chat-box', title: 'Chat Box', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/communication/contatcs', title: 'Contatcs', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/communication/calendar', title: 'Calendar', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        ]
    },

    {
        path: '', title: 'Contact', icon: 'bx bxs-contact', class: 'sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
            { path: '/contact/key-contact', title: 'Key Contact', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/contact/sbup-alumni-social-channel', title: 'SBUP Alumni Social Channel', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        ]
    },
   
    {
        path: '', title: 'Organization', icon: 'fa fa-university', class: 'sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
            { path: '/organization/institutes', title: 'Institutes', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/organization/batch', title: 'Batches', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/organization/under-graduate', title: 'Under Graduate', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/organization/post-graduate', title: 'Post Graduate', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/organization/phd', title: 'PHD', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            {
                path: '', title: 'Industry', icon: 'bx bx-repeat', class: 'sub', badge: '', badgeClass: '', isExternalLink: false,
                submenu: [
                    { path: '/organization/primary-industry', title: 'Primary', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/organization/secondary-industry', title: 'Secondary', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                ]
            },
            {
                path: '', title: 'Funcationa Area', icon: 'bx bx-right-arrow-alt', class: 'sub', badge: '', badgeClass: '', isExternalLink: false,
                submenu: [
                    { path: '/organization/primary-function', title: 'Primary', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/organization/secondary-function', title: 'Secondary', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                ]
            },
            { path: '/organization/skills', title: 'Skills', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/organization/security-questions', title: 'Security Questions', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        ]
    },
    // { path: '/sitemap', title: 'Sitemap', icon: 'fa fa-sitemap', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []},
    // { path: '/widgets', title: 'Widgets', icon: 'bx bx-cookie', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []},
    {
        path: '', title: 'Log Viewer', icon: 'bx bx-repeat', class: 'sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
            { path: '/log-viewer/log-viewer-dashboard', title: 'Log Viewer Dashboard', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            // { path: '/log-viewer/logs-by-date', title: 'Logs by Days', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        ]
    },
    { path: '/settings/general', title: 'Setting', icon: 'bx bx-cog', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []},


];