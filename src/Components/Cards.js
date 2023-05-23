import React, { useState } from "react";
import Card from "./Card";

//rafce
const Cards = (props) => {

const [likedCourses, setLikedCourses] = useState([]);

  let courses = props.courses;
  let catagory = props.catagory;

  function getCourses(){

    if(catagory==="All"){

        let allCourses = [];
        Object.values(courses).forEach((CoursesCategory) => {
          CoursesCategory.forEach((course) => {
            allCourses.push(course);
          });
        });
        return allCourses;
    }
    else{
        return courses[catagory];
    }
  };

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
      {
        getCourses().map((course) => {
         return <Card course={course} key={course.id} likedCourses={likedCourses} setLikedCourses={setLikedCourses} />;
      })}
    </div>
  );
};

export default Cards;
