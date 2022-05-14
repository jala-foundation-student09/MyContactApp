import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const Reviews = () => {
  const { name } = useParams();
  const [reviews, setReviews] = useState([]);
  const [review, setReview] = useState({
    userName: "",
    userEmail: "",
    userReview: "",
  });
  const { userName, userEmail, userReview } = review;

  const [info, setInfo] = useState([]);

  const uniUrl = `http://universities.hipolabs.com/search?name=${name}`;

  // Get university info
  const fetchUniversity = async () => {
    const res = await fetch(uniUrl);
    const data = await res.json();
    setInfo(data);
  };
  console.log(info);

  useEffect(() => {
    fetchUniversity();
  }, []);

  // Save review
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setReview({ ...review, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setReviews((prev) => [...prev, review]);
    setReview({
      userName: "",
      userEmail: "",
      userReview: "",
    });
  };
  return (
    <div>
      {info.length !== 0
        ? info.map((item, index) => (
            <div key={index}>
              <h1>{item.name}</h1>
              <h2>{item.country}</h2>
              <div>
                <h2>Reviews</h2>
                {reviews.length !== 0
                  ? reviews.map((item, index) => (
                      <div key={index}>
                        <h4>{item.userName}</h4>
                        <p>{item.userReview}</p>
                      </div>
                    ))
                  : "No reviews yet "}
              </div>
              <form onSubmit={handleSubmit}>
                <label>
                  Name
                  <input
                    type="text"
                    placeholder="name"
                    name="userName"
                    value={userName}
                    onChange={handleOnChange}
                    required
                  />
                </label>
                <label>
                  Email
                  <input
                    type="email"
                    placeholder="email"
                    name="userEmail"
                    value={userEmail}
                    onChange={handleOnChange}
                    required
                  />
                </label>
                <label>
                  Review
                  <input
                    type="text"
                    placeholder="review"
                    name="userReview"
                    value={userReview}
                    onChange={handleOnChange}
                    required
                  />
                </label>
                <button type="submit">Add review</button>
              </form>
            </div>
          ))
        : null}
    </div>
  );
};
