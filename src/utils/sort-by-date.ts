import type { Comment } from '../types/comment';

export const sortCommentsByDate = (comments: Comment[]): Comment[] => comments.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
