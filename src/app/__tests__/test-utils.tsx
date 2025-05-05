import {render, RenderOptions} from '@testing-library/react'
import { ThemeProvider } from 'next-themes'

import { NextUIProvider } from '@nextui-org/react'
import { NextSessionProvider } from '../nextsessprovider'
import React from 'react';
import { ReactElement } from 'react-markdown/lib/react-markdown';


const ProvidersWrapper = ({children}:{children:React.ReactNode})=>{
    return(
        <NextSessionProvider>
            <NextUIProvider>
                <ThemeProvider>
                    {children}
                </ThemeProvider>
            </NextUIProvider>
        </NextSessionProvider>
    )
}


export const customRender = (ui:ReactElement,options?:Omit<RenderOptions,'wrapper'>)=>{
    console.log(options)
    render(ui,{wrapper:ProvidersWrapper})
}