import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { StickyThingDirective } from '../../../../../shared/directives/sticky-thing.directive';

@Component({
  selector: 'career-single-job',
  standalone: true,
  imports: [StickyThingDirective,RouterLink],
  templateUrl: './job.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: ``
})
export class Job {
  intro = {
    greeting: "Hello, I'm Jacqueline Miller-CEO here at Folio.",
    paragraphs: [
      "From humble beginnings, we have grown to serve hundreds of satisfied customers, generating millions in revenue. Our growth trajectory has been nothing short of extraordinary, with consistent triple-digit year-on-year growth.",
      "This success is a testament to our robust and beautiful product, which is trusted and used by growing organizations every day. Each team member plays a vital role in our journey, contributing their unique skills and expertise to our collective success."
    ]
  };

  responsibilities = [
    { title: 'Model Development:', desc: 'Design, develop, and deploy machine learning models for various applications.' },
    { title: 'Data Analysis:', desc: 'Analyze large datasets to identify patterns, trends, and insights that inform model development' },
    { title: 'Algorithm Optimization:', desc: 'Optimize and fine-tune algorithms for improved accuracy and efficiency.' },
    { title: 'Collaboration:', desc: 'Work closely with cross-functional teams, including data scientists, engineers, and product managers, to integrate machine learning solutions.' },
    { title: 'Research:', desc: 'Stay up-to-date with the latest advancements in machine learning and artificial intelligence, and apply new techniques to our projects.' },
    { title: 'Documentation:', desc: 'Maintain clear and comprehensive documentation of models, algorithms, and processes.' }
  ];

  qualifications = [
    { title: 'Education:', desc: "Bachelor's or Master's degree in Computer Science, Data Science, Machine Learning, or a related field." },
    { title: 'Experience:', desc: '2+ years of experience in machine learning, data science, or a similar role.' },
    { title: 'Technical skills:', desc: 'Proficiency in Python and machine learning libraries such as TensorFlow, PyTorch, or scikit-learn. Experience with data processing frameworks like Pandas and NumPy' },
    { title: 'Analytical skills:', desc: 'Strong analytical and problem-solving skills, with the ability to interpret complex data and translate it into actionable insights.' },
    { title: 'Communication:', desc: 'Excellent written and verbal communication skills, with the ability to explain complex concepts to non-technical stakeholders.' }
  ];

  offers = [
    { title: 'Competitive salary:', desc: 'We offer a competitive salary and benefits package.' },
    { title: 'Remote work:', desc: 'Enjoy the flexibility of working from anywhere.' },
    { title: 'Professional development:', desc: 'Opportunities for continuous learning and professional growth through training programs and conferences' },
    { title: 'Innovative projects:', desc: 'Work on diverse and exciting projects that challenge your skills and creativity.' },
    { title: 'Collaborative culture:', desc: 'Be part of a team that values collaboration, innovation, and mutual support.' }
  ];

  outro = [
    "Speedily say has suitable disposal add boy. On fourth doubt miles of child. Exercise joy man children rejoiced. Yet uncommonly his ten who diminution astonished. Demesne's new manners savings staying had. Under folly balls, death own point now men. Match way she avoids seeing death. She drifts their fat off.",
    "Perceived end knowledge certainly day sweetness why cordially. Ask a quick six seven offer see among. Handsome met debating sir dwelling age material. As style lived he worse dried. Offered related so visitors we private removed. Moderate do subjects to distance."
  ];
}
