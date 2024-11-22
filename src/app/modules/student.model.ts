import { Schema, model, connect } from 'mongoose'
import {
  Guardian,
  LocalGuardian,
  Student,
  UserName,
} from './student/student.interface'

const userNameSchema = new Schema<UserName>({
  firstName: {
    type: String,
    required: true,
  },
  middleName: {
    type: String,
  },
  lastName: {
    type: String,
    required: true,
  },
})

const gurdianSchema = new Schema<Guardian>({
  // ...
  fatherName: {
    type: String,
    required: true,
  },
  fatherOccupation: {
    type: String,
    required: true,
  },
  fatherContactNo: {
    type: String,
    required: true,
  },
})

const localGurdianSchema = new Schema<LocalGuardian>({})

const studentSchema = new Schema<Student>({
  id: { type: String },
  name: userNameSchema,
  dob: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  contactNumber: {
    type: String,
    required: true,
  },
  gender: ['male', 'female'],
  guardian: gurdianSchema,
  localGuardian: localGurdianSchema,
})

export const StudentModel = model<Student>('Student', studentSchema)
