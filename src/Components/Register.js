import React, { useState, useEffect } from "react"
import {
    Avatar,
    CssBaseline,
    TextField,
    Grid,
    Box,
    Typography,
    Container,
    CircularProgress,
    InputAdornment,
    IconButton,
    Tooltip,
} from "@mui/material"
import { Link } from 'react-router-dom'
import logo from "../logo.svg"
import { useForm } from "react-hook-form"
import { MdOutlineVisibility, MdOutlineVisibilityOff } from "react-icons/md"
import LoadingButton from "@mui/lab/LoadingButton"
import { FaExclamationTriangle } from "react-icons/fa"

export default function Register() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })
    const [usersData, setUsers] = useState(JSON.parse(localStorage.getItem('users')) || [])
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()
    const [showLoader, setShowLoader] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const onSubmit = (data) => {
        setShowLoader(true)
        setUsers([...usersData, formData])
        addUsers()
    }

    // add user data into local storage...
    const addUsers = () => {
        localStorage.setItem('users', JSON.stringify(usersData))
        setShowLoader(false)
        setFormData({
            email: "",
            password: "",
        })
        reset()
        alert("Registration Successfull")
    }

    // this function takes inputs from input fields and store in formData variable.
    const handleChange = (event) => {
        const { name, value } = event.target
        setFormData((values) => {
            return {
                ...values,
                [name]: value,
            }
        })
    }

    // this function will show the password and also change the icon.
    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }

    useEffect(() => {
        localStorage.setItem('users', JSON.stringify(usersData))
    }, [JSON.parse(localStorage.getItem('users'))])

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Avatar src={logo} sx={{ m: 1, bgcolor: "secondary.main" }}></Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                <Box
                    component="form"
                    noValidate
                    onSubmit={handleSubmit(onSubmit)}
                    sx={{ mt: 3 }}
                >
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Email"
                                name="email"
                                margin="normal"
                                size="small"
                                {...register("email", {
                                    required: true,
                                    pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                                })}
                                error={!!errors?.email}
                                helperText={
                                    errors.email?.type === "required"
                                        ? "Please input this field."
                                        : errors.email?.type === "pattern"
                                            ? "Please input correct email."
                                            : " "
                                }
                                onChange={handleChange}
                                value={formData.email}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="password"
                                fullWidth
                                label="Password"
                                name="password"
                                margin="normal"
                                size="small"
                                type={showPassword ? "text" : "password"}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleShowPassword}
                                                edge="end"
                                            >
                                                {showPassword ? (
                                                    <MdOutlineVisibilityOff />
                                                ) : (
                                                    <MdOutlineVisibility />
                                                )}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                                {...register("password", {
                                    required: true,
                                    pattern:
                                        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/,
                                })}
                                error={!!errors?.password}
                                helperText={
                                    errors.password?.type === "required" ? (
                                        "Please input this field."
                                    ) : errors.password?.type === "pattern" ? (
                                        <Tooltip title="Password should be 8-10 Charecters, at least one uppercase, lowercase, number and special character.">
                                            <span>
                                                Invalid password see hint <FaExclamationTriangle />
                                            </span>
                                        </Tooltip>
                                    ) : (
                                        " "
                                    )
                                }
                                onChange={handleChange}
                                value={formData.password}
                            />
                        </Grid>
                    </Grid>

                    <LoadingButton
                        fullWidth
                        variant="contained"
                        sx={{ mt: 2, mb: 2 }}
                        type="submit"
                        loading={showLoader}
                        loadingIndicator={<CircularProgress size="18px" />}
                    >
                        Sign Up
                    </LoadingButton>
                    Already Registered? <Link to="/login">Log in</Link>


                </Box>
            </Box>
        </Container>
    )
}
