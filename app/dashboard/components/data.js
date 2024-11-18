export const predefinedProjects = [
  {
    projectId: 501,
    name: "ABC-DEF",
    members: [
      { id: "id3", name: "Member 3", role: "creator" },
      { id: "id4", name: "Member 4", role: "employee" },
    ],
    status: "ongoing",
    type: "interior",
    subtype: "commercial",
    predefinedDesigns: [],
    floors: ["ground", "first", "second"],
    location: "mumbai",
    image: "",
  },
  {
    projectId: 502,
    name: "GHI-JKL",
    members: [
      { id: "id5", name: "Member 5", role: "creator" },
      { id: "id6", name: "Member 6", role: "employee" },
    ],
    status: "completed",
    type: "exterior",
    subtype: "residential",
    predefinedDesigns: [],
    floors: ["ground"],
    location: "delhi",
  },
  {
    projectId: 503,
    name: "MNO-PQR",
    members: [
      { id: "id7", name: "Member 7", role: "creator" },
      { id: "id8", name: "Member 8", role: "employee" },
    ],
    status: "pending",
    type: "construction",
    subtype: "industrial",
    predefinedDesigns: [],
    floors: ["ground", "first"],
    location: "bangalore",
  },
  {
    projectId: 504,
    name: "STU-VWX",
    members: [
      { id: "id9", name: "Member 9", role: "creator" },
      { id: "id10", name: "Member 10", role: "employee" },
    ],
    status: "ongoing",
    type: "landscaping",
    subtype: "bunglow",
    predefinedDesigns: [],
    floors: ["ground", "first", "second", "third"],
    location: "chennai",
  },
  {
    projectId: 505,
    name: "YZA-BCD",
    members: [
      { id: "id11", name: "Member 11", role: "creator" },
      { id: "id12", name: "Member 12", role: "employee" },
    ],
    status: "completed",
    type: "interior",
    subtype: "institutional",
    predefinedDesigns: [],
    floors: ["ground", "first"],
    location: "pune",
  },
  {
    projectId: 506,
    name: "EFG-HIJ",
    members: [
      { id: "id13", name: "Member 13", role: "creator" },
      { id: "id14", name: "Member 14", role: "employee" },
    ],
    status: "ongoing",
    type: "construction",
    subtype: "residential",
    predefinedDesigns: [],
    floors: ["ground", "first", "second"],
    location: "hyderabad",
  },
  {
    projectId: 507,
    name: "KLM-NOP",
    members: [
      { id: "id15", name: "Member 15", role: "creator" },
      { id: "id16", name: "Member 16", role: "employee" },
    ],
    status: "pending",
    type: "exterior",
    subtype: "commercial",
    predefinedDesigns: [],
    floors: ["ground"],
    location: "kochi",
  },
  {
    projectId: 508,
    name: "QRS-TUV",
    members: [
      { id: "id17", name: "Member 17", role: "creator" },
      { id: "id18", name: "Member 18", role: "employee" },
    ],
    status: "ongoing",
    type: "interior",
    subtype: "industrial",
    predefinedDesigns: [],
    floors: ["ground", "first", "second", "third"],
    location: "kolkata",
  },
  {
    projectId: 509,
    name: "WXY-ZAB",
    members: [
      { id: "id19", name: "Member 19", role: "creator" },
      { id: "id20", name: "Member 20", role: "employee" },
    ],
    status: "completed",
    type: "landscaping",
    subtype: "institutional",
    predefinedDesigns: [],
    floors: ["ground", "first", "second"],
    location: "jaipur",
  },
  {
    projectId: 510,
    name: "CDE-FGH",
    members: [
      { id: "id21", name: "Member 21", role: "creator" },
      { id: "id22", name: "Member 22", role: "employee" },
    ],
    status: "ongoing",
    type: "construction",
    subtype: "bunglow",
    predefinedDesigns: [],
    floors: ["ground", "first", "second", "third"],
    location: "lucknow",
  },
  {
    projectId: 511,
    name: "IJK-LMN",
    members: [
      { id: "id23", name: "Member 23", role: "creator" },
      { id: "id24", name: "Member 24", role: "employee" },
    ],
    status: "pending",
    type: "exterior",
    subtype: "residential",
    predefinedDesigns: [],
    floors: ["ground", "first"],
    location: "nagpur",
  },
];

export const predefinedDesigns = [
  { id: 600, name: "Working" },
  { id: 601, name: "Furniture" },
  { id: 602, name: "Structural" },
  { id: 603, name: "Electrical" },
  { id: 604, name: "Plumbing" },
  { id: 605, name: "Ceiling" },
  // { id: 606, name: "Documents" },
  // { id: 607, name: "Quotation" },
  // { id: 608, name: "Boqs" },
  // { id: 609, name: "Orders" },
  // { id: 610, name: "Reports" },
];

export const dropdownButtons = [
  { id: 608, name: "Boqs" },
  { id: 609, name: "Orders" },
  { id: 610, name: "Reports" },
];

export const addIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="white"
    className="h-6 w-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
    />
  </svg>
);

export const contacts = [
  {
    id: "1",
    name: "Peter B. Parker",
    phoneNumber: "+9133445566",
    role: "client",
    group: "groupid1",
    profilePicture:
      "https://render.fineartamerica.com/images/rendered/search/print/8/8/break/images/artworkimages/medium/2/shaken-not-stirred-peter-ruck.jpg", // Replace with a valid image URL
    lastMessage: {
      text: "See you later!",
      timestamp: "2024-10-13T18:30:00Z",
      isRead: true,
    },
  },
  {
    id: "2",
    name: "Bruce Wayne",
    phoneNumber: "+9187654321",
    role: "owner",
    group: "groupid1",
    profilePicture:
      "https://pixels.com/featured/red-moon-night-tithi-luadthong.html", // Replace with a valid image URL
    lastMessage: {
      text: "Let's meet tomorrow.",
      timestamp: "2024-10-13T18:35:00Z",
      isRead: false,
    },
  },
  {
    id: "3",
    name: "Clark Kent",
    phoneNumber: "+9198765432",
    role: "client",
    group: "goupuid1",
    profilePicture: "https://www.pexels.com/photo/345678", // Replace with a valid image URL
    lastMessage: {
      text: "Don't forget our plans!",
      timestamp: "2024-10-13T19:00:00Z",
      isRead: true,
    },
  },
  {
    id: "4",
    name: "Diana Prince",
    phoneNumber: "+9133445566",
    role: "client",
    group: "groupid2",
    profilePicture: "https://www.pexels.com/photo/456789", // Replace with a valid image URL
    lastMessage: {
      text: "See you later!",
      timestamp: "2024-10-13T18:30:00Z",
      isRead: true,
    },
  },
  {
    id: "5",
    name: "Peter Parker",
    phoneNumber: "+9176543210",
    role: "employee",
    group: "groupid2",
    profilePicture: "https://www.pexels.com/photo/567890", // Replace with a valid image URL
    lastMessage: {
      text: "Hey, did you get my message?",
      timestamp: "2024-10-13T18:45:00Z",
      isRead: false,
    },
  },
  {
    id: "6",
    name: "Wade Wilson",
    phoneNumber: "+9198765432",
    role: "consultant",
    group: "groupid2",
    profilePicture: "https://www.pexels.com/photo/678901", // Replace with a valid image URL
    lastMessage: {
      text: "Just checking in!",
      timestamp: "2024-10-13T19:10:00Z",
      isRead: true,
    },
  },
  {
    id: "7",
    name: "Natasha Romanoff",
    phoneNumber: "+9112345678",
    role: "owner",
    group: "groupid2",
    profilePicture: "https://www.pexels.com/photo/789012", // Replace with a valid image URL
    lastMessage: {
      text: "See you at the meeting.",
      timestamp: "2024-10-13T19:30:00Z",
      isRead: false,
    },
  },
  {
    id: "8",
    name: "Steve Rogers",
    phoneNumber: "+9198765432",
    role: "employee",
    group: "groupid2",
    profilePicture: "https://www.pexels.com/photo/890123", // Replace with a valid image URL
    lastMessage: {
      text: "Are we still on for lunch?",
      timestamp: "2024-10-13T19:45:00Z",
      isRead: true,
    },
  },
  {
    id: "9",
    name: "Tony Stark",
    phoneNumber: "+9123456789",
    role: "consultant",
    group: "goupuid3",
    profilePicture: "https://www.pexels.com/photo/901234", // Replace with a valid image URL
    lastMessage: {
      text: "Check your emails.",
      timestamp: "2024-10-13T20:00:00Z",
      isRead: false,
    },
  },
  {
    id: "10",
    name: "Bruce Banner",
    phoneNumber: "+9187654321",
    role: "consultant",
    group: "groupid3",
    profilePicture: "https://www.pexels.com/photo/012345", // Replace with a valid image URL
    lastMessage: {
      text: "Let's discuss the project.",
      timestamp: "2024-10-13T20:15:00Z",
      isRead: true,
    },
  },
  {
    id: "11",
    name: "Barry Allen",
    phoneNumber: "+9112345678",
    role: "supplier",
    group: "groupid3",
    profilePicture: "https://www.pexels.com/photo/123456", // Replace with a valid image URL
    lastMessage: {
      text: "I'm on my way!",
      timestamp: "2024-10-13T20:30:00Z",
      isRead: false,
    },
  },
  {
    id: "12",
    name: "Hal Jordan",
    phoneNumber: "+9198765432",
    role: "employee",
    group: "",
    profilePicture: "https://www.pexels.com/photo/234567", // Replace with a valid image URL
    lastMessage: {
      text: "Can you send me the files?",
      timestamp: "2024-10-13T20:45:00Z",
      isRead: true,
    },
  },
];

// Data For All Tasks

export const all_tasks = [
  {
    id: 2,
    project_name: "project2",
    task_name: "create web",
    member_name: "member6",
    assign_date: "2024-11-13",
    target_date: "2024-10-19",
    remark: "chaitali",
    status: "completed",
    steps: [
      {
        id: 23,
        text: "Hiii",
        stepStatus: "completed"
      },
      {
        id: 24,
        text: "Hello",
        stepStatus: "completed"
      },
      {
        id: 26,
        text: "bye",
        stepStatus: "pending"
      }
    ]

  },
  {
    id: 4,
    project_name: "project3",
    task_name: "development",
    member_name: "member5",
    assign_date: "2024-11-13",
    target_date: "2024-10-22",
    remark: "edeg",
    status: "pending",
    steps: [
      {
        id: 0,
        text: "11",
        stepStatus: "pending",
      },
      {
        id: 1,
        text: "12",
        stepStatus: "pending",
      },
      {
        id: 2,
        text: "13",
        stepStatus: "completed",
      }
    ]
  },
  {
    id: 6,
    project_name: "project3",
    task_name: "create app",
    member_name: "member4",
    assign_date: "2024-10-25",
    target_date: "2024-10-25",
    remark: "fedf",
    status: "pending",
    steps: []
  },
  {
    id: 8,
    project_name: "project4",
    task_name: "deigning",
    member_name: "member3",
    assign_date: "2024-10-23",
    target_date: "2024-10-23",
    remark: "ded",
    status: "pending",
    steps: []
  },
  {
    id: 10,
    project_name: "project6",
    task_name: "deigning",
    member_name: "member2",
    assign_date: "2024-10-25",
    target_date: "2024-10-30",
    remark: "ded",
    status: "pending",
    steps: []
  },
];

export const predefinedTasks = [
  {
    id: 1,
    task_name: "create web",
  },

  {
    id: 4,
    task_name: "development",
  },
  {
    id: 6,
    task_name: "create app",
  },
  {
    id: 8,
    task_name: "deigning",
  },
];