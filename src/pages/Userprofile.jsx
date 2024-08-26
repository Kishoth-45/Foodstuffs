import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const Userprofile = () => {

    const [isDisabled, setIsDisabled] = useState(true);
    const [gender, setGender] = useState('');

    const handleCheckboxChange = (value) => {
      if (gender === value) {
        setGender(''); // Uncheck if the same checkbox is clicked
      } else {
        setGender(value);
      }
    };
    
   
    
    

    useEffect(() => {
        const allproducts = document.querySelector('.allproducts');
        const pages = document.querySelector('.pages');
        const category = document.querySelector('.category');

        const allicon = document.querySelector('.all-icon');
        const pageicon = document.querySelector('.page-icon');
        const caticon = document.querySelector('.cat-icon');

        const userprofile = document.querySelector('.userprofile');
        

        const userprofileover = (event) => {
            event.preventDefault();
            allproducts.classList.remove('alltool');
            category.classList.remove('categorytool');
            pages.classList.remove('pagetool');
            allicon.classList.remove('transform-icon');
            pageicon.classList.remove('transform-icon');
            caticon.classList.remove('transform-icon');
        };

        if (userprofile) {
            userprofile.addEventListener('mouseover', userprofileover);
        }

        return () => {
            if (userprofile) {
                userprofile.removeEventListener('mouseover', userprofileover);
            }
        };
    }, []);

    useEffect(() => {
        const userImageElement = document.querySelector('.userimage');
        const fileInputElement = document.querySelector('.uploadfile');
        const imgEditElement = document.querySelector('.img-edit');

        // Load saved image from localStorage
        const savedImage = localStorage.getItem('userImage');
        if (savedImage && userImageElement) {
            userImageElement.src = savedImage;
        }

        const fileInputClickHandler = (e) => {
            e.preventDefault();
            const file = e.target.files[0];
            const reader = new FileReader();

            reader.onloadend = () => {
                if (userImageElement) {
                    userImageElement.src = reader.result;
                }
                localStorage.setItem('userImage', reader.result);
            };

            if (file) {
                reader.readAsDataURL(file);
            }
        };

        const triggerFileInput = () => {
            if (fileInputElement) {
                fileInputElement.click();
            }
        };

        if (fileInputElement) {
            fileInputElement.addEventListener('change', fileInputClickHandler);
        }

        if (imgEditElement) {
            imgEditElement.addEventListener('click', triggerFileInput);
        }

        return () => {
            if (fileInputElement) {
                fileInputElement.removeEventListener('change', fileInputClickHandler);
            }
            if (imgEditElement) {
                imgEditElement.removeEventListener('click', triggerFileInput);
            }
        };
    }, []);

    useEffect(() => {
        const profileBtnElement = document.querySelector('.profile-edit-btn');
        const editInputElement = document.querySelector('.edit-input');

        const handleProfileBtnClick = () => {
            if (editInputElement) {
                editInputElement.classList.toggle('input-opacity');
                setIsDisabled(!editInputElement.classList.contains('input-opacity'));
            }
        };

        if (profileBtnElement) {
            profileBtnElement.addEventListener('click', handleProfileBtnClick);
        }

        return () => {
            if (profileBtnElement) {
                profileBtnElement.removeEventListener('click', handleProfileBtnClick);
            }
        };
    }, []);

    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [phone,setPhone]=useState('')
    const [address,setAddress]=useState('')

    const [username,setUsername]=useState('')
    const [useremail,setUseremail]=useState('')
    const [userphone,setUserphone]=useState('')
    const [Error,setError]=useState('')
    const checkInput = () => {
        if (!name) {
            setError('Name is required');
            return false;
        } else if (!email) {
            setError('Email is required');
            return false;
        } else if (!phone) {
            setError('Phone number is required');
            return false;
        } else if (!address) {
            setError('Address is required');
            return false;
        }
        setError(''); // Clear the error if all inputs are valid
        return true;
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (checkInput()) {
            setUsername(name);
            setUseremail(email);
            setUserphone(phone);
    
            // Clear the form fields after successful validation and submission
            setName('');
            setEmail('');
            setPhone('');
            setAddress('');
        }
    };

    return (
        <div className='userprofile'>
            <>
                <div className='user-details-box'>
                    <div className='user-img'>
                        <img src="Images/user.png" alt="userprofile" className='userimage' />
                        <input type="file" className='uploadfile' />
                        <label>
                            <i className="fa-solid fa-pen img-edit"></i>
                        </label>
                    </div>
                    <div className='div-details mb-2 mt-2'> <h1>{username}</h1> </div>
                    <div className='div-details'> {useremail}</div>
                    <div className='div-details'> {userphone} </div>
                    <div className='div-details'> Your Ordered Items : 0 </div>

                    <div className='div-details btns-userprofile'>
                        <div className='user-cart-btn'> <i className="fa-solid fa-basket-shopping me-1"></i> Mycart</div>
                         <div><i className="fa-solid fa-utensils"></i> Shopping</div>
                    </div>
                </div>
                <div className='user-edit-details'>
                    <div className='edit-header'>
                        <div>Your Profile</div>
                        <div className='profile-edit-btn'>
                            <i className="fa-solid fa-pen"></i> Edit
                        </div>
                    </div>
                    <form onSubmit={handleSubmit}>
                    <div className='edit-input mt-5'>
                        <div>
                            <input type="text" placeholder='Enter your new Name' disabled={isDisabled}
                               value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div>
                            <input type="email" placeholder='Email Id' disabled={isDisabled}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <input type="number" placeholder='Phone Number' disabled={isDisabled}
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </div>
                        <div>
                            <textarea type="text" placeholder='Your Address' disabled={isDisabled}
                            value={address}
                                onChange={(e) => setAddress(e.target.value)}
                            />
                        </div>
                        <div className='checkbox-items'>
                            <table cellPadding={20}>
                                <tbody>
                                    <tr>
                                        <td>Male</td>
                                        <td><input type="checkbox"
                                             checked={gender === 'male'}
                                            onChange={() => handleCheckboxChange('male')}
                                             className='checkbox' disabled={isDisabled} /> </td>
                                        <td>Female</td>
                                        <td><input type="checkbox" 
                                         checked={gender === 'female'}
                                         onChange={() => handleCheckboxChange('female')}
                                        className='checkbox' disabled={isDisabled} /> </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className='user-error'>{Error}</div>
                        </div>
                        <button className='btn btn-primary save-profile' type='submit' disabled={isDisabled}> Save</button>
                    </div>
                    </form>
                    <div className='your-orders mt-5'>
                        <div>
                            Ordered Items <br />
                            You Haven't Purchased Our Product
                        </div>
                        <div><Link to='/home' className='go-shopping'>Go To Shopping <i className="fa-solid fa-utensils"></i></Link></div>
                    </div>
                </div>
            </>
        </div>
    );
};
