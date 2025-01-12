import React from "react";
import Link from "next/link";

export const Sidebar = () => {
  return (
    <div className="mx-2 m-auto overflow-hidden rounded-lg border p-10">
      <div className="text-center">
        <div className="flex flex-col items-center justify-center">
          <p className="text-base text-gray-400 text-left"></p>
        </div>
      </div>
      <Link href={"/workTimeConversion"}>
        <div>人時・日・月変換</div>
      </Link>
      <Link href={"/drinkPartyOrganizer"}>
        <div>飲み会幹事</div>
      </Link>
    </div>
  );
};

export default Sidebar;
