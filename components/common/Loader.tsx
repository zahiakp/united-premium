"use client";

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

const PageLoader = () => {
    return (
<ProgressBar
        height="4.5px"
        color={"bg-blue-600"}
        options={{ showSpinner: false }}
        shallowRouting
      />
    );
}

export default PageLoader; 
