import React from 'react';
import IconDivider from './IconDivider';

const AboutSection = () => {
  return ( 
    <section className="page-section bg-primary text-white mb-0" id="about">
		<div className="container">
			{/* <!-- About Section Heading--> */}
			<h2 className="page-section-heading text-center text-uppercase text-white">About</h2>
			{/* <!-- Icon Divider--> */}
        <IconDivider />
			<div className="row">
				<div className="col-lg-4 ml-auto">
					<p className="lead">Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the
						complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy
						customization.</p>
				</div>
				<div className="col-lg-4 mr-auto">
					<p className="lead">You can create your own custom avatar for the masthead, change the icon in the dividers, and
						add your email address to the contact form to make it fully functional!</p>
				</div>
			</div>
		</div>
	</section>
   );
}
 
export default AboutSection;