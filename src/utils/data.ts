import { facebook, instagram, twitter, youtube } from "../assets";
import { FollowerInfo } from "../common/types";

export const followersData: FollowerInfo[] = [
  {
    id: 1,
    username: "@nathanf",
    totalAmount: "1987",
    todayAmount: "12",
    icon: facebook,
    up: true,
    color: "#178FF5",
  },
  {
    id: 2,
    username: "@nathanf",
    totalAmount: "1044",
    todayAmount: "99",
    icon: twitter,
    up: true,
    color: "#1DA1F2",
  },
  {
    id: 3,
    username: "@realnathanf",
    totalAmount: "11k",
    todayAmount: "1099",
    icon: instagram,
    up: true,
    color: "linear-gradient(225deg, #DF4896 0%, #EE877E 50.91%, #FDC366 100%)",
  },
  {
    id: 4,
    username: "Nathan F.",
    totalAmount: "8239",
    todayAmount: "144",
    icon: youtube,
    up: false,
    color: "#C4032B",
  },
];
