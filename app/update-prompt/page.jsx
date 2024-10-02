"use client";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useSession } from "next-auth/react";
import { Form } from "@components/Form";

export default function UpdatePrompt() {
  const searchParam = useSearchParams();
  const promptId = searchParam.get("id");
  const router = useRouter();

  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({
    prompt: "",
    tag: "",
  });

  useEffect(() => {
    const getPromptDetails = async () => {
      const response = await fetch(`/api/prompt/id=${promptId}`);
      const data = await response.json();
      setPost({
        prompt: data.prompt,
        tag: data.tag,
      });
    };
    if (promptId) getPromptDetails();
  }, [promptId]);
  // async function createPrompt(e) {
  //   e.preventDefault();
  //   setSubmitting(true);
  //   try {
  //     const response = await fetch("/api/prompt/new", {
  //       method: "POST",
  //       body: JSON.stringify({
  //         prompt: post.prompt,
  //         userId: session?.user.id,
  //         tag: post.tag,
  //       }),
  //     });
  //     if (response.ok) {
  //       router.push("/");
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   } finally {
  //     setSubmitting(false);
  //   }
  // }
  return (
    <Form
      type="Edit"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={() => {}}
    />
  );
}
