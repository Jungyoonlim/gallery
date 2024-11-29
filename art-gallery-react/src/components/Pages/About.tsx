import React from 'react';

const About: React.FC = () => {
    return (
        <div className="flex flex-col pt-16 pl-16 
            lg:pt-12 lg:pl-12
            md:pt-8 md:pl-8
            sm:pt-6 sm:pl-6">
            <div className="max-w-3xl">
                <p className="font-inter text-[24px] leading-[30px] text-black
                    lg:text-[22px] lg:leading-[28px]
                    md:text-[20px] md:leading-[26px]
                    sm:text-[18px] sm:leading-[24px]">
                    Jungyoon Lim (b. 1999, Seoul, Korea) is a design engineer. 
                    
                    <div className="mt-12 
                        lg:mt-10 
                        md:mt-8 
                        sm:mt-6">
                        She spent her childhood drawing and painting, <br />
                        her teenage years reading classics, <br />
                        and her early 20s studying math and philosophy, <br />
                        but now she designs and codes digital objects.
                    </div>
                </p>
            </div>
        </div>
    );
};

export default About;