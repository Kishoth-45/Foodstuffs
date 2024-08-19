import { useState, useEffect } from 'react';

const useUserImage = () => {
    const [userImage, setUserImage] = useState(null);

    const userimagefetch=()=>{
        const savedImage = localStorage.getItem('userImage');
        if (savedImage) {
            setUserImage(savedImage);
        }
    }

    useEffect(() => {
        userimagefetch();
    }, []);

    return userImage;
};

export default useUserImage;
