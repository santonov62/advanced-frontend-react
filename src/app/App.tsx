import React, { Suspense } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { PageLoader } from 'widgets/PageLoader/ui/PageLoader';

const App = () => (

    <div id="app" className={classNames('app', {}, [])}>
        <Suspense fallback={<PageLoader />}>
            <Navbar />
            <div className="content-page">
                <Sidebar />
                <AppRouter />
            </div>
        </Suspense>
    </div>
);

export default App;
