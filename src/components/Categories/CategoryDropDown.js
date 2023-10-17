import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Select from "react-select";
import { fetchCategoriesAction } from "../../redux/slices/category/categorySlice";

const options = [
  { label: 'JavaScript', value: 'javascript' },
  { label: 'Python', value: 'python' },
  { label: 'Java', value: 'java' },
  { label: 'C++', value: 'c++' },
  { label: 'Ruby', value: 'ruby' },
  { label: 'HTML/CSS', value: 'html-css' },
  { label: 'PHP', value: 'php' },
  { label: 'Swift', value: 'swift' },
  { label: 'React', value: 'react' },
  { label: 'Node.js', value: 'nodejs' },
  { label: 'Next.js', value: 'nextjs' },

];

const CategoryDropDown = props => {
  //select categories

  
  
  
  const category = [
    { label: 'JavaScript', value: 'javascript' },
    { label: 'Python', value: 'python' },
    { label: 'Java', value: 'java' },
    { label: 'C++', value: 'c++' },
    { label: 'Ruby', value: 'ruby' },
    { label: 'HTML/CSS', value: 'html-css' },
    { label: 'PHP', value: 'php' },
    { label: 'Swift', value: 'swift' },
    { label: 'React', value: 'react' },
    { label: 'Node.js', value: 'nodejs' }
  ];
  const { categoryList, loading, appErr, serverErr } = category;
  //handleChange
  const handleChange = value => {
    props.onChange("category", value);
  };
  //handleBlur
  const handleBlur = () => {
    props.onBlur("category", true);
  };
  return (
    <div style={{ margin: "1rem 0" }}>
      {loading ? (
        <h3 className="text-base text-green-600">
          Product categories list are loading please wait...
        </h3>
      ) : (
        <Select
          onChange={handleChange}
          onBlur={handleBlur}
          id="category"
          options={category}
          value={props?.value?.label}
        />
      )}
      {/* Display */}
      {props?.error && (
        <div style={{ color: "red", marginTop: ".5rem" }}>{props?.error}</div>
      )}
    </div>
  );
};

export default CategoryDropDown;
