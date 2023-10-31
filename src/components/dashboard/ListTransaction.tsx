import Image from "next/image";
import Link from "next/link";
import Test from "public/project-image.jpg";
const ListTransaction = () => {
  return (
    <>
      <div className="px-[100px] mb-10 flex flex-col gap-y-5">
        {/* project 1 */}
        <div className="h-[250px] flex gap-x-8 border items-center">
          <div className="h-full">
            <Image
              src={Test}
              alt="image"
              className="h-full w-[80%] object-cover"
            />
          </div>
          <div className=" py-4 pr-8">
            <h2 className="text-[22px] font-bold text-[#222] mb-2">
              Cari uang buat Gunpla
            </h2>
            <h5 className="mb-2 text-[18px] text-gray-500">
              Rp. 2000.000,000 - <span>12 september 2020</span>
            </h5>
          </div>
        </div>

        {/* projct 2 */}
        <div className="h-[250px] flex gap-x-8 border items-center">
          <div className="h-full">
            <Image
              src={Test}
              alt="image"
              className="h-full w-[80%] object-cover"
            />
          </div>
          <div className=" py-4 pr-8">
            <h2 className="text-[22px] font-bold text-[#222] mb-2">
              Cari uang buat Gunpla
            </h2>
            <h5 className="mb-2 text-[18px] text-gray-500">
              Rp. 2000.000,000 - <span>12 september 2020</span>
            </h5>
          </div>
        </div>
      </div>
    </>
  );
};
export default ListTransaction;
