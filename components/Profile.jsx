import { PromptCard } from "./PromptCard";
export function Profile({ name, desc, data, handleEdit, handleDelete }) {
  return (
    <section className="w-full">
      <h1 className="head_text text-left">
        <span>{name} </span>
        Profile
      </h1>
      <p className="desc"> {desc}</p>
      <div className="mt-16 prompt_layout">
        {data.map((post) => (
          <PromptCard
            key={post._id}
            post={post}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        ))}
      </div>
    </section>
  );
}
