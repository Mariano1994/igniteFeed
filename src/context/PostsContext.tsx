import { createContext, useContext, useState } from "react";
import userimage from "../assets/avatar-1.jpg";
import { Posts } from "../utils/PostsData";

export interface Comment {
  id: string;
  comment: string;
  author: {
    avatar_url: string;
    name: string;
  };
  publishedAt: Date;
  isOwner?: boolean;
  likesCount: number;
}

interface Post {
  id: string;
  author: {
    avatar_url: string;
    name: string;
    role: string;
  };
  publisedAt: Date;
  content: string;
  comments?: Comment[];
}

interface PostContextProps {
  posts: Post[];
  handleAddNewComment: (id: string, comment: string) => void;
  handleDeleteComment: (postId: string, commentId: string) => void;
  handlerApplaudComment: (id: string, comment: string) => void;
  handlerAddNewPost: (postcontent: string) => void;
}

interface ChildrenProps {
  children: React.ReactNode;
}

export const PostContext = createContext<PostContextProps>({
  posts: [],
  handleAddNewComment: () => {},
  handleDeleteComment: () => {},
  handlerApplaudComment: () => {},
  handlerAddNewPost: () => {},
});

export function PostContextProvidar({ children }: ChildrenProps) {
  const [posts, setPost] = useState<Post[]>(Posts);

  // FUNCTION TO CREATE A NEW POST
  const handlerAddNewPost = (postcontent: string) => {
    const newPost = [
      {
        id: crypto.randomUUID(),
        author: {
          avatar_url: userimage,
          name: "Mariano Capiliku",
          role: "Web Developer",
        },
        publisedAt: new Date(),
        content: postcontent,
        comments: [],
      },
      ...posts,
    ];
    setPost(newPost);
  };

  // FUNCTION TO ADD NEW COMMENT
  const handleAddNewComment = (id: string, comment: string) => {
    const newComment = posts.map((post) =>
      post.id === id
        ? {
            ...post,
            comments: post.comments
              ? [
                  {
                    id: crypto.randomUUID(),
                    author: {
                      name: "Mariano Capiliku",
                      avatar_url: userimage as string,
                    },
                    publishedAt: new Date(),
                    comment,
                    isOwner: true,
                    likesCount: 0,
                  },
                  ...post.comments,
                ]
              : [],
          }
        : post
    );

    setPost(newComment);
  };

  // FUNCTION TO DELETE A COMMENT
  const handleDeleteComment = (postId: string, commentId: string) => {
    const updatedPosts = posts.map((post) =>
      post.id === postId
        ? {
            ...post,
            comments: post.comments?.filter(
              (comment) => comment.id !== commentId
            ),
          }
        : post
    );

    setPost(updatedPosts);
  };

  // FUNCTION TO APPLAUD COMMENTS
  const handlerApplaudComment = (postId: string, commentId: string) => {
    const applaudComment = posts.map((post) =>
      post.id === postId
        ? {
            ...post,
            comments: post.comments?.map((comment) =>
              comment.id === commentId
                ? { ...comment, likesCount: comment.likesCount + 1 }
                : comment
            ),
          }
        : post
    );

    setPost(applaudComment);
  };

  return (
    <PostContext.Provider
      value={{
        posts,
        handleAddNewComment,
        handleDeleteComment,
        handlerApplaudComment,
        handlerAddNewPost,
      }}
    >
      {children}
    </PostContext.Provider>
  );
}

export function usePosts() {
  return useContext(PostContext);
}
