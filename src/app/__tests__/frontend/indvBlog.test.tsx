import { fireEvent, render,screen } from '@testing-library/react';
import CreateBlog from '@/app/admin/createblog';
import {describe,test,vi, expect} from 'vitest'
import { AppRouterContextProviderMock } from '../contextProviderMock';

describe('Individual Blog Test Suite',async()=>{
    const push = vi.fn()
    render(<AppRouterContextProviderMock router={{push}}><CreateBlog ></CreateBlog></AppRouterContextProviderMock>)

    test('Test Change Title Input',async()=>{
        const element = await screen.findByPlaceholderText('Write a title') as HTMLInputElement //because any other Element might not neccessary have "value" attribute
        fireEvent.change(element,{target:{value:'Test Title'}})
        expect(element.value).toEqual('Test Title')

    })

})
