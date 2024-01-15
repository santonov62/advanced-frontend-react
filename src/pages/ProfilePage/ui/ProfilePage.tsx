import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader } from 'shared/components/DynamicModuleLoader/DynamicModuleLoader';
import { profileReducer } from 'entities/Profile';

interface ProfilePageProps {
    className?: string
}

const reducers = { profile: profileReducer };

const ProfilePage = ({ className }: ProfilePageProps) => {
    const { t } = useTranslation();

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames(className)}>
                {t('Profile Page')}
            </div>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
