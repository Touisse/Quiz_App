import React from "react";
import Box from "@mui/material/Box";
import { FormControl, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { handleAmountChange } from "../redux/actions";

const TextFieldCom = () => {
  const dispatch = useDispatch();
  const handleChange = (e) => {
    dispatch(handleAmountChange(e.target.value));
  };
  return (
    <div>
      <Box mt={3} width="100%">
        <FormControl fullWidth size="small">
          <TextField
            onChange={handleChange}
            variant="outlined"
            label="Amount of Questions"
            type="number"
            size="small"
          ></TextField>
        </FormControl>
      </Box>
    </div>
  );
};

export default TextFieldCom;
