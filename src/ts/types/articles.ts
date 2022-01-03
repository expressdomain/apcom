import { ContentParts, Dates } from './app';
import { Comment, CommentsNode } from './comments';
import { Cover, RawCover } from './cover';
import { SEO } from './seo';
import {
  RawSubjectPreview,
  SubjectPreview,
  ThematicPreview,
} from './taxonomies';

export type ArticleAuthor = {
  firstName: string;
  lastName: string;
  name: string;
};

export type RawACFPosts = {
  postsInSubject: RawSubjectPreview[] | null;
  postsInThematic: ThematicPreview[] | null;
};

export type ACFPosts = {
  postsInSubject: SubjectPreview[] | null;
  postsInThematic: ThematicPreview[] | null;
};

export type Article = {
  author: ArticleAuthor;
  commentCount: number | null;
  comments: Comment[];
  content: string;
  databaseId: number;
  dates: Dates;
  id: string;
  intro: string;
  seo: SEO;
  subjects: SubjectPreview[] | [];
  thematics: ThematicPreview[] | [];
  title: string;
};

export type RawArticle = Pick<
  Article,
  'commentCount' | 'databaseId' | 'id' | 'seo' | 'title'
> & {
  acfPosts: RawACFPosts;
  author: { node: ArticleAuthor };
  comments: CommentsNode;
  contentParts: ContentParts;
  date: string;
  modified: string;
};

export type ArticlePreview = Pick<
  Article,
  'commentCount' | 'dates' | 'id' | 'intro' | 'thematics' | 'title'
> & { featuredImage: Cover; slug: string };

export type RawArticlePreview = Pick<
  Article,
  'commentCount' | 'id' | 'title'
> & {
  acfPosts: Pick<ACFPosts, 'postsInThematic'>;
  contentParts: Pick<ContentParts, 'beforeMore'>;
  date: string;
  featuredImage: RawCover;
  modified: string;
  slug: string;
};

export type PostBy = {
  postBy: RawArticle;
};

export type ArticleProps = {
  post: Article;
};
