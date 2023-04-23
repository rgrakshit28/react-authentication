export const validateName = (name) => {
    if (!name) {
        return "Name is required";
    }
    const regex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    if (!regex.test(name)) {
        return "Please enter a valid name";
    }
    return "";
};

export const validateEmail = (email) => {
    if (!email) {
        return "Email is required";
    }
    const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!regex.test(email)) {
        return "Please enter a valid email address";
    }
    return "";
};

export const validatePassword = (password) => {
    if (!password) {
        return "Password is required";
    }
    if (password.length < 8) {
        return "Password must be at least 8 characters long";
    }
    if (!/\d/.test(password)) {
        return "Password must contain at least one digit";
    }
    if (!/[a-zA-Z]/.test(password)) {
        return "Password must contain at least one letter";
    }
    return "";
};
