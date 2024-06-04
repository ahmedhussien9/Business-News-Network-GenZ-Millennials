export interface User {
  id: string;
  username: string;
  avatar: string;
  name: string;
  jobTitle: string;
}

export interface Comment {
  id: string;
  user: User;
  content: string;
  createdAt: string;
  likes: number;
}

export interface Post {
  id: string;
  user: User;
  postType: string;
  content?: string;
  image?: string;
  video?: string;
  createdAt: string;
  likes: number;
  comments: Comment[];
}
