export function Form({ type, submitting, post, setPost, handleSubmit }) {
  return (
    <section className=" w-full max-w-full flex-left flex-col">
      <h1 className="head_text ">
        <span className="blue_gradient">{type} Post</span>
      </h1>
      <p className="desc max-w-md">
        {type} and share amazing prompts with the world, and let your
        imagination run wild with any AI-powered platform.
      </p>
      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2xl flex flex-col gap-7
         glassmorphism"
      ></form>
    </section>
  );
}
