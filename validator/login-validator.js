const {z} = require('zod')

const loginSchema = z.object({
    email: z.
    string({required_error: "Email must not be empty"})
    .trim()
    .min(3, {message:`At least 3 characteres`})
    .max(255, {message:`Not more than 255 characteres`})
    .email({message: `Invallid Email Address`}),

    password: z
    .string({required_error: 'Password is required'})
    .trim()
    .min(8, {message: "At least 8 characters"})
    .max(256, {message: "More than 256 characters is not allowed"}),

})

module.exports = loginSchema