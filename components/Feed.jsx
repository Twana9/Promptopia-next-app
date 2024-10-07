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
  const [posts, setPosts] = useState([]);

  const [searchText, setSearchText] = useState("");
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState([]);
  useEffect(() => {
    async function fetchPosts() {
      const response = await fetch("/api/prompt");
      const data = await response.json();
      setPosts(data);
    }
    fetchPosts();
  }, []);
  const filterPrompts = (searchText) => {
    const regex = new RegExp(searchText, "i");

    return posts.filter(
      (item) =>
        regex.test(item.creator.username) ||
        regex.test(item.prompt) ||
        regex.test(item.tag)
    );
  };
  const handleSearchChange = (e) => {
    clearTimeout(searchTimeout);
    setSearchText(e.target.value);

    setSearchTimeout(
      setTimeout(() => {
        const searchResult = filterPrompts(e.target.value);
        setSearchedResults(searchResult);
      }, 500)
    );
  };
  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          onChange={handleSearchChange}
          value={searchText}
          required
          placeholder="Search for a tag or a username"
          className="search_input peer"
        />
      </form>
      {searchText ? (
        <PromptCardList data={searchedResults} handleTagClick={() => {}} />
      ) : (
        <PromptCardList data={posts} handleTagClick={() => {}} />
      )}
    </section>
  );
}
