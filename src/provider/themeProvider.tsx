"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"
import { useTheme } from "next-themes"
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {

    const { theme } = useTheme();

    React.useEffect(() => {
        if (theme === 'dark') {
            document.body.classList.add('dark');
        } else {
            document.body.classList.add('bg-solid');
            document.body.classList.remove('dark');
        }
    }, [theme]);
    return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
