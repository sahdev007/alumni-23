import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

import { FooterComponent } from "./footer/footer.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { ColorSwitcherComponent } from './color-switcher/color-switcher.component';
import { CdkTableModule } from '@angular/cdk/table';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { DeletedialogComponent } from './dialog/deletedialog/deletedialog.component';
import { AddFeaturedAlumniComponent } from './dialog/celebrate/add-featured-alumni/add-featured-alumni.component';
import { EditFeaturedAlumniComponent } from './dialog/celebrate/edit-featured-alumni/edit-featured-alumni.component';
import { EditUserComponent } from './dialog/dashboard/edit-user/edit-user.component';
import { AddEditClubTypeComponent } from './dialog/community/add-edit-club-type/add-edit-club-type.component';
import { AddEditJobTypeComponent } from './dialog/collaborate/add-edit-job-type/add-edit-job-type.component';
import { AddMentorComponent } from './dialog/collaborate/add-mentor/add-mentor.component';
import { EditMentorComponent } from './dialog/collaborate/edit-mentor/edit-mentor.component';
import { AddMenteeComponent } from './dialog/collaborate/add-mentee/add-mentee.component';
import { EditMenteeComponent } from './dialog/collaborate/edit-mentee/edit-mentee.component';
import { AddEditJourneyAchievementPassionComponent } from './dialog/celebrate/add-edit-journey-achievement-passion/add-edit-journey-achievement-passion.component';
import { AddEditParticipateAdmissionComponent } from './dialog/collaborate/add-edit-participate-admission/add-edit-participate-admission.component';
import { EditShareOpportunitiesComponent } from './dialog/collaborate/edit-share-opportunities/edit-share-opportunities.component';
import { EditSpecialProjectComponent } from './dialog/collaborate/edit-special-project/edit-special-project.component';
import { ShowContentPipe } from './pipes/show-content.pipe';
import { AddEditKeyContactComponent } from './dialog/contact/add-edit-key-contact/add-edit-key-contact.component';
import { AddEditSocialContactComponent } from './dialog/contact/add-edit-social-contact/add-edit-social-contact.component';
import { ViewContactComponent } from './dialog/contact/view-contact/view-contact.component';
import {MatCardModule} from '@angular/material/card';
import { AddEditLeadershipComponent } from './dialog/about/add-edit-leadership/add-edit-leadership.component';
import { ViewLeadershipComponent } from './dialog/about/view-leadership/view-leadership.component';
import { ViewClubTypeComponent } from './dialog/community/view-club-type/view-club-type.component';
import { AddEditEventTypeComponent } from './dialog/connect/add-edit-event-type/add-edit-event-type.component';
import { ViewJobTypeComponent } from './dialog/collaborate/view-job-type/view-job-type.component';
import { ViewJobComponent } from './dialog/collaborate/view-job/view-job.component';
import { ViewSpecialProjectComponent } from './dialog/collaborate/view-special-project/view-special-project.component';
import {MatRadioModule} from '@angular/material/radio';
import { ViewAdmissionPanelComponent } from './dialog/collaborate/view-admission-panel/view-admission-panel.component';
import { ViewExpertiseComponent } from './dialog/collaborate/view-expertise/view-expertise.component';
import { ViewShareOpportunityComponent } from './dialog/collaborate/view-share-opportunity/view-share-opportunity.component';
import { AddEditGalleryComponent } from './dialog/celebrate/add-edit-gallery/add-edit-gallery.component';
import { ViewGalleryComponent } from './dialog/celebrate/view-gallery/view-gallery.component';
import { AddEditYoutubeLinksComponent } from './dialog/celebrate/add-edit-youtube-links/add-edit-youtube-links.component';
import { ViewYoutubeComponent } from './dialog/celebrate/view-youtube/view-youtube.component';
import { AddEditMagazineComponent } from './dialog/celebrate/add-edit-magazine/add-edit-magazine.component';
import { ViewMagazineComponent } from './dialog/celebrate/view-magazine/view-magazine.component';
import { ViewNewsUpdatesComponent } from './dialog/celebrate/view-news-updates/view-news-updates.component';
import { EditorModule } from '@tinymce/tinymce-angular';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReplaceUnderscorePipe } from './pipes/replace-underscore.pipe';
import { AuthGuard } from '../auth/auth.guard';
import { AddEditSkillsComponent } from './dialog/organization/add-edit-skills/add-edit-skills.component';
import { AddEditInstitutesComponent } from './dialog/organization/add-edit-institutes/add-edit-institutes.component';
import { AddEditBatchesComponent } from './dialog/organization/add-edit-batches/add-edit-batches.component';
import { AddEditCoursesComponent } from './dialog/organization/add-edit-courses/add-edit-courses.component';
import { AddEditIndustryComponent } from './dialog/organization/add-edit-industry/add-edit-industry.component';
import { AddEditFunctionComponent } from './dialog/organization/add-edit-function/add-edit-function.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { ViewClubComponent } from './dialog/community/view-club/view-club.component';
import { ViewEventComponent } from './dialog/connect/view-event/view-event.component';
import { ViewFeaturedAlumniComponent } from './dialog/celebrate/view-featured-alumni/view-featured-alumni.component';
import { ViewUserListComponent } from './dialog/collaborate/view-user-list/view-user-list.component';
import { LoaderComponent } from './loader/loader.component';
import { EditCostComponent } from './dialog/connect/edit-cost/edit-cost.component';
import { NumbersOnlyDirective } from './directives/numbers-only.directive';
import { SearchFilterComponent } from './search-filter/search-filter.component';

@NgModule({
    imports: [
        RouterModule,
        CommonModule,
        NgbModule,
        PerfectScrollbarModule,
        EditorModule,

        CdkTableModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatMenuModule,
        MatIconModule,
        MatButtonModule,
        MatDialogModule,
        ReactiveFormsModule,
        MatInputModule,
        MatSelectModule,
        MatCardModule,
        MatRadioModule,
        MatFormFieldModule,

        NgSelectModule
    ],
    declarations: [
        FooterComponent,
        NavbarComponent,
        SidebarComponent,
        ColorSwitcherComponent,
        DeletedialogComponent,
        AddFeaturedAlumniComponent,
        EditFeaturedAlumniComponent,
        EditUserComponent,
        AddEditClubTypeComponent,
        AddEditJobTypeComponent,
        AddMentorComponent,
        EditMentorComponent,
        AddMenteeComponent,
        EditMenteeComponent,
        AddEditJourneyAchievementPassionComponent,
        AddEditParticipateAdmissionComponent,
        EditShareOpportunitiesComponent,
        EditSpecialProjectComponent,
        ShowContentPipe,
        AddEditKeyContactComponent,
        AddEditSocialContactComponent,
        ViewContactComponent,
        AddEditLeadershipComponent,
        ViewLeadershipComponent,
        ViewClubTypeComponent,
        AddEditEventTypeComponent,
        ViewJobTypeComponent,
        ViewJobComponent,
        ViewSpecialProjectComponent,
        ViewAdmissionPanelComponent,
        ViewExpertiseComponent,
        ViewShareOpportunityComponent,
        AddEditGalleryComponent,
        ViewGalleryComponent,
        AddEditYoutubeLinksComponent,
        ViewYoutubeComponent,
        AddEditMagazineComponent,
        ViewMagazineComponent,
        ViewNewsUpdatesComponent,
        ReplaceUnderscorePipe,
        AddEditSkillsComponent,
        AddEditInstitutesComponent,
        AddEditBatchesComponent,
        AddEditCoursesComponent,
        AddEditIndustryComponent,
        AddEditFunctionComponent,
        ViewClubComponent,
        ViewEventComponent,
        ViewFeaturedAlumniComponent,
        ViewUserListComponent,
        LoaderComponent,
        EditCostComponent,
        NumbersOnlyDirective,
        SearchFilterComponent
    ],
    exports: [
        CommonModule,
        FooterComponent,
        NavbarComponent,
        SidebarComponent,
        ColorSwitcherComponent,
        NgbModule,
        ShowContentPipe,
        ReplaceUnderscorePipe,
        LoaderComponent,
        NumbersOnlyDirective,
        SearchFilterComponent
    ],
    providers: [AuthGuard ],
    entryComponents: [ ]
})
export class SharedModule { }
