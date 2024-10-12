import Image from "next/image";

const Loading = () => {
  return (
    <div className="flex-center w-full">
      <Image
        src="/assets/icons/loader.svg"
        height={50}
        width={50}
        alt="loader"
        className="object-contain"
      />
    </div>
  );
};
export default Loading;
