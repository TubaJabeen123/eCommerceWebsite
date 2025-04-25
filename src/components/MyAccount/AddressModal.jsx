import React, { useEffect, useState } from "react";
import { auth, db } from '../../lib/firebaseConfig';
import { doc, setDoc, getDoc } from 'firebase/firestore';

const AddressModal = ({ isOpen, closeModal, onAddressChange }) => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  // Fetch user data and initialize form fields
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const unsubscribe = auth.onAuthStateChanged(async (currentUser) => {
          if (currentUser) {
            try {
              const userDocRef = doc(db, 'users', currentUser.uid);
              const userDoc = await getDoc(userDocRef);

              if (userDoc.exists()) {
                const data = userDoc.data();
                setUserData(data);
                setPhone(data.phone || '');
                setAddress(data.address || '');
              } else {
                console.log('No existing user document found');
                setPhone('');
                setAddress('');
              }
            } catch (err) {
              console.error('Error fetching user data: ', err);
            } finally {
              setLoading(false);
            }
          } else {
            setLoading(false);
          }
        });

        return () => unsubscribe();
      } catch (error) {
        console.error('Error initializing Firebase Auth Listener:', error);
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  // Close modal when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (!event.target.closest(".modal-content")) {
        closeModal();
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, closeModal]);

  // Handle address update
  const updateAddress = async () => {
    if (!auth.currentUser) {
      console.error('No authenticated user');
      return;
    }

    try {
      const userDocRef = doc(db, 'users', auth.currentUser.uid);
      await setDoc(
        userDocRef,
        {
          phone: phone.trim(),
          address: address.trim(),
          updatedAt: new Date().toISOString()
        },
        { merge: true }
      );
      
      onAddressChange(phone, address);
      closeModal();
    } catch (error) {
      console.error("Error updating address: ", error);
    }
  };

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-blue-dark/70">
        <div className="bg-white p-8 rounded-lg">
          <p>Loading user data...</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`fixed top-0 left-0 overflow-y-auto no-scrollbar w-full h-screen sm:py-20 xl:py-25 2xl:py-[230px] bg-blue-dark/70 sm:px-8 px-4 py-5 ${isOpen ? "block z-99999" : "hidden"
        }`}
    >
      <div className="flex items-center justify-center">
        <div className="w-full max-w-[1100px] rounded-xl shadow-3 bg-white p-7.5 relative modal-content">
          <button
            onClick={closeModal}
            aria-label="button for close modal"
            className="absolute top-0 right-0 sm:top-3 sm:right-3 flex items-center justify-center w-10 h-10 rounded-full ease-in duration-150 bg-meta text-body hover:text-dark"
          >
            <svg
              className="fill-current"
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.3108 13L19.2291 8.08167C19.5866 7.72417 19.5866 7.12833 19.2291 6.77083C19.0543 6.59895 18.8189 6.50262 18.5737 6.50262C18.3285 6.50262 18.0932 6.59895 17.9183 6.77083L13 11.6892L8.08164 6.77083C7.90679 6.59895 7.67142 6.50262 7.42623 6.50262C7.18104 6.50262 6.94566 6.59895 6.77081 6.77083C6.41331 7.12833 6.41331 7.72417 6.77081 8.08167L11.6891 13L6.77081 17.9183C6.41331 18.2758 6.41331 18.8717 6.77081 19.2292C7.12831 19.5867 7.72414 19.5867 8.08164 19.2292L13 14.3108L17.9183 19.2292C18.2758 19.5867 18.8716 19.5867 19.2291 19.2292C19.5866 18.8717 19.5866 18.2758 19.2291 17.9183L14.3108 13Z"
                fill=""
              />
            </svg>
          </button>

          <div>
            <h2 className="text-2xl font-bold mb-6">Update Contact Information</h2>
            
            <div className="flex flex-col lg:flex-row gap-5 sm:gap-8 mb-5">
              <div className="w-full">
                <label htmlFor="phone" className="block mb-2.5">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Enter phone number"
                  className="rounded-md border border-gray-3 bg-gray-1 placeholder:text-dark-5 w-full py-2.5 px-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
                />
              </div>

              <div className="w-full">
                <label htmlFor="address" className="block mb-2.5">
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Enter full address"
                  className="rounded-md border border-gray-3 bg-gray-1 placeholder:text-dark-5 w-full py-2.5 px-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
                />
              </div>
            </div>

            <div className="flex justify-end gap-4 mt-8">
              <button
                onClick={closeModal}
                className="font-medium text-gray-700 bg-gray-200 py-3 px-7 rounded-md ease-out duration-200 hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={updateAddress}
                className="font-medium text-white bg-blue py-3 px-7 rounded-md ease-out duration-200 hover:bg-blue-dark"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressModal;