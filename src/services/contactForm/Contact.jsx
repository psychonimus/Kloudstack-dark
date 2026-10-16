import axios from 'axios';

export const contactForm = (dataObj) => {
    return axios.post("https://kompasshr.com/Master_EMail_API/api/KloudStack/sendEmail", dataObj);
}