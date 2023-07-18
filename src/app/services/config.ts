import { Location } from "@angular/common";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class Config {
  constructor(public _location: Location) {}
  // Gender
  gender = [
    { id: 1, label: "Male" },
    { id: 2, label: "Female" },
  ];
  // Role
  role = [
    { id: 0, label: "Student" },
    { id: 1, label: "Alumni" },
  ];
  // Marital Status
  maritalStatus = [
    { id: 1, status: "Single" },
    { id: 2, status: "Engaged" },
    { id: 3, status: "Married" },
    { id: 4, status: "Divorced" },
    { id: 5, status: "Undisclosed" },
  ];
  // Blood Group
  bloodGroup = [
    { id: 1, group: "A+" },
    { id: 2, group: "A-" },
    { id: 3, group: "B+" },
    { id: 4, group: "B-" },
    { id: 5, group: "AB+" },
    { id: 6, group: "AB-" },
    { id: 7, group: "O+" },
    { id: 8, group: "O-" },
  ];

  /**
   * Function to allow only Value
   */
  onlyNumber(event: any) {
    let charCode = event.which ? event.which : event.keyCode;
    if (charCode < 48 || charCode > 57) {
      event.preventDefault();
      return false;
    } else {
      return true;
    }
  }

  navigateBack() {
    this._location.back();
  }

  professionalTitle = [
    { id: 1, label: "Analyst" },
    { id: 2, label: "Manager" },
    { id: 3, label: "Senior Manager" },
    { id: 4, label: "Managing Consultant" },
    { id: 5, label: "AVP" },
    { id: 6, label: "VP" },
    { id: 7, label: "AGM" },
    { id: 8, label: "GM" },
    { id: 9, label: "Director" },
    { id: 10, label: "MD" },
    { id: 11, label: "CIO" },
    { id: 12, label: "CMO" },
    { id: 13, label: "CDO" },
    { id: 14, label: "CEO" },
    { id: 15, label: "Founder" },
  ];

  professionCategory = [
    { id: 1, label: "Employed" },
    { id: 2, label: "Business Owner/Founder/Co-Founder/Self Employed" },
    { id: 3, label: "Both" },
  ];

  functionArea = [
    { id: 1, label: "Sales" },
    { id: 2, label: "Marketing" },
    { id: 3, label: "Branding" },
    { id: 4, label: "Digital" },
    { id: 5, label: "CRM/CX" },
    { id: 6, label: "Corporate Strategy" },
    { id: 7, label: "IT" },
    { id: 8, label: "Operations" },
    { id: 9, label: "Supply Chain" },
    { id: 10, label: "Finance" },
    { id: 11, label: "Banking" },
    { id: 12, label: "HR-Recruiting" },
    { id: 13, label: "HR-Talent Management" },
    { id: 14, label: "HR-Learning &amp; Growth" },
    { id: 15, label: "HR-Generalist" },
    { id: 16, label: "Consulting" },
    { id: 17, label: "Other" },
  ];

  industryFocus = [
    { id: 1, label: "Aerospace and Defense" },
    { id: 2, label: "Automotive" },
    { id: 3, label: "Banking, Finance &amp; Insurance" },
    { id: 4, label: "Chemicals" },
    { id: 5, label: "Consumer Products" },
    { id: 6, label: "Defense and Security" },
    { id: 7, label: "E-Commerce" },
    { id: 8, label: "Education and Research" },
    { id: 9, label: "Engineering, Construction, and Operations" },
    { id: 10, label: "Healthcare" },
    { id: 11, label: "High Tech &amp; Information Technology" },
    { id: 12, label: "Industrial Machinery and Components" },
    { id: 13, label: "Life Sciences" },
    { id: 14, label: "Media, Entertainment, Events" },
    { id: 15, label: "Mill Products" },
    { id: 16, label: "Mining" },
    { id: 17, label: "Oil and Gas" },
    { id: 18, label: "Pharmaceuticals" },
    { id: 19, label: "Professional Services" },
    { id: 20, label: "Public Sector" },
    { id: 21, label: "Retail" },
    { id: 22, label: "Sports" },
    { id: 23, label: "Telecommunications" },
    { id: 24, label: "Travel, Hotels, Hospitality and Transportation" },
    { id: 25, label: "Utilities" },
    { id: 26, label: "Wholesale Distribution" },
  ];

  specialization = [
    { id: 1, label: "Marketing" },
    { id: 2, label: "Sales" },
    { id: 3, label: "Finance" },
    { id: 4, label: "HR" },
    { id: 5, label: "Operations" },
    { id: 6, label: "Systems" },
    { id: 7, label: "Others" },
  ];

  familyAssociate = [
    { id: 1, label: "Spouse" },
    { id: 2, label: "Siblings" },
    { id: 3, label: "Other Family Members" },
    { id: 4, label: "Both Spouse &amp; Siblings" },
    { id: 5, label: "Not Applicable" },
  ];

  hobbies = [
    { id: 1, label: "Adventure Sports" },
    { id: 2, label: "Sailing" },
    { id: 3, label: "Golfing" },
    { id: 4, label: "Marathon" },
    { id: 5, label: "Photography" },
    { id: 6, label: "Trecking" },
    { id: 7, label: "Cooking" },
  ];

  region = [
    { id: 1, label: "India" },
    { id: 2, label: "Asia (Excluding India)" },
    { id: 3, label: "North Americas" },
    { id: 4, label: "South Americas" },
    { id: 5, label: "UK/Europe" },
    { id: 6, label: "Middle East & Africa" },
    { id: 7, label: "Australia & New Zealand" },
    { id: 7, label: "Other" }
  ];
}
