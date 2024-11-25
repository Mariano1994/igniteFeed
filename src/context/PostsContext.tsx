import { createContext, useContext, useState } from "react";
import userimage from "../assets/avatar-1.jpg";
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
    comments?: {
      id: string;
      comment: string;
      author: {
        avatar_url: string;
        name: string;
      };
      publishedAt: Date;
      isOnwer?: boolean;
    }[];
  }[];
  handleAddNewComment: any;
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
      comments: [
        {
          id: "",
          author: {
            name: "",
            avatar_url: "",
          },
          isOnwer: false,
          comment: "",
          publishedAt: new Date(),
        },
      ],
    },
  ],
  handleAddNewComment: () => {},
});

export function PostContextProvidar({ children }: ChildrenProps) {
  const [posts, setPost] = useState(Posts);

  const handleAddNewComment = (id: string, comment: string) => {
    const newComment = posts.map((post) =>
      post.id === id
        ? {
            ...post,
            comments: [
              {
                id: crypto.randomUUID(),
                author: {
                  name: "Mariano Capiliku",
                  avatar_url: userimage,
                },
                publishedAt: new Date(),
                comment: comment,
                isOwner: true,
              },

              ...post.comments,
            ],
          }
        : post
    );

    setPost(newComment);
  };

  return (
    <PostContext.Provider value={{ posts, handleAddNewComment }}>
      {children}
    </PostContext.Provider>
  );
}

export function usePosts() {
  return useContext(PostContext);
}
