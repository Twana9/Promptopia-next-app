"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
export function Nav() {
  const { data: session } = useSession();
  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  useEffect(() => {
    async function setUpProviders() {
      try {
        const response = await getProviders();
        setProviders(response);
      } catch (error) {
        console.log("Error fetching providers:", error);
      }
    }
    setUpProviders();
  }, []);

  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/assets/images/logo.svg"
          alt="Promptopia Logo"
          width={30}
          height={30}
          className="object-contain"
        />
        <p className="logo_text">Promptopia</p>
      </Link>
      {providers ? (
        <>
          {/* Desktop Navigation ////////////////////////////////////////// */}
          <div className="sm:flex hidden">
            {session?.user ? (
              <div className="flex gap-3 md:gap-5">
                <Link href="/create-prompt" className="black_btn">
                  Create Post
                </Link>
                <button type="button" onClick={signOut} className="outline_btn">
                  Sign Out
                </button>
                <Link href="/profile">
                  <Image
                    src={session?.user.image}
                    alt="profile picture"
                    width={37}
                    height={37}
                    className="rounded-full"
                  />
                </Link>
              </div>
            ) : (
              <>
                {providers &&
                  Object.values(providers).map((provider) => (
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
          {/* mobile nav ////////////////////////////////// */}
          <div className="flex sm:hidden relative">
            {session?.user ? (
              <div className="flex">
                <Image
                  src={session?.user.image}
                  width={37}
                  height={37}
                  alt="profile"
                  className="rounded-full"
                  onClick={() => {
                    setToggleDropdown((prev) => !prev);
                  }}
                />
                {toggleDropdown && (
                  <div className="dropdown">
                    <Link
                      href="/profile"
                      className="dropdown_link"
                      onClick={() => setToggleDropdown(false)}
                    >
                      My Profile
                    </Link>
                    <Link
                      href="/create-prompt"
                      className="dropdown_link"
                      onClick={() => setToggleDropdown(false)}
                    >
                      Create Prompt
                    </Link>
                    <button
                      type="button"
                      onClick={() => {
                        signOut();
                        setToggleDropdown(false);
                      }}
                      className=" mt-5 w-full black_btn"
                    >
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                {providers &&
                  Object.values(providers).map((provider) => (
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
        </>
      ) : (
        <div className="flex-center w-full">
          <Image
            src="/assets/icons/loader.svg"
            height={50}
            width={50}
            alt="loader"
            className="object-contain"
          />
        </div>
      )}
    </nav>
  );
}

// let {data : session} = useSession();
// useEffect({()=>{
//   async function setUpProviders(){
//     const response = await getProviders();
//     setProviders(response);

//   }
//   setUpProviders();

// }},[])

//session?.user &&
//providers && Object.values(providers).map(provider => <button onClick={()=>signIn(provider.id)}>)
