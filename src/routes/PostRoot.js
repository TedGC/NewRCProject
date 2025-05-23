import { Outlet } from 'react-router-dom'
import PostDetailPage from '../pages/PostDetail'



export default function PostLayout() {



    return (
        <>
            <PostDetailPage />
            <Outlet />
        </>

    )
}