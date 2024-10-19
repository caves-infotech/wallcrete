import React, { useState } from "react";
import Image from "next/image";
import logo from "../../../public/logo.webp";

const Contacts = ({ data, selectedContact, setSelectedContact }) => {
  const handleContactClick = () => {
    setSelectedContact(
      selectedContact && selectedContact.id === data.id ? null : data
    );
  };

  return (
    <>
      {/* Main Contact Item */}
      <div
        className="flex items-center justify-between gap-4 p-2 border-b-2 border-b-gray-200 hover:bg-gray-200 cursor-pointer"
        onClick={handleContactClick} // Handle click
      >
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
              <p className="text-sm font-medium">{data.name || ""}</p>
            </div>
            <div>
              <p className="text-xs text-gray-600 truncate">
                {data.lastMessage?.text || "No message"}
              </p>
            </div>
            <h3 className="text-xs text-gray-400">
              {data.lastMessage?.timestamp
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
        <button className="flex items-center justify-center">$</button>
      </div>

      {/* Detailed view if a contact is selected */}
      {selectedContact && selectedContact.id === data.id && (
        <div className="w-96 h-96 border border-gray-300 absolute bottom-0 right-72 rounded-lg bg-slate-100 p-2">
          <div className="flex items-center gap-4 relative border ">
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
                  {selectedContact.name || ""}
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-600 truncate">
                  {selectedContact.lastMessage?.text || "No message"}
                </p>
              </div>
              <h3 className="text-xs text-gray-400">
                {selectedContact.lastMessage?.timestamp
                  ? new Date(selectedContact.lastMessage.timestamp)
                      .toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: true,
                      })
                      .toLocaleLowerCase()
                  : ""}
              </h3>
            </div>
            <div className="ml-auto flex gap-2">
              <button className="w-10 h-10 text-2xl  ">-</button>
              <button className="w-10 h-10 text-2xl  ">+</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Contacts;
