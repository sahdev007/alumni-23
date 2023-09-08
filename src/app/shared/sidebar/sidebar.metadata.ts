// Sidebar route metadata
export interface RouteInfo {
    path: string;
    isRole?: any;
    title: string;
    icon: string;
    class: string;
    badge: string;
    badgeClass: string;
    isExternalLink: boolean;
    submenu : RouteInfo[];
}
