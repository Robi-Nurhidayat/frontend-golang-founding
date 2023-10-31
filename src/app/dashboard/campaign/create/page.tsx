import Navbar from "@/components/navbar/Navbar";

const CreateCampaign = () => {
  return (
    <div>
      <Navbar />
      <div className="px-[100px]">
        <h1 className="mb-4 text-[30px] font-medium">Dashboard</h1>
        <form action="#" className="pt-10 relative">
          <div className="flex flex-col gap-y-1.5 border px-10 py-10">
            <div className="flex items-center justify-between gap-x-4">
              <div className="flex flex-col gap-y-1 flex-1">
                <label htmlFor="campaignName" className="font-medium">
                  CAMPAIGN NAME
                </label>
                <input
                  type="text"
                  name="campaignName"
                  id="campaignName"
                  className="outline-none border px-2.5 py-2 rounded-sm text-[14px] bg-[#DDE6ED] "
                  placeholder="Contoh: Demi Gunpla Demi Istri"
                />
              </div>
              <div className="flex flex-col gap-y-1 flex-1">
                <label htmlFor="price" className="font-medium">
                  PRICE
                </label>
                <input
                  type="number"
                  name="price"
                  id="price"
                  className="outline-none border px-2.5 py-2 rounded-sm text-[14px] bg-[#DDE6ED] "
                  placeholder="Contoh: 100000"
                />
              </div>
            </div>
            <div className="flex flex-col gap-y-1">
              <label htmlFor="shortDesc" className="font-medium">
                SHORT DESCRIPTION
              </label>
              <input
                type="text"
                name="shortDesc"
                id="shortDesc"
                className="outline-none border px-2.5 py-2 rounded-sm text-[14px] bg-[#DDE6ED] "
                placeholder="Deskripsi singkat mengenai projectmu"
              />
            </div>
            <div className="flex flex-col gap-y-1">
              <label htmlFor="backer" className="font-medium">
                WHAT WILL BACKERS GET
              </label>
              <input
                type="text"
                name="backer"
                id="backer"
                className="outline-none border px-2.5 py-2 rounded-sm text-[14px] bg-[#DDE6ED] "
                placeholder="Contoh: makan gratis, nasi goreng, makanan"
              />
            </div>
            <div className="flex flex-col gap-y-1">
              <label htmlFor="description" className="font-medium">
                DESCRIPTION
              </label>

              <textarea
                name="description"
                id="description"
                className="outline-none border px-2.5 py-2 rounded-sm text-[14px] bg-[#DDE6ED] "
                cols={5}
                rows={5}
                placeholder="Isi deskripsi panjang untuk projectmu"
              ></textarea>
            </div>
          </div>
          <div className="absolute -top-2 left-0 right-0 flex items-start justify-between">
            <h2 className="font-[500]">Create New Projects</h2>
            <button
              type="submit"
              className="px-3 py-1 bg-green-500 text-white font-medium text-[18px] rounded"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default CreateCampaign;
