
import React from "react";
import "./styles.scss";
import Image from "next/image";

const BlogCard = ({
  author,
  blogName,
  date,
  category,
  blogImage,
  authorImage,
  isPorfile,
  isContent,
  description
}: any) => {

  const month = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"]
  const blogDate = new Date(date)

  return (
    <div className={isContent ? "blog-card-content" : "blog-card"}>
      <div
        className={isContent ? "blog-image-content" : "blog-image"}
        style={{ backgroundImage: `url(${blogImage})` }}
      >
        {!isContent && <div className="blog-details">
          <span className="blog-date">{month[blogDate.getMonth()]} {blogDate.getDate()}, {blogDate.getFullYear()}</span>
          <h2 className="blog-name">{blogName}</h2>
        </div>}
        {isPorfile && (
          <div className="blog-meta">
            <div className="meta-item">
              <Image
                className="author-image"
                src={authorImage}
                alt={`${author}'s profile`}
              />
              <span className="author-name">{author}</span>
            </div>
            <div className="meta-item">
              <span className="blog-category">{category}</span> |{" "}
            </div>
          </div>
        )}
      </div>
      {isContent &&
        <div className="blog-content">
          <span className="blog-date">{month[blogDate.getMonth()]} {blogDate.getDate()}, {blogDate.getFullYear()}</span>
          <h2 className="blog-name">{blogName}</h2>
          <p >{description.slice(0, 100)}</p>
          <a>Countinue Reading</a>
          <hr />
        </div>
      }
    </div>
  );
};

export default BlogCard;
