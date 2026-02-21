import React from 'react';

const About = () => {
    return (
        <div>
            <div className='text-center'>
                <h1 className='display-1'> <span>{'<'}</span><span>about_us</span><span>{'>'}</span> </h1>
                <p style={{ color: "khaki" }}>...we're a sourcing house situated in Dhaka;</p>
            </div>
            <div className='row g-0'>
                <div className='col-md-6 border-top border-end border-secondary'>
                    <h2 className='p-4'>...At MAZE Sourcing, we are more than just a sourcing house — we are a team of industry-driven entrepreneurs, professionals, and visionaries committed to delivering excellence in global sourcing solutions. Founded by four dynamic co-founders, MAZE Sourcing blends deep industry knowledge with sharp business acumen to serve clients with unmatched professionalism and reliability.;</h2>
                </div>
                <div className='col-md-6 border-top border-secondary'>
                    <h3>Our Leadership Team</h3>
                    <ul>
                        <li>
                            <h6>Zaheed – Chief Executive Officer (CEO)</h6>
                            <p>With a strong background as an experienced merchandiser, Zaheed brings hands-on expertise and strategic insight to our sourcing operations. His in-depth understanding of product development, quality control, and supply chain dynamics drives MAZE Sourcing's core operational excellence.</p>
                        </li>
                        <li>
                            <h6>Estiaq – Chief Operating Officer (COO)</h6>
                            <p>An accomplished businessman with a proven track record, Estiaq oversees the daily operations and ensures that all logistical and procedural aspects align with our long-term vision. His leadership ensures efficiency and consistency across all business functions.</p>
                        </li>
                        <li>
                            <h6>Shohel – Chief Business Officer (CBO)</h6>
                            <p>As an established entrepreneur, Shohel brings a strong commercial perspective to the company. His focus lies in building sustainable partnerships, scaling new opportunities, and ensuring business growth through strategic planning and client engagement.</p>
                        </li>
                        <li>
                            <h6>Mammun – Chief Marketing Officer (CMO)</h6>
                            <p>With extensive experience in sales and marketing, Mammun spearheads our market outreach and customer relationship strategies. His expertise helps MAZE Sourcing connect with clients globally and communicate our value with clarity and impact.</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default About;