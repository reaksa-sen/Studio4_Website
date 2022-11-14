import { Heading } from 'components/Heading';
import Link from 'next/link';
import { useState } from 'react';
import { ContactAddress } from 'screens/contact/ContactAddress';
import { ContactForm } from 'screens/contact/ContactForm';

export const HomeContact: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: any) => {
    if (!fullName || !email || !message) {
      return;
    }

    e.preventDefault();

    let data = { fullName, email, message, phoneNumber };

    try {
      setIsSubmitting(true);
      await fetch('/api/contact', {
        method: 'POST',
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }).then(res => {
        if (res.status === 200) {
          alert('Your message has been sent!');
          setFullName('');
          setEmail('');
          setMessage('');
          setPhoneNumber('');
          setIsSubmitting(false);
        } else {
          throw new Error('Something went wrong!');
        }
      });
    } catch (error) {
      alert('Something went wrong!');
    }
  };
  return (
    <div>
      <div className="container py-4 px-8">
        <Heading text={'Contact'} />
        <div className=" flex flex-col justify-between gap-14  pr-6 md:grid md:grid-cols-4 md:pr-8">
          <div className="col-span-2 flex flex-col space-y-8">
            <ContactAddress
              contact={{
                address:
                  'OneWorld Information Technology Co., Ltd No. 336C st 93 Corner 282, Boeung Kengkong1 Commune, Boeung Kengkong District, Phnom Penh, Cambodia 12211',
                google_map_url:
                  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.966401567658!2d104.91875771471881!3d11.554266347513604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109513d577464f9%3A0xce74c8b169973bd1!2sOneworld%20Technology!5e0!3m2!1sen!2skh!4v1648529706836!5m2!1sen!2skh'
              }}
            />
          </div>
          <div className="col-span-2">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};
