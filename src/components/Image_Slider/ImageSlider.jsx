import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

function ImageSlider({ url= 'https://picsum.photos/v2/list', limit = 5, page = 1 }) {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchImages(getUrl) {
    try {
      setLoading(true);

      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await response.json();
      
      if (data) {
        
        setImages(data);
        setLoading(false);
      }
    } catch (e) {
      setErrorMsg(e.message);
      setLoading(false);
    }
  }

  function handlePrevious() {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  }

  function handleNext() {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  }

  useEffect(() => {
    if (url !== "") fetchImages(url);
  }, [url]);



  if (loading) {
    return <div>Loading data ! Please wait</div>;
  }

  if (errorMsg !== null) {
    return <div>Error occured ! {errorMsg}</div>;
  }

  return (
    <div className='flex justify-center items-center p-3'>
      <BsArrowLeftCircleFill
        onClick={handlePrevious}
        className='mr-2 w-[40px] h-[40px]'
      />
      {images && images.length
        ? images.map((imageItem, index) => (
            <img
              key={imageItem.id}
              alt={imageItem.download_url}
              src={imageItem.download_url}
              className={`${currentSlide === index
                ? 'block'
                : 'hidden'} border-2 rounded-md w-[100%] h-[400px]`}
            />
          ))
        : null}
      <BsArrowRightCircleFill
        onClick={handleNext}
       className='ml-2 w-[40px] h-[40px]'
      />
      {/* <span className="flex absolute ">
        {images && images.length
          ? images.map((_, index) => (
              <button
                key={index}
                
                className={`${currentSlide === index
                  ? ' bg-white'
                  : 'bg-gray'} rounded-[50%] p-2 absolute h-[15px] w-[15px] cursor-pointer shadow-lg`}
                onClick={() => setCurrentSlide(index)}
              ></button>
            ))
          : null}
      </span> */}
    </div>
  );
}





export default ImageSlider