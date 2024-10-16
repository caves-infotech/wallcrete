"use client";

import Inbox from "./Inbox";

const RightSidebar = () => {
  return (
    <aside className="fixed w-[18%] h-[88vh] border-2 border-gray-300 shadow-lg rounded-xl m-2 right-0 top-16">
      <Inbox />
    </aside>
  );
};

export default RightSidebar;
