  import mongoose from "mongoose";

  const mealSchema = new mongoose.Schema(
    {
      name: {
        type: String,
        required: true
      },
      type: {
        type: String,
        enum: ["veg", "non-veg", "jain"],
        required: true
      },
      price: {
        type: Number,
        required: true
      },
      description: {
        type: String
      }
    },
    { timestamps: true }
  );

  export default mongoose.model("Meal", mealSchema);
