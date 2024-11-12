import { useState } from "react";
import { FaUser, FaPhoneAlt, FaLocationArrow, FaMailchimp, FaTwitter,
    FaInstagram, FaGooglePlay, FaArrowDown,
    FaArrowUp, FaCartPlus
 } from "react-icons/fa";
import PropTypes from 'prop-types';

export const Contact = ({
    firstname,
    lastname,
    emailaddress,
    email,
    phonenumber,
    message,
    selectsub,
    onChangeFirstName,
    onChangeLastName,
    onChangeEmailAddress,
    onChangeEmail,
    onChangePhoneNumber,
    onChangeMessage,
    onChangeSelectSub,
    onSubmitDetails,
    onSubmitEmail,
}) => {
    const [dropDownMenu, setDropDownMenu] = useState(false);
    const [error, setError] = useState('');
    const [emailError, setEmailError] = useState('');

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const newError = {};

        if(!firstname) newError.firstname = `This box cannot be empty`;
        if(!lastname) newError.lastname = `This box cannot be empty`;        
        if(!phonenumber) newError.phonenumber = `This box cannot be empty`;
        if(!message) newError.message = `Please provide a message`;
        if(!email || !validateEmail(email)) newError.email = (`Provide a valid email address`);
        if(!selectsub) newError.selectsub = `Select a subject`;

        setError(newError);
        if(Object.keys(newError).length === 0){
            onSubmitDetails();            
        }

    }

    const handleSubmitEmail = (e) => {
        e.preventDefault();

        const errorEmail = {};

        if(!emailaddress || !validateEmail(emailaddress)) errorEmail.emailaddress = (`Please provide a valid email address`);


        setEmailError(errorEmail);
        if(Object.keys(errorEmail).length === 0){
            onSubmitEmail();
        }

    }

    return(
        <div className="bg-neutral-100 h-full w-full ">
            <div className="flex flex-col justify-center items-center w-full">
                <header className=" flex justify-between items-start py-6 px-20 w-full">
                    <div className="w-8 h-8 p-2 flex justify-center items-center rounded-full border-2 border-gray-600"><h2 className="text-black text-xl font-semibold">E</h2></div>
                    <div className="flex space-x-6 items-start">
                        <ul className="flex space-x-4 items-start ">
                            <li className="header-link"><a href="">Home</a></li>                           
                            <li className="header-link relative"><button href="" 
                            onClick={() => {setDropDownMenu(!dropDownMenu)}}
                            >Features
                            <img src={dropDownMenu ? <FaArrowDown className="header-arr"/> : <FaArrowUp className="header-arr"/>} alt="" />
                            </button>
                                {dropDownMenu && (
                                    <ol className="bg-black mt-3 px-3 py-2 rounded-sm flex flex-col space-y-1 items-start">
                                    <li className="header-link"><a href="">Policy</a></li>
                                    <li className="header-link"><a href="">Address</a></li>
                                    </ol>
                                )}
                            </li>                           
                            <li className="header-link"><a href="">Blog</a></li>                           
                            <li className="header-link"><a href="">Shop</a></li>                           
                            <li className="header-link"><a href="">About</a></li>                           
                            <li className="header-link"><a href="">Contact</a></li>                           
                        </ul>

                        <div className="flex space-x-4 items-center">
                            <div className="w-8 h-8 rounded-full border-2 border-gray-400 flex justify-center items-center "><FaUser className="text-gray-400 text-base "/></div>
                            <div className="w-8 h-8 rounded-full border-2 border-gray-400 flex justify-center items-center "><FaCartPlus className="text-gray-400 text-base "/></div>
                        </div>
                    </div>
                </header>

                <main className="mt-4 w-full px-20">
                    <div className="flex flex-col space-y-3 justify-center items-center">
                        <h3 className="text-black text-3xl font-bold capitalize">Contact us</h3>
                        <p className="text-gray-400 textlg font-semibold">
                            Any question or remarks? Just write us a message!
                        </p>
                    </div>

                    <section className="p-2 w-full rounded-md bg-white mt-6 flex space-x-4 items-start ">
                        <div className="w-1/2 bg-black rounded-md px-8 pt-14 pb-8 flex flex-col justify-center items-start">
                            <div className="flex flex-col space-y-2">
                            <h3 className="text-white text-2xl font-medium capitalize">
                                Contact information
                            </h3>
                            <p className="text-gray-400 text-base font-semilight">
                                Say something to start a live chat!
                            </p>
                            </div>

                            <div className="flex flex-col space-y-5 items-start mt-20">
                                <div className="flex space-x-4 items-center">
                                    <FaPhoneAlt className="contact-icon"/>
                                    <p className="text-gray-300 font-bold text-sm">+1012 3456 789</p>
                                </div>

                                <div className="flex space-x-4 items-center">
                                    <FaMailchimp className="contact-icon"/>
                                    <p className="text-gray-300 font-bold text-sm">whatdoyouwant@gmail.com</p>
                                </div>

                                <div className="flex space-x-4 items-center">
                                    <FaLocationArrow className="contact-icon"/>
                                    <p className="text-gray-300 font-bold text-sm">+1012 3456 789</p>
                                </div>
                            </div>

                            <div className="flex space-x-6 items-center mt-24 ">
                                <div className="social-icons">
                                    <a href="https://www.x.com"><FaTwitter className="social"/></a>
                                </div>

                                <div className="social-icons">
                                    <a href="https://www.instagram.com"><FaInstagram className="social"/></a>
                                </div>

                                <div className="social-icons">
                                    <a href="https://www.googleplay.com"><FaGooglePlay className="social"/></a>
                                </div>
                            </div>
                        </div>

                        <div className="w-1/2 bg-transparent py-5 px-3">
                            <form action="" onSubmit={handleSubmit}>
                                <div className="grid grid-cols-2 gap-x-8 gap-y-9 w-full">
                                    <div className="w-full flex flex-col items-start">
                                    <label htmlFor="" className="lab">First Name</label>
                                    <input className="inp" type="text" value={firstname} onChange={onChangeFirstName} />
                                    {error.firstname && (
                                        <p className="err">{error.firstname}</p>
                                    )}
                                    </div>

                                    <div className="w-full flex flex-col items-start">
                                    <label htmlFor="" className="lab">Last Name</label>
                                    <input className="inp" type="text" value={lastname} onChange={onChangeLastName} />
                                    {error.lastname && (
                                        <p className="err">{error.lastname}</p>
                                    )}
                                    </div>

                                    <div className="w-full flex flex-col items-start">
                                    <label htmlFor="" className="lab">Email</label>
                                    <input className="inp" type="text" value={email} onChange={onChangeEmail} />
                                    {error.email && (
                                        <p className="err">{error.email}</p>
                                    )}
                                    </div>

                                    <div className="w-full flex flex-col items-start">
                                    <label htmlFor="" className="lab">Phone number</label>
                                    <input className="inp" type="text" value={phonenumber} onChange={onChangePhoneNumber} />
                                    {error.phonenumber && (
                                        <p className="err">{error.phonenumber}</p>
                                    )}
                                    </div>
                                </div>

                                <div className="mt-10">
                                    <label htmlFor="" className="text-black text-base font-bold capitalize">
                                        Select subject?
                                    </label>
                                    <div className="flex space-x-4 items-center mt-2">
                                        <div className="flex space-x-3 items-center">
                                            <input type="checkbox" className="subj" name="selectsub" value="Inquiry" onChange={onChangeSelectSub} checked={selectsub === "Inquiry"} />
                                            <label htmlFor="" className="subj-select" >General inquiry</label>
                                        </div>

                                        <div className="flex space-x-3 items-center">
                                            <input type="checkbox" className="subj" name="selectsub" value="General" onChange={onChangeSelectSub} checked={selectsub === "General"} />
                                            <label htmlFor="" className="subj-select">General inquiry</label>
                                        </div>

                                        <div className="flex space-x-3 items-center">
                                            <input type="checkbox" className="subj" name="selectsub" value="Department" onChange={onChangeSelectSub} checked={selectsub === "Department"} />
                                            <label htmlFor="" className="subj-select">General inquiry</label>
                                        </div>

                                        <div className="flex space-x-3 items-center">
                                            <input type="checkbox" className="subj" name="selectsub" value="Position" onChange={onChangeSelectSub} checked={selectsub === "Position"} />
                                            <label htmlFor="" className="subj-select">General inquiry</label>
                                        </div>
                                    </div>
                                        {error.selectsub && (
                                            <p className="err">{error.selectsub}</p>
                                        )}
                                </div>

                                <div className="w-full flex flex-col items-start mt-7">
                                    <label htmlFor="" className="lab">Message</label>
                                    <input className="inp" type="text" placeholder="Write your message" value={message} onChange={onChangeMessage} />
                                    {error.message && (
                                        <p className="err">{error.message}</p>
                                    )}
                                </div>

                                <div className="flex place-content-end mt-7">
                                    <button type="submit" className="btn">
                                        Send Message
                                    </button>
                                </div>


                            </form>
                        </div>

                    </section>

                </main>

                <footer className="bg-black py-6 px-16 w-full flex flex-col justify-center items-center mt-9">
                    <div className="py-5 border-b-2 border-b-neutral-600 w-full flex justify-center items-center">
                        <div className="w-8 h-8 p-2 flex justify-center items-center rounded-full border-2 border-gray-700 border-b-2 border-b-gray-700"><h2 className="text-neutral-600 text-xl font-semibold">E</h2></div>
                    </div>

                    <div className="px-2 flex justify-between items-start w-full mt-8">
                        <div className="flex flex-col space-y-4 items-start ">
                            <h2 className="text-white text-lg font-semibold capitalize">Reach us</h2>
                                <div className="flex space-x-6 items-center">
                                    <FaPhoneAlt className="contact-icon"/>
                                    <p className="text-gray-300 font-bold text-sm">+1012 3456 789</p>
                                </div>

                                <div className="flex space-x-6 items-center">
                                    <FaMailchimp className="contact-icon"/>
                                    <p className="text-gray-300 font-bold text-sm">whatdoyouwant@gmail.com</p>
                                </div>

                                <div className="flex space-x-6 items-center">
                                    <FaLocationArrow className="contact-icon"/>
                                    <p className="text-gray-300 font-bold text-sm">+1012 3456 789</p>
                                </div>
                        </div>

                        <div className="flex flex-col space-y-3 items-start">
                            <h2 className="footer-links">Company</h2>
                            <ul className=" flex flex-col space-y-3">
                                <li className="foot-link"><a href="">About</a></li>
                                <li className="foot-link"><a href="">Contract</a></li>
                                <li className="foot-link"><a href="">Blogs</a></li>                                
                            </ul>
                        </div>

                        <div className="flex flex-col space-y-3 items-start">
                            <h2 className="footer-links">Legal</h2>
                            <ul className=" flex flex-col space-y-3">
                                <li className="foot-link"><a href="">Privacy Policy</a></li>
                                <li className="foot-link"><a href="">Terms & services</a></li>
                                <li className="foot-link"><a href="">Terms of use</a></li>
                                <li className="foot-link"><a href="">Refund policy</a></li>
                            </ul>
                        </div>

                        <div className="flex flex-col space-y-3 items-start">
                            <h2 className="footer-links">Quick links</h2>
                            <ul className=" flex flex-col space-y-3">
                                <li className="foot-link"><a href="">Techlabz keybox</a></li>
                                <li className="foot-link"><a href="">Downloads</a></li>
                                <li className="foot-link"><a href="">Forum</a></li>                                
                            </ul>
                        </div>

                        <form action="" onSubmit={handleSubmitEmail}>
                            <div className="bg-neutral-900 rounded-md py-3 px-3 flex flex-col space-y-3 items-start w-96 h-auto">
                                <label htmlFor="" className="text-white font-bold text-lg capitalize">Join our newsletter</label>
                                <div className="flex w-full h-9">
                                    <input className="newsletter-email" type="text" placeholder="Your email address" value={emailaddress} onChange={onChangeEmailAddress} />
                                    <input type="submit" className="bg-black text-gray-300 text-base font-medium px-5 rounded-e-md cursor-pointer" value="Subscribe" />
                                </div>
                                {emailError.emailaddress && (
                                    <p className="err">{emailError.emailaddress}</p>
                                )}
                                <div>
                                    <p className="text-neutral-600 text-base font-medium ">
                                        <span>* </span>
                                        Will send you weekly updates for your better tool management.
                                    </p>
                                </div>

                            </div>
                        </form>

                    </div>

                </footer>
            </div>
            
        </div>
    )
}
Contact.propTypes = {
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    emailaddress: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phonenumber: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    selectsub: PropTypes.string.isRequired,
    onChangeFirstName: PropTypes.func.isRequired,
    onChangeLastName: PropTypes.func.isRequired,
    onChangeEmail: PropTypes.func.isRequired,
    onChangeEmailAddress: PropTypes.func.isRequired,
    onChangePhoneNumber: PropTypes.func.isRequired,
    onChangeMessage: PropTypes.func.isRequired,
    onChangeSelectSub: PropTypes.func.isRequired,
    onSubmitDetails: PropTypes.func.isRequired,
    onSubmitEmail: PropTypes.func.isRequired,
}