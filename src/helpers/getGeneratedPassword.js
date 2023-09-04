
export const getGeneratedPassword = () => {
    const passwordLength = 24;
    const password = [];
    const passwordChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+";
    
    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * passwordChars.length);
        password.push(passwordChars[randomIndex]);
    }
    
    return password.join("");
}