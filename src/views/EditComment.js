import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import EditCommentForm from '../components/EditCommentForm';
import { getSingleComment } from '../data/commentData';

export default function EditComment() {
  const { firebaseKey } = useParams();
  const [commentItem, setCommentItem] = useState({});

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      getSingleComment(firebaseKey).then(setCommentItem);
    }
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div>
      <h1>Edit Comment</h1>
      <EditCommentForm item={commentItem} />
    </div>
  );
}
