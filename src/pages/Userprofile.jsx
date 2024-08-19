import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export const Userprofile = () => {
  

    useEffect(() => {
        const userImageElement = document.querySelector('.userimage');
        const fileInputElement = document.querySelector('.uploadfile');
        const imgEditElement = document.querySelector('.img-edit');

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
                        <div className='div-details mb-2 mt-2'> <h1>name</h1> </div>
                        <div className='div-details'> emaail id</div>
                        <div className='div-details'> +91 9876543210 </div>
                        <div className='div-details'> email </div>
                        <div className='div-details'> Your Ordered Items : 0 </div>

                        <div className='div-details btns-userprofile'>
                            <div className='user-cart-btn'>Mycart</div> <div>Shopping</div>
                        </div>
                    </div>
                    <div className='user-edit-details'>
                        <div className='edit-header'>
                            <div>Your Profile</div>
                            <div className='profile-edit-btn'>
                                <i className="fa-solid fa-pen"></i> Edit
                            </div>
                        </div>
                        {/* <div className='edit-input mt-5'>
                        <div>
                            <input type="text" placeholder='Enter your new Name' disabled={isDisabled}
                                value={user ? user.name : ''}
                                onChange={(e) => (e.target.value)}
                            />
                        </div>
                        <div>
                            <input type="email" placeholder='Email Id' disabled={isDisabled}
                                value={user ? user.email : ''}
                                onChange={(e) => (e.target.value)}
                            />
                        </div>
                        <div>
                            <input type="number" placeholder='Phone Number' disabled={isDisabled}
                                value={user ? user.phone : ''}
                                onChange={(e) => (e.target.value)}
                            />
                        </div>
                        <div>
                            <textarea type="text" placeholder='Your Address' disabled={isDisabled}
                                value={user ? user.address : ''}
                                onChange={(e) => (e.target.value)}
                            />
                        </div>
                        <div className='checkbox-items'>
                            <table cellPadding={20}>
                                <tbody>
                                    <tr>
                                        <td>Male</td>
                                        <td><input type="checkbox" name='gender' className='checkbox' disabled={isDisabled} /> </td>
                                        <td>Female</td>
                                        <td><input type="checkbox" name='gender' className='checkbox' disabled={isDisabled} /> </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <button className='btn btn-primary save-profile' disabled={isDisabled}> Save</button>
                    </div> */}
                        <div className='your-orders mt-5'>
                            <div>
                                Ordered Items <br />
                                You Haven't Purchased Our Product
                            </div>
                            <div><Link to='/home' className='go-shopping'>Go To Shopping --</Link></div>
                        </div>
                    </div>
                </>
        </div>
    );
};
