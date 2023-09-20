"use client";
import React, { useContext, useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Input,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
} from "@nextui-org/react";
import { SearchIcon } from "./SearchIcon";
import { useRouter } from "next/navigation";
import { Central } from "@/context/ContextApi";
import axios from "axios";
import Link from "next/link";
import { toast } from "react-toastify";

const Nev = () => {
  const router = useRouter();
  const [input, setInput] = useState("");

  const [searchData, setSearchData, isLoading, setisLoading] =
    useContext(Central);

  const searchingImageHendler = async (e) => {
    e.preventDefault();
    if (input.length < 1 || input.trim() === "") {
      toast.error("Please enter valid input");
    } else {
      try {
        const { data } = await axios.get(
          `https://api.unsplash.com/search/photos?client_id=Cjg971k-TOJCHGcnCsd4G-Fnk92KMy2Z03E1eNolX58&page=1&query=${input}`
        );
        setSearchData(data.results);
        setInput("");
        router.push("/search");
      } catch (error) {
        toast.error(error.message);
        // console.log(error);
      }
    }
  };

  return (
    <Navbar className="fixed shadow-lg " isBordered maxWidth="xl">
      <NavbarContent justify="start">
        <Link href="/">
          <NavbarBrand className="mr-4">
            <svg
              width="32"
              height="32"
              className="UP8CN"
              viewBox="0 0 32 32"
              version="1.1"
              aria-labelledby="unsplash-home"
              aria-hidden="false"
            >
              <desc lang="en-US">Unsplash logo</desc>
              <title id="unsplash-home">Unsplash Home</title>
              <path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path>
            </svg>
            <p className="sm:block font-bold text-inherit mx-2 text-lg">
              Unsplash
            </p>
          </NavbarBrand>
        </Link>
        <NavbarContent className="hidden sm:flex gap-3">
          <NavbarItem>Features</NavbarItem>
          <NavbarItem isActive>Customers</NavbarItem>
          <NavbarItem>Integrations</NavbarItem>
        </NavbarContent>
      </NavbarContent>

      <NavbarContent as="div" className="items-center w-full" justify="end">
        <form
          className=" w-full items-center  flex gap-2"
          onSubmit={searchingImageHendler}
        >
          <SearchIcon />
          <Input
            className="border border-black rounded-xl"
            type="text"
            placeholder="Search"
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
        </form>
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform hidden md:inline-block lg:inline-block"
              color="secondary"
              name="Jason Hughes"
              size="sm"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">zoey@example.com</p>
            </DropdownItem>
            <DropdownItem key="settings">My Settings</DropdownItem>
            <DropdownItem key="team_settings">Team Settings</DropdownItem>
            <DropdownItem key="analytics">Analytics</DropdownItem>
            <DropdownItem key="system">System</DropdownItem>
            <DropdownItem key="configurations">Configurations</DropdownItem>
            <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
            <DropdownItem key="logout" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
};

export default Nev;
