import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  height: Number,
  weight: Number,
  age: Number,
  allergies: [String],
  dietary_preferences: [String],
  health_goals: [String]
});

// Password hash middleware.
userSchema.pre('save', function(next) {
  if (this.isModified('password')) {
    this.password = bcrypt.hashSync(this.password, 8);
  }
  next();
});

// Helper method to check password.
userSchema.methods.checkPassword = function(candidatePassword) {
  return bcrypt.compareSync(candidatePassword, this.password);
};

const User = mongoose.model('User', userSchema);

export default User;
