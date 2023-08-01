"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

export default function Nav() {
  const [providers, setProviders] = useState(null);
  const [toggleDropDown, setToggleDropDown] = useState(false);

  useEffect(() => {
    async function findProviders() {
      const res = await getProviders();
      setProviders(res);
    }
    findProviders();
  }, []);

  const isUserLoggedIn = true;

  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          alt="Promptinuation Logo"
          width={30}
          height={30}
          className="object-contain"
          src="/assets/images/logo.svg"
        />
        <p className="logo_text">Promptopia</p>
      </Link>
      {/*Desktop Navigation*/}
      <div className="sm:flex hidden">
        {isUserLoggedIn ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="/create-prompt" className="black_btn">
              Create Prompt
            </Link>
            <button className="outline_btn" type="button" onClick={signOut}>
              Sign Out
            </button>
            <Link href="/profile">
              <Image
                width={37}
                height={37}
                className="rounded-full"
                src="/assets/images/logo.svg"
                alt="image profile"
              ></Image>
            </Link>
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider: unknown) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className="black_btn"
                >
                  Sign In
                </button>
              ))}
          </>
        )}
      </div>
      {/*Mobile Navigation*/}
      <div className="sm:hidden flex relative">
        {isUserLoggedIn ? (
          <div className="flex">
            <Image
              alt="Promptinuation Logo"
              width={30}
              height={30}
              className="object-contain"
              src="/assets/images/logo.svg"
              onClick={() => {
                setToggleDropDown((prev) => !prev);
              }}
            />
            {toggleDropDown ? (
              <div className="dropdown">
                <Link
                  href="/profile"
                  className="dropdown_link"
                  onClick={() => setToggleDropDown(false)}
                >
                  My Profile
                </Link>
                <Link
                  href="/create-prompt"
                  className="dropdown_link"
                  onClick={() => setToggleDropDown(false)}
                >
                  Create Prompt
                </Link>
                <button
                  type="button"
                  className="mt-5 w-full black_btn"
                  onClick={() => {
                    setToggleDropDown(false);
                    signOut();
                  }}
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <></>
            )}
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider: unknown) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className="black_btn"
                >
                  Sign In
                </button>
              ))}
          </>
        )}
      </div>
    </nav>
  );
}
