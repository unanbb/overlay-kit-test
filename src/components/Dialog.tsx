export default function Dialog({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <>
      {isOpen && (
        <div className='fixed inset-0 flex justify-center items-center bg-black/30 z-50'>
          <div className='relative flex flex-col justify-center items-center w-[200px] h-[200px] bg-amber-100 rounded shadow-lg'>
            <button
              onClick={onClose}
              className='absolute top-2 right-2 text-red-500 hover:text-red-700'
            >
              X
            </button>
            <p>Dialog</p>
          </div>
        </div>
      )}
    </>
  );
}
