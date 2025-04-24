import Image from "next/image";

const AHeader = () => (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md h-[88px] flex items-center px-6">
        {/* Placeholder for Header Content (e.g., Search, Notifications, Profile Dropdown) */}
        <div className="flex justify-between items-center w-full">
            <h1 className="text-xl font-semibold text-gray-800">Admin Dashboard</h1>
            <div className="flex items-center gap-4">
                {/* Example: Search Bar */}
                <input type="text" placeholder="Search..." className="px-3 py-1.5 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                {/* Example: Profile Icon */}
                <Image src='/images/users/user-01.jpg' alt="Admin" width={40} height={40} className="rounded-full" />
            </div>
        </div>
    </header>
);

// Modal Component
const Modal = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[9999] flex items-start justify-center bg-black bg-opacity-50 backdrop-blur-sm px-6 md:px-8 pt-32 pb-6 overflow-y-auto">
            <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md mx-4 mt-10">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold text-gray-7">{title}</h2>
                    <button
                        onClick={onClose}
                        className="text-gray-4 hover:text-gray-7 text-2xl"
                        aria-label="Close modal"
                    >
                        ×
                    </button>
                </div>
                <div>{children}</div>
            </div>
        </div>

    );
};


export default AHeader;
export { Modal };