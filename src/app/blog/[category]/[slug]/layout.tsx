import React, { Suspense } from "react";
import type { Metadata } from "next";




export default function BlogLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <section>
            <Suspense fallback={<div>loading</div>}>
                {children}
            </Suspense>

        </section>
    );
}
