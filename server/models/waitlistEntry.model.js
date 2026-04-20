import mongoose from 'mongoose'

const waitlistEntrySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
      minlength: 2,
      maxlength: 80,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email address'],
      index: true,
    },
    building: {
      type: String,
      required: [true, 'Project/building field is required'],
      trim: true,
      maxlength: 240,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      required: true,
    },
    source: {
      type: String,
      default: 'landing_page',
      enum: ['landing_page'],
      required: true,
    },
  },
  {
    versionKey: false,
  },
)

export const WaitlistEntry =
  mongoose.models.WaitlistEntry ||
  mongoose.model('WaitlistEntry', waitlistEntrySchema)
