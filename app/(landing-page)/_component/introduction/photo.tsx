import Image from "next/image";

const Photo = () => {
  return (
    <div className="">
      <div className="relative h-80 mb-4 ">
        <Image
          alt="photo1"
          src="https://images.unsplash.com/photo-1704531815335-dab68018e8a9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          fill
          sizes="(max-width: 1268px) 213px, 33vw"
          priority
          className="rounded-sm object-cover"
        />
      </div>
      
    </div>
  );
};

export default Photo;