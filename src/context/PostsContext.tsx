import { createContext, useContext, useState } from "react";
import { Posts } from "../utils/PostsData";

interface PostContextProps {
  posts: {
    id: string;
    author: {
      avatar_url: string;
      name: string;
      role: string;
    };
    publisedAt: Date;
    content: string;
  }[];
}

interface ChildrenProps {
  children: React.ReactNode;
}

export const PostContext = createContext<PostContextProps>({
  posts: [
    {
      id: "",
      author: {
        name: "",
        role: "",
        avatar_url: "",
      },
      publisedAt: new Date(),
      content: "",
    },
  ],
});

export function PostContextProvidar({ children }: ChildrenProps) {
  const [posts] = useState(Posts);

  return (
    <PostContext.Provider value={{ posts }}>{children}</PostContext.Provider>
  );
}

export function usePosts() {
  return useContext(PostContext);
}
