import { RouteInfo } from './sidebar.metadata';

//Sidebar menu Routes and data
export const ROUTES: RouteInfo[] = [

    {
        path: '', title: 'Dashboard', icon: 'fa fa-dashboard', class: 'sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
            { path: '/dashboard', title: 'Dashboard', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/dashboard/all-users', title: 'All-User', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/dashboard/manage-request', title: 'Manage Request', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            // { path: '/dashboard/e-commerce', title: 'e-Commerce', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            // { path: '/dashboard/analytics', title: 'Analytics', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            // { path: '/dashboard/digital-marketing', title: 'Digital Marketing', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            // { path: '/dashboard/human-resources', title: 'Human Resources', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        ]
    },
    {
        path: '', title: 'About Us', icon: 'bx bx-home-circle', class: 'sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
            { path: '/about-us/leadership-team', title: 'Leadership Team', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
        ]
    },
    // {
    //     path: '', title: 'Communication', icon: 'bx bx-category', class: 'sub', badge: '', badgeClass: '', isExternalLink: false,
    //     submenu: [
    //         { path: '/communication/email-app', title: 'Email', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    //         { path: '/communication/chat-box', title: 'Chat Box', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    //         { path: '/communication/file-manager', title: 'File Manager', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    //         { path: '/communication/contatcs', title: 'Contatcs', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    //         { path: '/communication/invoice', title: 'Invoice', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    //         { path: '/communication/calendar', title: 'Calendar', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    //     ]
    // },
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
            { path: '/communication/file-manager', title: 'File Manager', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/communication/calendar', title: 'Calendar', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
        ]
    },

    {
        path: '', title: 'Contact', icon: 'bx bxs-contact', class: 'sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
            { path: '/contact/key-contact', title: 'Key Contact', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/contact/sbup-alumni-social-channel', title: 'SBUP Alumni Social Channel', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        ]
    },

    // {
    //     path: '', title: 'Settings', icon: 'bx bx-repeat', class: 'sub', badge: '', badgeClass: '', isExternalLink: false,
    //     submenu: [
    //         { path: '/settings/general', title: 'General Setting', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    //         // { path: '/content/privacy', title: 'Privacy', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    //     ]
    // },
  
    // { path: '/widgets', title: 'Widgets', icon: 'bx bx-cookie', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    // {
    //     path: '', title: 'eCommerce', icon: 'bx bx-cart', class: 'sub', badge: '', badgeClass: '', isExternalLink: false,
    //     submenu: [
    //         { path: '/ecommerce/products', title: 'Products', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    //         { path: '/ecommerce/products-details', title: 'Products Details', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    //         { path: '/ecommerce/add-new-products', title: 'Add New Products', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    //         { path: '/ecommerce/orders', title: 'Orders', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    //     ]
    // },
    
   
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
        ]
    },
    { path: '/sitemap', title: 'Sitemap', icon: 'fa fa-sitemap', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []},
    { path: '/widgets', title: 'Widgets', icon: 'bx bx-cookie', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []},
    {
        path: '', title: 'Log Viewer', icon: 'bx bx-repeat', class: 'sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
            { path: '/log-viewer/log-viewer-dashboard', title: 'Log Viewer Dashboard', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/log-viewer/logs-by-date', title: 'Logs by Days', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        ]
    },
    // {
    //     path: '', title: 'Content', icon: 'bx bx-repeat', class: 'sub', badge: '', badgeClass: '', isExternalLink: false,
    //     submenu: [
    //         { path: '/content/grid-system', title: 'Grid System', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    //         { path: '/content/typography', title: 'Typography', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    //         { path: '/content/text-utilities', title: 'Text Utilities', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    //     ]
    // },
    {
        path: '', title: 'Icons', icon: 'bx bx-donate-blood', class: 'sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
            { path: '/icons/line-icons', title: 'Line Icons', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/icons/boxicons', title: 'Boxicons', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        ]
    },
    // { path: '/sitemap', title: 'Sitemap', icon: 'bx bx-cookie', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },

    {
        path: '', title: 'Components', icon: 'bx bx-bookmark-heart', class: 'sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
            { path: '/components/alerts', title: 'Alerts', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/components/badge', title: 'Badge', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/components/buttons', title: 'Buttons', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/components/cards', title: 'Cards', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/components/carousel', title: 'Carousel', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/components/acordians', title: 'Accordion', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/components/list-groups', title: 'List Groups', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/components/media-objects', title: 'Media Objects', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/components/modals', title: 'Modals', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/components/navs', title: 'Navs', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/components/navbar', title: 'Navbar', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/components/pagination', title: 'Pagination', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/components/progress-bar', title: 'Progress Bars', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/components/spinners', title: 'Spinners', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/components/avtars-chips', title: 'Avatrs & Chips', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        ]
    },
    {
        path: '', title: 'Form', icon: 'bx bx-message-square-edit', class: 'sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
            { path: '/form/form-elements', title: 'Form Elements', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/form/input-groups', title: 'Input Groups', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/form/form-layouts', title: 'Forms Layouts', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/form/form-validation', title: 'Form Validation', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/form/form-wizard', title: 'Form Wizard', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/form/text-editor', title: 'Text Editor', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/form/file-upload', title: 'File Upload', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/form/select2', title: 'Select2', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        ]
    },
    // {
    //     path: '', title: 'Datatables', icon: 'bx bx-donate-blood', class: 'sub', badge: '', badgeClass: '', isExternalLink: false,
    //     submenu: [
    //         { path: '/datatable/table', title: 'All Tables', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
    //     ]
    // },
    // {
    //     path: '/table/table', title: 'Table', icon: 'bx bx-grid-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
    // },
    // {
    //     path: '', title: 'Authentication', icon: 'bx bx-lock', class: 'sub', badge: '', badgeClass: '', isExternalLink: false,
    //     submenu: [

    //         { path: '/auth/sign-in', title: 'Sign In', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
    //         { path: '/auth/sign-up', title: 'Sign Up', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
    //         { path: '/auth/signin-with-header-footer', title: 'SignIn With Header Footer', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
    //         { path: '/auth/signup-with-header-footer', title: 'SignUp With Header Footer', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
    //         { path: '/auth/forgot-password', title: 'Forgot Password', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
    //         { path: '/auth/reset-password', title: 'Reset Password', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
    //         { path: '/auth/lock-screen', title: 'Lock Screen', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },

    //     ]
    // },
    // { path: '/user-profile', title: 'User Profile', icon: 'bx bx-user-circle', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []},
    // { path: '/timeline', title: 'Timeline', icon: 'bx bx-video-recording', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []},
    // {
    //     path: '', title: 'Errors', icon: 'bx bx-error', class: 'sub', badge: '', badgeClass: '', isExternalLink: false,
    //     submenu: [
    //         { path: '/error/error-404', title: '404 Error', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
    //         { path: '/error/error-500', title: '500 Error', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
    //         { path: '/error/coming-soon', title: 'Coming Soon', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
    //        ]
    // },
    // { path: '/faq', title: 'FAQ', icon: 'bx bx-help-circle', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    // { path: '/pricing', title: 'Pricing', icon: 'bx bx-diamond', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    // { path: '/earnings', title: 'Earnings', icon: 'bx bx-dollar-circle', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    // { path: '/downloads', title: 'Downloads', icon: 'bx bx-download', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    {
        path: '', title: 'Charts', icon: 'bx bx-line-chart', class: 'sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
            { path: '/charts/apex-chart', title: 'Apex Charts', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/charts/chartjs', title: 'ChartJs', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/charts/highcharts', title: 'Highcharts', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        ]
    },
    {
        path: '', title: 'Maps', icon: 'bx bx-map-alt', class: 'sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
            { path: '/maps/google-maps', title: 'Google Maps', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/maps/fullscreen', title: 'Fullscreen Map', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        ]
    },
    // {
    //     path: 'javascript:;', title: 'Menu Levels', icon: 'bx bx-menu', class: 'sub', badge: '', badgeClass: '', isExternalLink: false,
    //         submenu: [
    //             { path: 'javascript:;', title: 'Level 1', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    //                 { path: 'javascript:;', title: 'Level 1', icon: 'bx bx-right-arrow-alt', class: 'sub', badge: '', badgeClass: '', isExternalLink: false, 
    //                     submenu: [
    //                         { path: 'javascript:;', title: 'level 2', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    //                         { path: 'javascript:;', title: 'level 2', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },

    //                     ] },
    //         ]
    // },
    // { path: 'https://codervent.com/bulona-angular/docs/', title: 'Documentation', icon: 'bx bx-folder', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
    // { path: 'https://themeforest.net/user/codewrrap/portfolio', title: 'Support', icon: 'bx bx-support', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] }


];