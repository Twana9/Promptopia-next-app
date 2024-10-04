"use client";
import { Profile } from "@components/Profile";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
const MyProfile = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${session?.user.id}/posts`);
      const data = await response.json();
      setPosts(data);
    };
    if (session?.user.id) fetchPosts();
  }, []);

  const handleDelete = async (post) => {
    const isConfirmed = confirm("are you sure you want to delete the prompt?");
    if (isConfirmed) {
      try {
        await fetch(`/api/prompt/${post._id.toString()}`, {
          method: "DELETE",
        });
        const newPosts = posts.filter((p) => p._id !== post._id);
        setPosts(newPosts);
      } catch (error) {
        console.log(error);
      }
    }
  };
  const handleEdit = (post) => {
    router.push(`/update-prompt?id=${post._id}`);
  };

  return (
    <Profile
      name="my"
      desc="Welcome to your personalized profile page"
      data={posts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
};
export default MyProfile;
