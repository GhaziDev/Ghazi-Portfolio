import {expect, test, vi} from 'vitest'
import {render,screen} from '@testing-library/react'
import ClientBlog from '../../blog/clientComp';
import Blogs from '@/app/components/blogs/blogs';
import { PartialBlog } from '@/app/interfaces/interfaces';
import { customRender } from '../test-utils';
import { AppRouterContextProviderMock } from '../contextProviderMock';


const intersectionObserverMock = () => ({
    observe: () => null
})
window.IntersectionObserver = vi.fn().mockImplementation(intersectionObserverMock);

const data:Array<PartialBlog> = [ {
    title:'Test 1',
    date: new Date(),
    image:'somelink',
    slug:'tes1',
    tags: ['1','2','3']
}
    
]

test('Test Blogs Data Display',async ()=>{
    const push = vi.fn()
    render(<AppRouterContextProviderMock router={{push}}><Blogs data={data} pages={1}></Blogs></AppRouterContextProviderMock>)
    expect(screen.getByText('Test 1'))

})