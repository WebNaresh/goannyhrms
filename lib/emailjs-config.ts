import { InquiryFormValues } from '@/app/organization/_components/inquiry-form';
import emailjs from '@emailjs/browser';

export const initEmailJS = () => {
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '');
};

export const sendEmail = (templateParams: InquiryFormValues) => {
    console.log(`🚀 ~ file: emailjs-config.ts:9 ~ templateParams:`, templateParams)
    return emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        {
            from_name: templateParams.name,
            subject: templateParams.subject,
            email: templateParams.email,
            reply_to: templateParams.email,
        }
    );
};
