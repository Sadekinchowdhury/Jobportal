import React from 'react';
import './company.css'
import img from '../../image/figma_logo.png'
const CompanyProfile = () => {
    return (

        <div>


            <div className='items-center'>

                <div className='company'>

                    <div className='image'>
                        {/* logo */}
                        <img src={img} alt="" />
                    </div>
                    <div className='comanyname'> <p>COMPANY name</p></div>

                </div>


                <div className='description'>
                    {/* description */}
                    <h1>Company Description:For over 200 years, JPMorgan Chase & Co has provided innovative financial solutions for consumers, small businesses, corporations, governments and institutions around the world.Today, we're a leading global financial services firm with operations servicing clients in more than 100 countries.Whether we are serving customers, helping small businesses, or putting our skills to work with partners, we strive to identify issues and propose solutions that will propel the future and strengthen both our clients and our communities.© 2017 JPMorgan Chase & Co.  JPMorgan Chase is an equal opportunity and affirmative action employer Disability/Veteran.</h1>
                </div>

            </div>

            <div className='details'>
                <div className='detailsname'>
                    <h1 >Company Details</h1>
                </div>
                <div className='property'>
                    <p>Website:    www.abc.com</p>
                    <p>Website:    www.abc.com</p>
                    <p>Website:    www.abc.com</p>
                    <p>Website:    www.abc.com</p>
                    <p>Website:    www.abc.com</p>
                    <p>Website:    www.abc.com</p>
                    <p>Website:    www.abc.com</p>
                    <p>Website:    www.abc.com</p>
                </div>
            </div>


        </div>
    );
};

export default CompanyProfile;