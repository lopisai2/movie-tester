"use client";
import "./styles.css";
import movieTesterLight from "@/_assets/logos/movieTesterLight.png";
import { FC, Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import SearchBar from "../SearchBar/SearchBar";
import { ThemeToggle } from "@/_components/ThemeToggle";
import { BookmarkCheck } from "lucide-react";

const Navbar: FC<{ navbarData: null }> = ({}) => {
  return (
    <nav className='public-navbar-wrapper'>
      <div className='public-navbar-container'>
        <div className='navbar-container'>
          <Link
            href={"/"}
            className='logo-container'
            aria-label='Ir a la página principal'
          >
            <Image
              aria-hidden='true'
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
            <Suspense>
              <SearchBar />
            </Suspense>
            <ul className='navbar-container-items-buttons' role='menubar'>
              {[{}]?.map((item, index) =>
                true ? (
                  <li key={index} role='none'>
                    <Link
                      aria-label='Ir a la página de favoritos'
                      href={"/favorites"}
                      className={`${"public-standard-btn navbar-buttons"}`}
                      style={{ width: "150px" }}
                    >
                      <BookmarkCheck />
                      Favoritos
                    </Link>
                  </li>
                ) : null
              )}
              <li role='none'>
                <ThemeToggle />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
