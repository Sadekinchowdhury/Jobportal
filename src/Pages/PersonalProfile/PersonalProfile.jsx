import React from 'react';
import './Personal.css'
const PersonalProfile = () => {
    return (
        <div className='personal-profile'>
            <div className='personal-information'>
                <div className='profile'>

                    <img className='w-40 h-40 rounded-full' src="https://img.freepik.com/premium-photo/asian-handsome-man-with-mustache-smiling-laughing-white-background-soft-focus-blurry_33718-815.jpg?w=740" alt="" />


                </div>
                <div className='profile-name'>
                    <h1 >Name</h1>
                    <h2 >Fabian Laby</h2>
                </div>
                <div className='age'>
                    <p id='aged'>Age</p>
                    <p id='years'>23 Years Old</p>
                </div>
                <div className='occupation'>
                    <p id='education'>Education</p>
                    <p id='btech'>B Tech</p>
                </div>

                <div className='hobby'>
                    <p id='skill'>Skill</p>
                    <p id='react'>RectJs,etc</p>
                </div>
                <div className='quotes'>
                    <p id='text'>Don’t stop when you are tired. Stop when you are done.
                        quote by David Goggins. </p>

                    <div>
                        <p>  </p>
                    </div>
                </div>
            </div>

            <div>

                <div className='about'>
                    <p className='all'>About me</p>
                    <p >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae, quasi dolorum. Nostrum impedit dicta dolorem excepturi modi sequi eveniet fugit minima enim necessitatibus ullam, explicabo quam consequatur doloribus fugiat, molestias iure. Facilis laboriosam a quo est nam distinctio vero quidem.</p>

                    <h1 className='all'>Goal</h1>
                    <p >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam delectus dolorum amet asperiores? Tenetur sunt quibusdam quos dolores ut praesentium adipisci mollitia exercitationem repudiandae ratione dolorem, doloribus quas temporibus officiis.</p>
                </div>

                <div className='goal'>
                    <h1 className='all'>Education</h1>
                    <p className=''>
                        <li>Get clear overview of nutritional informatiom for his meals;</li>
                        <li>Set diet goals;</li>
                        <li>
                            Track progress and meet deadlines.
                        </li>

                    </p>
                </div>

                <div className='challenge'>
                    <h1 >Work Experience</h1>
                    <p >Build muscle mass and gain weight.</p>

                </div>

                <div className='concern'>
                    <h1>Project</h1>
                    <p> <li>It is not easy to make informed decisions as you need to crunch a lot of numbers: calories intake, macronutrients ratio, nutritional value.</li>
                        <li>
                            It takes time to achieve significant results and sticking to a healthy lifestyle plan.
                        </li>
                        <li>
                            There is a lot of conflicting information about what food he should eat or avoid. This makes him doubt the choices he makes.
                        </li>
                    </p>
                </div>
                <div className='motivation'>
                    <h1>Skill and others</h1>
                    <p className=''>
                        He aspires to achieve a good physique through exercise and wants to challenge himself with a marathon scheduled for next year.
                    </p>

                </div>
            </div>

        </div>
    );
};

export default PersonalProfile;