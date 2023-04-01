import React from 'react';
import './job.css'

const Jobe = () => {
    return (
        <div className='job'>
            <div className='job-title'>
                <h1>Laravel Developer(Full Time) - Match Company Limited </h1>
            </div>
            <div className='apply'>
                <div className='apply-company'>
                    <h1>View Company</h1>
                </div>
                <div className='apply-job'>
                    <h1>Apply This JOb</h1>
                </div>
            </div>


            <div className='job-details'>
                <p>
                    Minimum Qualification: <span>Bachelor</span>
                </p>
                <p> Experience Level: <span>Mid level</span> </p>
                <p> Experience Length: <span>2 years</span> </p>
                <p> Location: <span> San Francisco, USA</span> </p>
                <p> Application Deadline: <span> 12/08/2022</span> </p>
                <p> Salary Range: <span> $ 105,000 - 150,000</span> </p>
                <p id='description'>Job Description</p>
            </div>


            <div className='all-descriptions'>
                <p> We are searching for a Laravel developer to build web applications for our company. In this role, you will design and create projects using
                    Laravel framework and PHP, and assist the team in delivering high-quality web applications, services, and tools for our business.</p>

                <p className='mt-8 mb-8'>To ensure success as a Laravel developer you should be adept at utilizing Laravel's GUI and be able to design a PHP application from start
                    to finish. A top-notch Laravel developer will be able to leverage their expertise and experience of the framework to independently produce
                    complete solutions in a short turnaround time.</p>
                <p className='font-bold mt-3'>
                    Laravel Developer Requirements:
                </p>
                <li> A degree in programming, computer science, or a related field.</li>
                <li>Experience working with PHP, performing unit testing, and managing APIs such as REST.</li>
                <li>  A solid understanding of application design using Laravel.</li>
                <li> Knowledge of database design and querying using SQL.</li>
                <li>
                    Proficiency in HTML and JavaScript. Experience developing in Vue is considered a plus.</li>
                <li>
                    Practical experience using the MVC architecture.</li>
                <li>
                    The ability to work on LAMP development environment</li>
                <li>  Problem-solving skills and critical mindset.
                    Great communication skills.</li>
                <li> The desire and ability to learn.</li>

                <p className='font-bold mt-3'>  Responsibilities:</p>
                <li>  Discussing project aims with the client and development team.</li>
                <li> Designing and building web applications using Laravel.</li>
                <li> Troubleshooting issues in the implementation and debug builds.</li>
                <li> Working with front-end and back-end developers on projects.</li>
                <li>
                    Testing functionality for users and the backend.</li>
                <li> Ensuring that integrations run smoothly.</li>
                <li> Scaling projects based on client feedback.</li>
                <li>   Recording and reporting on work done in Laravel.</li>
                <li> Maintaining web-based applications.</li>
                <li>Presenting work in meetings with clients and management.</li>


            </div>

        </div>
    );
};

export default Jobe;