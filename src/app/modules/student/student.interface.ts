import { Schema, model } from 'mongoose'

export type Guardian = {
  fatherName: string
  fatherOccupation: string
  fatherContactNo: string
  motherName: string
  motherOccupation: string
  motherContactNo: string
}

export type UserName = {
  firstName: string
  middleName: string
  lastName: string
}

export type LocalGuardian = {
  name: string
  occupation: string
  contactNo: string
  address: string
}

export type Student = {
  id: string
  name: UserName
  gender: 'male' | 'female'
  dob: string
  email: string
  avatar?: string
  contactNumber: string
  emergencyContact: string
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'O+' | 'O-' | 'AB+' | 'AB-'
  presentAddress: string
  permanentAddress: string
  guardian: Guardian
  localGuardian: LocalGuardian
  profileImg?: string
  isActive: 'active' | 'inactive'
}
