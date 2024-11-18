import React, { useState } from "react";
import Image from "next/image";
import logo from "../../../public/logo.webp";

const Contacts = ({ data, selectedContact, setSelectedContact, minimized }) => {
  const [expanded, setExpanded] = useState(true);
  const handleContactClick = () => {
    setSelectedContact(
      selectedContact && selectedContact.id === data.id ? null : data
    );
  };

  return (
    <>
      {/* Main Contact Item */}
      <div
        className="flex items-center justify-between gap-4 p-2 hover:bg-gray-200 cursor-pointer"
        onClick={handleContactClick} // Handle click
      >
        <div className="w-full flex items-center gap-2">
          {minimized && (
            <figure className="w-full h-14 border rounded-full flex items-center justify-center">
              <Image
                src={logo}
                width={100}
                height={100}
                alt="User logo"
                className="w-[90%] h-[90%] rounded-full object-cover"
              />
            </figure>
          )}
          {!minimized && (
            <figure className="w-[25%] h-14 border rounded-full flex items-center justify-center">
              <Image
                src={logo}
                width={100}
                height={100}
                alt="User logo"
                className="w-[90%] h-[90%] rounded-full object-cover"
              />
            </figure>
          )}
          {!minimized && (
            <>
              <div className="w-[60%] flex flex-col ">
                <div>
                  <p className="text-sm font-medium">{data.name || ""}</p>
                </div>
                <div>
                  <p className="w-4/5 text-xs text-gray-600 truncate">
                    {data.lastMessage?.text || "No message"}
                  </p>
                </div>
                <h3 className="text-xs text-gray-400 truncate">
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
              <button className="w-[9%] h-[5%] flex items-center justify-center relative ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
                  />
                </svg>
              </button>
            </>
          )}
        </div>
      </div>

      {/* Detailed view if a contact is selected */}
      {selectedContact && selectedContact.id === data.id && (
        <div
          className={`w-96 ${
            expanded ? "h-96" : "h-16"
          } border border-gray-300 absolute bottom-0 right-72 rounded-lg bg-slate-100 flex flex-col`}
        >
          <div
            className={`flex items-center gap-4 relative border ${
              expanded ? "m-1" : "m-[2px] rounded-md"
            }`}
          >
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
            <div className="ml-auto flex ">
              <button
                className="w-10 h-4 text-xl"
                onClick={() => setExpanded(false)}
              >
                -
              </button>
              <button
                className="w-10 h-4 text-xl"
                onClick={() => setExpanded(true)}
              >
                +
              </button>
              <button
                className="w-10 h-4 text-xl"
                onClick={() => setSelectedContact(null)}
              >
                x
              </button>
            </div>
          </div>

          <div className="w-full h-[60%] ">
            <div
              className={`flex items-center gap-4 relative ${
                expanded ? "m-1" : "m-[2px] rounded-md"
              }`}
            >
              <figure className="w-14 h-14 border rounded-full flex items-center justify-center">
                <Image
                  src={logo}
                  width={100}
                  height={100}
                  alt="User logo"
                  className="w-[90%] h-[90%] rounded-full object-cover"
                />
              </figure>
              <div className="flex flex-col w-4/5">
                <div className="my-1">
                  <p className="text-sm font-medium border border-gray-300 p-2 rounded-md">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Veritatis quibusdam eum dolore. Sapiente consectetur facere
                    officia vel? Doloribus nisi molestiae ullam, illum, esse
                    maxime eveniet dolore assumenda earum vel nobis.
                  </p>
                </div>
                <div className="my-1">
                  <p className="text-sm font-medium border border-gray-300 p-2 rounded-md bg-blue-400 text-white">
                    Message sent from user
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full h-10  my-1">
            <input
              type="text"
              className="w-[95%] p-2 rounded-md focus:outline-none text-black ml-2 bg-gray-300"
              placeholder="Type a message..."
            />
          </div>
          <div className="w-full h-10  my-1">
            <button className="w-10 h-10 px-2 py-1 border border-gray-300 rounded-md mx-1 ml-2">
              btn!
            </button>
            <button className="w-10 h-10 px-2 py-1 border border-gray-300 rounded-md mx-1">
              btn
            </button>
            <button className="w-10 h-10 px-2 py-1 border border-gray-300 rounded-md mx-1">
              btn
            </button>
            <button className="w-16 h-10 px-2 py-1 border border-gray-300 rounded-md ml-40">
              send
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Contacts;
