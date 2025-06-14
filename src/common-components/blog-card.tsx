
import React from "react";
import "./styles.scss";
import Image from "next/image";
import { Comment, Delete, ThumbUp } from '@mui/icons-material';
import Link from "next/link";

const BlogCard = ({
  author,
  title,
  date_published,
  category,
  blog_image,
  profile_image,
  isPorfile,
  isContent,
  comments,
  likes,
  content,
  _id,
  handleDelete,
  isHorizontal
}: any) => {

  const month = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"]
  const blogDate = new Date(date_published)

  return (
    <div>
      <Link href={`blogs/${_id}`}>
        <div className={isContent ? `blog-card ${isHorizontal ? 'flex gap-4 h-[206px] w-[740px]' : 'block gap-4 w-[360px] h-[440px] gap-4'}` : `blog-card gap-4 w-[360px] h-[240px]`}>
          <div
            className={isContent ? `blog-image-content ` : "blog-image"}
            style={{ backgroundImage: `url(${blog_image})` }}
          >
            {!isContent && <div className="blog-details">
              <span className="blog-date">{month[blogDate.getMonth()]} {blogDate.getDate()}, {blogDate.getFullYear()}</span>
              <h2 className="blog-name">{title}</h2>
            </div>}
          </div>
          {
            isContent &&
            <div className="blog-content">
              <span className="blog-date">{month[blogDate.getMonth()]} {blogDate.getDate()}, {blogDate.getFullYear()}</span>
              <h2 className="blog-name">{title}</h2>
              <p >{content.slice(0, 100)}</p>
              <a>Countinue Reading</a>
              <hr />
              <div className='mt-[15px]  blog-content-action  flex '  >
                <span> <Comment /> {comments}</span>
                <span> <ThumbUp /> {likes}</span>

              </div>

              {isPorfile && (
                <div className="blog-meta">
                  <div className="meta-item">
                    <Image
                      className="author-image"
                      src={profile_image}
                      alt={`${author}'s profile`}
                      height={100}
                      width={100}
                    />
                    <span className="author-name">{author}</span>
                  </div>
                  <div className="meta-item">
                    <span className="blog-category">{category}</span> |{" "}
                  </div>
                </div>
              )}
            </div>
          }
        </div>
      </Link>
      <Delete onClick={handleDelete} />
    </div>
  );
};

export default BlogCard;
