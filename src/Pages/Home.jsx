import { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Card from "../components/Card";
import Jobs from "./Jobs";
import Sidebar from "../sidebar/Sidebar";
import Newsletter from "../components/Newsletter"; // Import the Newsletter component

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSalary, setSelectedSalary] = useState("");
  const [selectedPostingDate, setSelectedPostingDate] = useState("");
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const [query, setQuery] = useState("");

  useEffect(() => {
    setIsLoading(true);
    fetch("/jobs.json")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
        setIsLoading(false);
      })
      .catch((error) => console.error("Error fetching jobs data:", error));
  }, []);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
    setCurrentPage(1);
  };

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
    setCurrentPage(1);
  };

  const handleSalaryClick = (salary) => {
    setSelectedSalary(salary);
    setCurrentPage(1);
  };

  const handleDateClick = (date) => {
    setSelectedPostingDate(date);
    setCurrentPage(1);
  };

  const filteredItems = jobs.filter((job) => {
    const matchesCategory =
      !selectedCategory ||
      selectedCategory === "all" ||
      job.jobLocation.toLowerCase() === selectedCategory.toLowerCase();
    const matchesQuery = job.jobTitle.toLowerCase().includes(query.toLowerCase());
    const matchesSalary =
      !selectedSalary ||
      selectedSalary === "" ||
      job.salaryType.toLowerCase() === selectedSalary.toLowerCase();
    const matchesPostingDate = !selectedPostingDate || (() => {
      const now = new Date();
      const jobDate = new Date(job.postingDate);
      if (selectedPostingDate === "24h") {
        return now - jobDate <= 24 * 60 * 60 * 1000;
      } else if (selectedPostingDate === "7d") {
        return now - jobDate <= 7 * 24 * 60 * 60 * 1000;
      } else if (selectedPostingDate === "30d") {
        return now - jobDate <= 30 * 24 * 60 * 60 * 1000;
      }
      return true;
    })();
    return matchesCategory && matchesQuery && matchesSalary && matchesPostingDate;
  });

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const paginatedItems = filteredItems.slice(startIndex, endIndex);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const result = paginatedItems.map((data, i) => <Card key={i} data={data} />);

  return (
    <div>
      <Banner query={query} handleInputChange={handleInputChange} />
      <div className="bg-[#FAFAFA] md:grid grid-cols-4 gap-8 lg:px-24 px-4 py-12">
        <div className="bg-white p-4 rounded">
          <Sidebar
            handleChange={handleChange}
            handleClick={handleSalaryClick}
            handleDateClick={handleDateClick}
          />
        </div>
        <div className="col-span-2 bg-white p-4 rounded-sm">
          {isLoading ? (
            <p className="font-medium">Loading.....</p>
          ) : filteredItems.length > 0 ? (
            <>
              <Jobs result={result} />
              <div className="flex justify-center mt-4 space-x-8">
                <button
                  onClick={prevPage}
                  disabled={currentPage === 1}
                  className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 disabled:bg-gray-200"
                >
                  Previous
                </button>
                <span>
                  Page {currentPage} of {totalPages}
                </span>
                <button
                  onClick={nextPage}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 disabled:bg-gray-200"
                >
                  Next
                </button>
              </div>
            </>
          ) : (
            <>
              <h3 className="text-lg font-bold mb-2">0 Jobs</h3>
              <p>No Data Found</p>
            </>
          )}
        </div>
        <div className="bg-white p-4 rounded">
          <Newsletter />
        </div>
      </div>
    </div>
  );
};

export default Home;
