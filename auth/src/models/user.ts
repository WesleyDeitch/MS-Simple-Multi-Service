import mongoose from 'mongoose';

// An interface that describes the properties
// are required to create a new user
interface UserAttrs {
  email: string;
  password: string;
}

// An interface the describes the properties
// that an user model has
interface UserModel extends mongoose.Model<any> {
  build(attrs: UserAttrs): any;
}

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

userSchema.statics.build = (attrs: UserAttrs) => {
  return new User(attrs);
};

const User = mongoose.model('User', userSchema);

export { User };
