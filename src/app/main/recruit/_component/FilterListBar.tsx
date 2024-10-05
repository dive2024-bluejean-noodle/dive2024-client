"use client";

import { IFilterItem } from "@/type/recruit";
import { filterList } from "@/data/recruit";
import { useState } from "react";
import { RiListSettingsLine } from "react-icons/ri";

export default function FilterListBar() {
  return (
    <section
      className={
        "w-screen flex gap-x-8 overflow-x-scroll items-center p-12 scroll-hidden"
      }>
      <button className={"border-1 border-gray-400 rounded-12 p-10"}>
        <RiListSettingsLine size={16} />
      </button>
      {filterList.map((item) => (
        <RecruitSelect key={item.label} filterItem={item} />
      ))}
    </section>
  );
}

function RecruitSelect({ filterItem }: { filterItem: IFilterItem }) {
  const [filterValue, setFilterValue] = useState(filterItem.defaultValue);

  return (
    <div className={"flex items-center gap-x-4 whitespace-nowrap"}>
      <select
        className={
          "w-fit border-1 border-black rounded-12 p-8 focus:outline-none"
        }
        value={filterValue}
        onChange={(e) => setFilterValue(e.target.value)}>
        {filterItem.options.map((item) => (
          <option
            key={item}
            value={item}
            className={"text-text-sub focus:outline-none"}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}
