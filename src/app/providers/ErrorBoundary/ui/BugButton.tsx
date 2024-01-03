import { useEffect, useState } from 'react';
import { Button } from 'shared/ui/Button/Button';

interface BugButtonProps {
    className?: string
}

// Component only for test error boundary component
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const BugButton = ({ className }: BugButtonProps) => {
    const [error, setError] = useState(false);

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    const onThrow = () => {
        setError(true);
    };

    return (
        // eslint-disable-next-line i18next/no-literal-string
        <Button onClick={onThrow}>
            Throw Error
        </Button>
    );
};
