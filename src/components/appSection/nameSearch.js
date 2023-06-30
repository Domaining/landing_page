import React from "react";

const NameSearch = () => {
  return (
    <section>
      <div className="flex flex-col w-full  justify-center items-center font-extrabold mb-10">
        <div>
          <input
            type="text"
            placeholder="Search your preferred name.fan"
            className="w-full md:w-[450px] h-[56px] rounded-[100px] text-dark-grey px-6 mb-3"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Your alias"
            className="w-full md:w-[450px] h-[56px] rounded-[100px] text-dark-grey px-6 mb-3"
          />
        </div>
        <button
          className={[
            "font-bold bg-blue1 w-full  md:w-[450px] h-[56px] rounded-[40px] text-white",
          ].join(" ")}
        >
          Search
        </button>
      </div>
    </section>
  );
};

export default NameSearch;
