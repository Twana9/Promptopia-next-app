import Image from "next/image";

const Loading = () => {
  return (
    <div className="flex-center w-full">
      <Image
        src="/public/assets/icons/loader.svg"
        height={43}
        width={43}
        alt="loader"
        className="object-contain"
      />
    </div>
  );
};
export default Loading;
