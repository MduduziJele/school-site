import img from "../assets/me.jpg";

const BlogCard = () => {
  return (
    <div className="blogcard">
      <img src={img} />
      <p className="blogcard__heading">How I retain and remember what I study</p>
      <hr></hr>
      <p className="blogcard__content">
        Lorem ipsum dolor sit amet consectetur. Tincidunt sit et urna sit
        malesuada.Lorem ipsum dolor sit amet consectetur.
      </p>
      <div className="blogcard__buttons">
        <button>EDIT</button>
        <button>DELETE</button>
      </div>
    </div>
  );
};

export default BlogCard;
