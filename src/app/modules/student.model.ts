import { Schema, model, connect } from 'mongoose'
import validator from 'validator'
import {
  Guardian,
  LocalGuardian,
  Student,
  UserName,
} from './student/student.interface'

const userNameSchema = new Schema<UserName>({
  firstName: {
    type: String,
    required: [true, 'first is a must having properties'],
    maxlength: [20, 'First Name can not be more than 20 chars'],
    trim: true,
    validate: {
      validator: function (value: string) {
        const str = value.charAt(0).toUpperCase() + value.slice(1)
        return str === value
      },
      message: '{VALUE} is not in capitalize format',
    },
  },
  middleName: {
    type: String,
    trim: true,
  },
  lastName: {
    type: String,
    required: [true, 'last is arequired'],
    validate: {
      validator: (value: string) => validator.isAlpha(value),
      message: '{VALUE} is not valid',
    },
  },
})

const gurdianSchema = new Schema<Guardian>({
  // ...
  fatherName: {
    type: String,
    required: true,
    trim: true,
  },
  fatherOccupation: {
    type: String,
    required: true,
    trim: true,
  },
  fatherContactNo: {
    type: String,
    required: true,
    trim: true,
  },
})

const localGurdianSchema = new Schema<LocalGuardian>({})

const studentSchema = new Schema<Student>({
  id: { type: String, required: true, unique: true },
  name: {
    type: userNameSchema,
    required: true,
    trim: true,
  },
  dob: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    validate: {
      validator: (value: string) => validator.isEmail(value),
      message: '{VALUE} is not an email',
    },
  },
  contactNumber: {
    type: String,
    required: true,
    trim: true,
  },
  gender: {
    type: String,
    enum: {
      values: ['male', 'female', 'other'],
      message: '{VALUE} is not valid',
    },
    required: true,
  },
  guardian: {
    type: gurdianSchema,
    required: true,
  },
  localGuardian: {
    type: localGurdianSchema,
    required: true,
  },
  bloodGroup: {
    type: String,
    enum: ['A+', 'A-', 'O+', 'O-', 'AB+', 'AB-'],
  },
  isActive: {
    type: String,
    enum: ['active', 'blocked'],
    default: 'active',
  },
})

export const StudentModel = model<Student>('Student', studentSchema)
