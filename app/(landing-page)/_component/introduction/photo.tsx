import Image from "next/image";

const Photo = () => {
  return (
    <div className="">
      <div className="">
        <Image
          alt="photo1"
          src="/image1.jpg"
          fill
          sizes="(max-width: 1268px) 800px, 33vw"
          priority
          className="rounded-sm object-cover"
        />
      </div>
      
    </div>
  );
};

export default Photo;