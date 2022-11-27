import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

const regexPhone =
  /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;

const contactSchema = yup.object().shape({
  fullName: yup.string().label('Full name').required(),
  // email: yup.string().label('Email').email().required(),
  phone: yup
    .string()
    .label('Phone')
    .required()
    .matches(regexPhone, { message: 'Incorrect Phone Format' }),
  message: yup.string().label('Message').required()
  // captchaToken: yup.string().required().label('Captcha Token')
});

// export type ContactSchema = yup.InferType<typeof contactSchema>;
export type ContactSchema = {
  fullName: string;
  // email: string;
  phone: string;
  message: string;
  captchaToken: string;
};

export const useContactForm = () =>
  useForm<ContactSchema>({ resolver: yupResolver(contactSchema) });
