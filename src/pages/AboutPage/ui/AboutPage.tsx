import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Counter } from 'entities/Counter';

const AboutPage: FC = () => {
    const { t } = useTranslation('about');

    return (
        <div>
            {t('About page')}
            <Counter />
        </div>
    );
};

export default AboutPage;
