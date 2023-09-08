import { Routes } from '@angular/router';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { SitemapComponent } from 'src/app/sitemap/sitemap.component';
import { environment } from 'src/environments/environment';


//Route for content layout with sidebar, navbar and footer.

export const Full_ROUTES: Routes = [
    {
        path: 'auth',
        loadChildren: () => import('./../../auth/auth.module').then(m => m.AuthModule)
    },
    {
        path: 'dashboard',
        canActivate: [AuthGuard],
        data: { role: [environment.roles.ADMIN] },
        loadChildren: () => import('../../dashboard/dashboard.module').then(m => m.DashboardModule)
    },
    {
        path: 'alumni-directory',
        loadChildren: () => import('../../alumni-directory/alumni-directory.module').then(d => d.AlumniDirectoryModule)
    },
    {
        path: 'about-us',
        loadChildren: () => import('../../about-us/about-us.module').then(m => m.AboutUsModule)
    },
    {
        path: 'donations',
        loadChildren: () => import('../../donations/donations.module').then(m => m.DonationsModule)
    },
    {
        path: 'communication',
        loadChildren: () => import('../../application/application.module').then(m => m.ApplicationModule)
    },
    {
        path: 'community',
        loadChildren: () => import('../../community/community.module').then(m => m.CommunityModule)
    },
    {
        path: 'connect',
        loadChildren: () => import('../../connect/connect.module').then(m => m.ConnectModule)
    },
    {
        path: 'celebrate',
        loadChildren: () => import('../../celebrate/celebrate.module').then(m => m.CelebrateModule)
    },
    {
        path: 'media',
        loadChildren: () => import('../../media/media.module').then(m => m.MediaModule)
    },
    {
        path: 'contact',
        loadChildren: () => import('../../contact/contact.module').then(m => m.ContactModule)
    },
    {
        path: 'collaborate',
        loadChildren: () => import('../../collaborate/collaborate.module').then(c => c.CollaborateModule)
    },
    {
        path: 'mentorship',
        loadChildren: () => import('../../mentorship/mentorship.module').then(m => m.MentorshipModule)
    },
    {
        path: 'careers-jobs',
        loadChildren: () => import('../../career-jobs/career-jobs.module').then(c => c.CareerJobsModule)
    },
    {
        path: 'organization',
        loadChildren: () => import('../../organization/organization.module').then(o => o.OrganizationModule)
    },
    {
        path: 'widgets',
        loadChildren: () => import('../../widgets/widgets.module').then(m => m.WidgetsModule)

    },
    {
        path: 'ecommerce',
        loadChildren: () => import('../../ecommerce/ecommerce.module').then(m => m.EcommerceModule)

    },
    {
        path: 'components',
        loadChildren: () => import('../../components/components.module').then(m => m.ComponentsModule)
    },
    {
        path: 'leaderboard',
        loadChildren: () => import('../../leaderboard/leaderboard.module').then(l => l.LeaderboardModule)
    },

    // {
    //     path: 'content',
    //     loadChildren: () => import('../../content/content.module').then(m => m.ContentModule)
    // },
    {
        path: 'icons',
        loadChildren: () => import('../../icons/icons.module').then(m => m.IconsModule)
    },
    {
        path: 'form',
        loadChildren: () => import('../../form/form.module').then(m => m.FormModule)
    },
    
    {
        path: 'user-profile',
        loadChildren: () => import('../../user-profile/user-profile.module').then(m => m.UserProfileModule)

    },
    {
        path: 'faq',
        loadChildren: () => import('../../faq/faq.module').then(m => m.FaqModule)
    },
    {
        path: 'pricing',
        loadChildren: () => import('../../pricing/pricing.module').then(m => m.PricingModule)
    },
    {
        path: 'earnings',
        loadChildren: () => import('../../earnings/earnings.module').then(m => m.EarningsModule)
    },
    {
        path: 'downloads',
        loadChildren: () => import('../../downloads/downloads.module').then(m => m.DownloadsModule)
    },
    {
        path: 'timeline',
        loadChildren: () => import('../../timeline/timeline.module').then(m => m.TimelineModule)
    },
    {
        path: 'charts',
        loadChildren: () => import('../../charts/chart.module').then(m => m.ChartModule)
    },
    {
        path: 'settings',
        loadChildren: () => import('../../settings/settings.module').then(m => m.SettingsModule)
    },
    {
        path: 'log-viewer',
        loadChildren: () => import('../../log-viewer/log-viewer.module').then(m => m.LogViewerModule)
    },
    // {
    //     path: 'maps',
    //     loadChildren: () => import('../../maps/maps.module').then(m => m.MapsModule)

    // }
    {
        path: 'sitemap', component: SitemapComponent
    },
];