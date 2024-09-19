"use client";
import { useEffect, useState } from "react";
import { PromptCard } from "./PromptCard";

function PromptCardList({ data, handleTagClick }) {
  return (
    <div className="mt-16 prompt_layout">
      {data.map((post) => (
        <PromptCard
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  );
}

export function Feed() {
  const [searchText, setSearchText] = useState("");
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function fetchPosts() {
      const response = await fetch("/api/prompt");
      const data = await response.json();
      setPosts(data);
    }
    fetchPosts();
  }, []);
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
      <PromptCardList data={posts} handleTagClick={() => {}} />
    </section>
  );
}
