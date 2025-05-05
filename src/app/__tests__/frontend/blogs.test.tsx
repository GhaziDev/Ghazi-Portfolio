import { expect, test, vi , describe} from 'vitest';
import {render,screen,fireEvent} from '@testing-library/react'
import Blogs from '@/app/components/blogs/blogs';
import { PartialBlog } from '@/app/interfaces/interfaces';
// import { customRender } from '../test-utils';
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

describe('Blogs Test Suite',async()=>{

    const push = vi.fn()
    const component = render(<AppRouterContextProviderMock router={{push}}><Blogs data={data} pages={1}></Blogs></AppRouterContextProviderMock>)


    test('Test Blogs Data Display',async ()=>{
       
    
        const element = screen.getByText('Test 1')
        expect(element.innerHTML).toEqual('Test 1')
        
    
    })

    test("Test click event on individual blogs",async()=>{
        const element = component.container.querySelector("#indvBlog")!
        const isClicked = fireEvent.click(element,'click')
        expect(isClicked).toBe(true)
    
    })

})

