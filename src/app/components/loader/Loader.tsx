// Loader.tsx
const Loader = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="animate-spin border-t-4 border-[#6C00A5] border-solid rounded-full w-16 h-16"></div>
        </div>
    );
};

export default Loader;
