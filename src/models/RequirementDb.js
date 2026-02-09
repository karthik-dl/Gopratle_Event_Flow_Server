import mongoose from "mongoose";

const RequirementSchema = new mongoose.Schema({
    eventName: String,
    eventType: String,
    startDate: Date,
    endDate: Date,
    location: String,
    venue: String,

    hireType: {
        type: String,
        enum: ["planner", "performer", "crew"],
        required: true
    },
    details: Object,
    createdAt: {
        type: Date,
        default: Date.now
    }
})
const RequirementDb = mongoose.model("Requirement", RequirementSchema);

export default RequirementDb;