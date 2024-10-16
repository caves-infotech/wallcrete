import React from "react";
import Image from "next/image";
import logo from "../../../public/logo.webp";

const Contacts = ({ data }) => {
  return (
    <>
      <div className="flex items-center justify-between gap-4 p-2 border-b-2 border-b-gray-200 hover:bg-gray-200 cursor-pointer">
        <div className="flex items-center gap-4">
          <figure className="w-14 h-14 border rounded-full flex items-center justify-center">
            <Image
              src={logo}
              width={100}
              height={100}
              alt="User logo"
              className="w-[90%] h-[90%] rounded-full object-cover"
            />
          </figure>
          <div className="flex flex-col">
            <div>
              <p className="text-sm font-medium">
                {data.name ? data.name : ""}
              </p>
            </div>
            <div>
              <p className="text-xs text-gray-600">
                {data.lastMessage && data.lastMessage.text
                  ? data.lastMessage.text
                  : "No message"}
              </p>
            </div>
            <h3 className="text-xs text-gray-400">
              {data.lastMessage && data.lastMessage.timestamp
                ? new Date(data.lastMessage.timestamp)
                    .toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                      hour12: true,
                    })
                    .toLocaleLowerCase()
                : ""}
            </h3>
          </div>
        </div>
        <button className="flex items-center justify-center"></button>
      </div>
    </>
  );
};

export default Contacts;
