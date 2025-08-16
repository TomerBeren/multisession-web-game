interface ToastProps {
  message: string;
  onClose: () => void;
}

export const Toast = ({ message, onClose }: ToastProps) => {
  return (
    <div className="fixed top-4 right-4 z-50 animate-in slide-in-from-top duration-300">
      <div className="bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center space-x-3">
        <span>⚠️</span>
        <span>{message}</span>
        <button 
          className="text-white hover:text-red-200 ml-2"
          onClick={onClose}
        >
          ✕
        </button>
      </div>
    </div>
  );
};
