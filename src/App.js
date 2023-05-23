import React, { useEffect, useState } from "react";
import { apiUrl, filterData } from "./data";
import Navbar from "./Components/Navbar";
import Filter from "./Components/Filter";
import Cards from "./Components/Cards";
import { toast } from "react-toastify";
import Spinner from "./Components/Spinner";

const App = () => {
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [catagory, setCatagory] = useState(filterData[0].title);

  async function fetchData() {
    setLoading(true);
    try {
      const response = await fetch(apiUrl);
      const output = await response.json();
      setCourses(output.data);

    } catch (error) {
      toast.error("Network issue");
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-[100vh] flex flex-col bg-bgDark2">
      <div>
        <Navbar />
      </div>
<div className="bg-bgDark2 ">
      <div>
        <Filter filterData={filterData} catagory={catagory} setCatagory = {setCatagory}/>
      </div>

      <div className="w-11/12 max-w-[1200px] flex flex-wrap mx-auto justify-center items-center min-h-[50vh]">{loading ? <Spinner /> : <Cards courses={courses} catagory={catagory} />}</div>
    </div>
    </div>
  );
};

export default App;
