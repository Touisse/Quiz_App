import React from "react";
import SelectField from "../components/SelectField";
import Box from "@mui/material/Box";
import { Button, CircularProgress, Typography } from "@mui/material";
import TextFieldCom from "../components/TextFieldCom";
import useAxios from "../hooks/useAxios";
import { useNavigate } from "react-router-dom";

const Settings = () => {
  const { response, error, loading } = useAxios({ url: "/api_category.php" });
  const navigate = useNavigate();
  if (loading) {
    return (
      <Box mt={20}>
        <CircularProgress />
      </Box>
    );
  }
  if (error) {
    return (
      <Typography mt={20} variant="h6" color="red">
        Some Went Wrong
      </Typography>
    );
  }
  const difficulttyOptions = [
    { id: "easy", name: "Easy" },
    { id: "medium", name: "Medium" },
    { id: "hard", name: "Hard" },
  ];

  const typeOptions = [
    { id: "multiple", name: "Multiple Choise" },
    { id: "boolean", name: "True/False" },
  ];
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/questions");
  };
  return (
    <div>
      <Typography variant="h2" fontWeight="bold">
        Quiz App
      </Typography>
      <form onSubmit={handleSubmit}>
        <SelectField options={response.trivia_categories} label="Category" />
        <SelectField options={difficulttyOptions} label="Difficultly" />
        <SelectField options={typeOptions} label="Type" />
        <TextFieldCom />
        <Box mt={3} width="100%">
          <Button fullWidth variant="contained" type="submit">
            Get Started
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default Settings;
