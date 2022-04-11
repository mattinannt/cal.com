import React from "react";

import NavTabs from "./NavTabs";

const tabs = [
  {
    name: "upcoming",
    href: "/bookings/upcoming",
  },
  {
    name: "past",
    href: "/bookings/past",
  },
  {
    name: "cancelled",
    href: "/bookings/cancelled",
  },
];

export default function BookingsShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavTabs tabs={tabs} linkProps={{ shallow: true }} />
      <main>{children}</main>
    </>
  );
}
