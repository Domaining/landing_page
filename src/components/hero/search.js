import Link from "next/link";
import React from "react";

const Search = () => {
  return (
    <section>
      <div className="flex flex-col md:flex-row w-full  justify-center font-extrabold mb-10">
        <div>
          <input
            type="text"
            placeholder="Search your preferred name.ftm"
            className="w-full md:w-[373px] h-[56px] rounded-[100px] text-dark-grey md:mr-4 mb-3 px-6"
          />
        </div>
        <div>
          <Link href="/app">
            <button
              className={[
                "underlineFromLeft", // css code in global.css
                "font-bold bg-blue1 w-full  md:w-[129px] h-[56px] rounded-[40px] text-white",
              ].join(" ")}
            >
              Search
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Search;
