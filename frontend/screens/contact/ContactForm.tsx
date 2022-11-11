import { sendMessage } from 'api/strapiApi';
import { BaseButton } from 'components/Button';
import { ControlTextAreaField } from 'components/Input/Control/ControlTextAreaField';
import { ControlTextField } from 'components/Input/Control/ControlTextField';
import { useRef, useState } from 'react';
import { ContactSchema, useContactForm } from './types';
import ReCAPTCHA from 'react-google-recaptcha';
import { ContactHead } from './ContactAddress';
import { HelperText } from 'components/Input/BasicForm/HelperText';
import Khmer from 'public/languages/khmer/translation.json';
import English from 'public/languages/english/translation.json';

interface Props {
  locale: string;
}

export const ContactForm: React.FC<Props> = ({ locale }) => {
  const [isLoading, setLoading] = useState(false);
  const reCaptchaRef = useRef();
  const { control, formState, handleSubmit, reset, setValue } = useContactForm();
  const isKh = locale === 'km';

  function onSubmit(data: ContactSchema) {
    try {
      setLoading(true);
      sendMessage(data);
    } catch (error) {
      alert('Something went wrong!');
    } finally {
      reset({});
      setLoading(false);
    }
  }

  return (
    <div>
      <ContactHead title={isKh ? Khmer['send-us-message'] : English['send-us-message']} />

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-4">
        <ControlTextField name="fullname" control={control} placeholder="Full Name" fullWidth />

        <ControlTextField
          name="email"
          control={control}
          placeholder="Email"
          type="email"
          fullWidth
        />

        <ControlTextField name="phone" control={control} placeholder="Phone" type="tel" fullWidth />

        <ControlTextAreaField name="message" control={control} placeholder="Message" fullWidth />

        <ReCAPTCHA
          size="normal"
          ref={reCaptchaRef}
          onChange={x => setValue('captchaToken' as never, x as never)}
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_KEY}
        />

        {formState.errors.captchaToken && (
          <HelperText error helperText={formState.errors.captchaToken.message} />
        )}

        <div>
          <BaseButton disabled={isLoading} type="submit">
            {isLoading
              ? isKh
                ? Khmer['sending']
                : English['sending']
              : isKh
              ? Khmer['send-message']
              : English['send-message']}
          </BaseButton>
        </div>
      </form>
    </div>
  );
};
