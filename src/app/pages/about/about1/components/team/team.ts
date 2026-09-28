import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
interface TeamMember {
  name: string;
  role: string;
  image: string;
  social: { [key: string]: string }; 
}

@Component({
  selector: 'about1-team',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './team.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: ``
})
export class Team {
  teamMembers: TeamMember[] = [];

  ngOnInit() {
    // Replace with real API call or service
    fetch('assets/team-data.json')
      .then((res) => res.json())
      .then((data: TeamMember[]) => (this.teamMembers = data));
  }
  getSocialKeys(social: { [key: string]: string }): string[] {
    return Object.keys(social); 
  }
  
  getSocialClass(socialKey: string): string {
    const socialClasses: { [key: string]: string } = {
      facebook: 'text-facebook',
      twitter: 'text-twitter',
      instagram: 'text-instagram-gradient',
      linkedin: 'text-linkedin'
    };
    return socialClasses[socialKey] || 'text-secondary';
  }
  
  getSocialIcon(socialKey: string): string {
    const socialIcons: { [key: string]: string } = {
      facebook: 'facebook',
      twitter: 'twitter-x',
      instagram: 'instagram',
      linkedin: 'linkedin'
    };
    return socialIcons[socialKey] || 'globe';
  }
  
}
