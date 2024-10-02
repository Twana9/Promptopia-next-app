"use client";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useSession } from "next-auth/react";
import { Form } from "@components/Form";

export default function UpdatePrompt() {
  const searchParam = useSearchParams();
  const paramId = searchParam.get("id");
  const router = useRouter();
  const { data: session } = useSession();
  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({
    prompt: "",
    tag: "",
  });

  useEffect(() => {
    const updatePrompt = async () => {
      const response = await fetch(`/api/prompt/${paramId}`, {
        prompt: post.prompt,
        tag: post.tag,
      });
      return JSON.stringify(response);
    };
    updatePrompt();
  }, [paramId]);
  async function createPrompt(e) {
    e.preventDefault();
    setSubmitting(true);
    try {
      const response = await fetch("/api/prompt/new", {
        method: "POST",
        body: JSON.stringify({
          prompt: post.prompt,
          userId: session?.user.id,
          tag: post.tag,
        }),
      });
      if (response.ok) {
        router.push("/");
      }
    } catch (err) {
      console.log(err);
    } finally {
      setSubmitting(false);
    }
  }
  return (
    <Form
      type="Create"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={() => {}}
    />
  );
}
