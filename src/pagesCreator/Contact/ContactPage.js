import React, { memo } from 'react';
import { ContactForm } from 'components/organisms';

const ContactTemplate = () => <ContactForm />;

export default memo(ContactTemplate, () => true);
