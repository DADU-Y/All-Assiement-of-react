import React, { useEffect, useState } from "react";
import {
  Box, Button, Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Checkbox, IconButton, Typography, Paper
} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';

export default function EmployeeTable() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then(res => res.json())
      .then(data => setUsers(data.users));
  }, []);

  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{
        backgroundColor: "#2c3e50",
        color: "white",
        p: 2,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: "8px 8px 0 0"
      }}>
        <Typography variant="h5">
          Manage <strong>Employees</strong>
        </Typography>
        <Box>
          <Button variant="contained" color="error" sx={{ mr: 2 }} startIcon={<DeleteIcon />}>
            Delete
          </Button>
          <Button variant="contained" color="success" startIcon={<AddIcon />}>
            Add New Employee
          </Button>
        </Box>
      </Box>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><Checkbox disabled /></TableCell>
              <TableCell><strong>Name</strong></TableCell>
              <TableCell><strong>Email</strong></TableCell>
              <TableCell><strong>Address</strong></TableCell>
              <TableCell><strong>Phone</strong></TableCell>
              <TableCell><strong>Actions</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map(user => (
              <TableRow key={user.id}>
                <TableCell><Checkbox /></TableCell>
                <TableCell>{`${user.firstName} ${user.lastName}`}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{`${user.address.address}, ${user.address.city}, ${user.address.country}`}</TableCell>
                <TableCell>{user.phone}</TableCell>
                <TableCell>
                  <IconButton><EditIcon /></IconButton>
                  <IconButton><DeleteIcon /></IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
