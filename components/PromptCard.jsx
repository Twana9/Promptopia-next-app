"use client";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useState } from "react";

export const PromptCard = ({
  post,
  handleTagClick,
  handleDelete,
  handleEdit,
}) => {
  return (
    <div className="prompt_card">
      <div className="flex justify-between items-start gap-5">
        <div
          className="flex-1 flex justify-start
        items-center gap-3 cursor-pointer"
        >
          <Image
            src={post.creator.image}
            alt="user_image"
            height={40}
            width={40}
            className="rounded-full object-contain"
          />
        </div>
        <div className="flex flex-col">
          <h3
            className="font-satoshi font-semibold
          text-gray-500"
          >
            {post.creator.username}
          </h3>
          <p
            className="font-inter font-sm 
          text-gray-500"
          >
            {post.creator.email}
          </p>
        </div>
      </div>
    </div>
  );
};
