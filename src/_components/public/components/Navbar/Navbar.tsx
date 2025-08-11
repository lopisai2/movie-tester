"use client";
import "./styles.css";
import "./navbarDropdown.styles.css";
import movieTesterLight from "@/_assets/logos/movieTesterLight.png";
import { StrapiFinalDataPage } from "@/_interfaces/StrapiData.interface";
import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import SearchBar from "../SearchBar/SearchBar";
import { ThemeToggle } from "@/_components/ThemeToggle";

const Navbar: FC<{ navbarData: StrapiFinalDataPage | null }> = ({}) => {
  return (
    <nav className='public-navbar-wrapper'>
      <div className='public-navbar-wrapper-top-gradient' />
      <div className='public-navbar-container'>
        <div className='navbar-container'>
          <Link href={"/"} className='logo-container'>
            <Image
              src={movieTesterLight.src}
              alt='logo'
              width={75}
              height={75}
              style={{
                borderRadius: "50%",
              }}
            />
          </Link>
          <div className='navbar-container-items'>
            <SearchBar />
            <div className='navbar-container-items-buttons'>
              {[{}]?.map((item, index) =>
                true ? (
                  <Link
                    key={index}
                    href={"/favorites"}
                    className={`${"public-standard-btn navbar-buttons"}`}
                  >
                    Lista de visualización
                  </Link>
                ) : null
              )}
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
