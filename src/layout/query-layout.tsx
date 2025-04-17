'use client';

import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {ReactNode, useState} from 'react';

const ReactQueryLayout = ({children}: { children: ReactNode }) => {
    const [client] = useState(new QueryClient());

    return (
        <QueryClientProvider client={client}>
            {children}
        </QueryClientProvider>
    );
}

export default ReactQueryLayout;
