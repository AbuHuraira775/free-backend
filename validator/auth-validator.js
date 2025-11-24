const {z} = require('zod')

const signupSchema = z.object({
    name: z
    .string({required_error: 'Name is required'})
    .trim()
    .min(3, {message: "Name must be at least three characters"})
    .max(255, {message: "More than 255 characters are not allowed"}),

    email: z
    .string({required_error: 'Email is required'})
    .trim()
    .email({message: `Invallid Email Address`})
    .min(8, {message: "Email At least eight characters"})
    .max(255, {message: "More than 255 characters are not allowed"}),

    phone: z
    .string({required_error: 'Phone is required'})
    .trim()
    .min(10, {message: "phone at least 10 characters"})
    .max(20, {message: "More than 20 characters are not allowed"}),

    password: z
    .string({required_error: 'Password is required'})
    .trim()
    .min(8, {message: "Password must be at least 8 characters"})
    .max(256, {message: "More than 256 characters are not allowed"}),

})

module.exports = signupSchema