import Container from "../../components/Container";
import { getRepos, getUser } from "./fether";
import Link from 'next/link';
import { BsCheck } from 'react-icons/bs';
import { IoClose } from 'react-icons/io5';
import UserCard from "./UserCard";
import Repos from "./Repos";


export default async function Page({ params: {slug} }) {
    const userDetail = getUser(slug);
    const userRepos = getRepos(slug);

    const [user, repos] = await Promise.all([userDetail, userRepos])
    console.log(user);
    return <Container style={{width:"100%",margin:"70px auto",maxWidth:"1100px",padding:"0 2rem"}}>
        <div className="flex justify-center items-center mr-auto">
        <Link href="/" legacyBehavior><a className="px-5 py-2 leading-6 bg-light text-center">Back To Search</a></Link>
        <div className="flex justify-center items-center pl-2">
            <p>hireable :</p> {user.hireable===null ?  <IoClose size={30} className="text-danger"/> : <BsCheck size={40} className="text-success"/>}
        </div>
        </div>
        <UserCard user={user} />
        <Repos repos={repos} />
    </Container>
}