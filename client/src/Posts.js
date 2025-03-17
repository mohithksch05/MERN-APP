import "./App.css";

const Posts = () => {
  return (
    <div className="post">
      <div className="image">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9Vs-4b0ypRJEkf6HW7dBN47XYK67C8Gf5lA&s" />
      </div>
      <div className="texts">
        <h2>Book</h2>
        <p className="info">
          <a className="author">Mohith</a>
          <time> jan 6 2023 16:45</time>
        </p>
        <p className="summary">
          For a random blog content idea, consider exploring the concept of
          "Uncommon or Unexpected Uses for Everyday Objects", showcasing
          creative and surprising ways to repurpose common items.
        </p>
      </div>
    </div>
  );
};

export default Posts;
