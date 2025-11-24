const {z} = require('zod')

const serviceSchema = z.object({
    title: z
    .string({required_error: "Title must not be empty"})
    .trim()
    .min(3, {message: "At least 3 characteres"})
    .max(255, {message: "Not more than 255 characteres"}),

    description: z
    .string({required_error: "Description must not be empty"})
    .trim()
    .min(3, {message: "At least 3 characteres"})
    .max(255, {message: "Not more than 255 characteres"}),

    image: z
    .string({required_error: "Image must not be empty"})
    .trim()
    .min(3, {message: "At least 3 characteres"})
    .max(255, {message: "Not more than 255 characteres"}),

    price: z
    .number({required_error: "Price must not be empty"}),

    category: z
    .string({required_error: "Category must not be empty"})
    .trim()
    .min(3, {message: "At least 3 characteres"})
    .max(255, {message: "Not more than 255 characteres"}),

    features: z
    .array(z.string({required_error: "Featured must not be empty"}))
    .nonempty()
})

module.exports = serviceSchema
