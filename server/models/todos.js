import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    unique: true,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  isCompleted: {
    type: Boolean,
    default: false,
  },
});
let Todo;

try {
  // Trying to retrieve the existing model
  Todo = mongoose.model("Todo");
} catch (error) {
  // Creating the model if it doesn't exist
  Todo = mongoose.model("Todo", todoSchema);
}

export default Todo;









//export default mongoose.model("Todo", todoSchema);
//const Todo=mongoose.models.Todo || mongoose.model("Todo", todoSchema);
//export default  Todo