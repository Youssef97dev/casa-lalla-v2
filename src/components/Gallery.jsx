import Image from "next/image";
import Link from "next/link";

const images = [
  "/images/casa8.jpg",
  "/images/L-42.jpg",
  "/images/gall1.jpg",
  "/images/gall2.jpg",
  "/images/gall3.jpg",
  "/images/gall4.jpg",
  // Add paths to your images here
];

const Gallery = () => {
  return (
    <div id="gallery" className="py-5 px-10 md:px-48">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-center">
        {images.map((src, index) => (
          <div
            key={index}
            className="hover:scale-105 transition-all ease-linear overflow-hidden w-full"
          >
            <Image
              src={src}
              alt={`Image ${index}`}
              layout="responsive"
              width={300}
              height={300}
              className="rounded-sm"
            />
          </div>
        ))}
      </div>
      <div className=" w-full flex justify-center items-center pt-20 ">
        <Link
          href="#"
          className="rounded-full bg-primary text-white text-3xl font-normal px-3 py-1 w-48 text-center hover:bg-primary hover:text-white transition-all ease-in-out"
        >
          RESERVE
        </Link>
      </div>
      <div className="w-full flex justify-center items-center py-20 ">
        <div className="w-full lg:w-[50%] h-fit px-10 py-8 text-center bg-primary text-white text-xl rounded-lg">
          Daily from 12:00 PM to 02:00 AM
        </div>
      </div>
    </div>
  );
};

export default Gallery;
