import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

const contactSchema = yup.object().shape({
  fullname: yup.string().required().label('Full Name'),
  email: yup.string().email().required().label('Email'),
  phone: yup.string().required().label('Phone'),
  message: yup.string().required().label('Message'),
  captchaToken: yup.string().required().label('Captcha Token'),
});

export type ContactSchema = yup.InferType<typeof contactSchema>;

export const useContactForm = () =>
  useForm<ContactSchema>({ resolver: yupResolver(contactSchema) });
