"use client";
import { useState } from "react";

export function Feed() {
  const [searchText, setSearchText] = useState("");
  function handleSearchChange(e) {}
  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          onClick={handleSearchChange}
          value={searchText}
          required
          placeholder="Search for a tag or a username"
          className="search_input peer"
        />
      </form>
    </section>
  );
}
