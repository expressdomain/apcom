import { Comment as CommentData } from '@ts/types/comments';
import Comment from '@components/Comment/Comment';
import { t } from '@lingui/macro';
import styles from './CommentsList.module.scss';

const CommentsList = ({ comments }: { comments: CommentData[] }) => {
  const getCommentsList = () => {
    return comments.map((comment) => {
      return <Comment key={comment.id} comment={comment} />;
    });
  };

  return (
    <>
      <h2 className={styles.title}>{t`Comments`}</h2>
      {comments.length > 0 ? (
        <ol className={styles.list}>{getCommentsList()}</ol>
      ) : (
        <p className={styles['no-comments']}>{t`No comments yet.`}</p>
      )}
    </>
  );
};

export default CommentsList;
