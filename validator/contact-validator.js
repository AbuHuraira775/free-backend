const {z} = require('zod')

const contactSchema = z.object({
    name: z
    .string({required_error: "Name must not be empty"})
    .trim()
    .min(3, {message: "At least 3 characteres"})
    .max(255, {message: "Not more than 255 characteres"}),

    email: z
    .string({required_error: "Email must not be empty"})
    .trim()
    .email({message: `Invallid Email Address`})
    .min(3, {message: "At least 3 characteres"})
    .max(255, {message: "Not more than 255 characteres"}),

    message: z
    .string({required_error: "Message must not be empty"})
    .min(3, {message: "At least 3 characteres"})
    .max(255, {message: "Not more than 255 characteres"}),

})

module.exports = contactSchema  