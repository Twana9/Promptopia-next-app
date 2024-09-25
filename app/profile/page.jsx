"use client";
import { Profile } from "@components/Profile";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
const MyProfile = () => {
  const handleDelete = async () => {};
  const handleEdit = () => {};

  return (
    <Profile
      name="my"
      desc="Welcome to your personalized profile page"
      data={[]}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
};
export default Profile;
